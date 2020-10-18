import { EntityRepository, getRepository, Repository } from 'typeorm';
import { RentalDTO } from './dto/rental.dto';
import { Rental } from './rental.entity';
import moment = require('moment');
import 'moment/locale/pt-br';
import { Movie } from 'src/movies/movie.entity';
import { Logger, NotFoundException } from '@nestjs/common';
moment.locale('pt-br');

@EntityRepository(Rental)
export class RentalRepository extends Repository<Rental> {
  async rentMovie(rentMovieDto: RentalDTO) {
    const { movieID, renter } = rentMovieDto;

    const mv = await getRepository(Movie)
      .createQueryBuilder('movie')
      .where('movie.id = :movieID', { movieID })
      .getOne();

    const rentDay = this.setDay();

    // can't reference rentDay to add, it mutates the instance
    const returnDay = this.setDay().add(1, 'week');

    if (mv.quantity === 0)
      throw new NotFoundException(
        'This movie is not available for rent at the moment.',
      );

    const rent = new Rental();
    rent.movie = movieID;
    rent.movieTitle = mv.title;
    rent.quantity = 0;
    rent.rent_date = rentDay.format('L');
    rent.return_due = rentDay.to(returnDay);
    rent.renter = renter;
    rent.return_date = returnDay.calendar();

    try {
      console.log(mv);
      // update movie quantity
      mv.quantity -= 1;
      await mv.save();

      //perform rent
      await rent.save();
      return rent;
    } catch (err) {
      Logger.error(err);
    }
  }

  private setDay() {
    return moment();
  }
}
