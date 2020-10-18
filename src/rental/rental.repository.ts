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
  async getRentedMovies() {
    const rentedMovies = await this.createQueryBuilder('rent').getMany();

    return rentedMovies;
  }

  async returnRent(rentMovieDto: RentalDTO) {
    const { movieID, renter } = rentMovieDto;

    // fetch movie from database to see if it's already rented or not
    const mv = await getRepository(Movie)
      .createQueryBuilder('movie')
      .where('movie.id = :movieID', { movieID })
      .getOne();

    if (mv.quantity)
      throw new NotFoundException(`Movie ${mv.title} is available for rent.`);

    try {
      //then proceed with returning movie by deleting rent column
      await this.createQueryBuilder('rental')
        .delete()
        .where('movie.id = :movieID AND renter = :renter', { movieID, renter })
        .execute();

      //update movie quantity
      mv.quantity += 1;
      await mv.save();

      // remove rent column
      return {
        movieID,
        return_date: moment().format('L'),
      };
    } catch (err) {
      Logger.error(err);
    }
  }

  async getExpiredRents() {
    const rents = await this.getRentedMovies();

    const expiredSince = rents.map(rent => ({
      ...rent,
      expired_since:
        //check if return_date is more than a week past today
        this.dateDiff(rent.return_date, this.getToday().format('L')) > 7
          ? `Expirado ${moment(rent.return_date, 'DD-MM-YYYY').from(
              this.getToday(),
            )}`
          : '',
    }));

    return expiredSince;
  }

  async rentMovie(rentMovieDto: RentalDTO) {
    const { movieID, renter } = rentMovieDto;

    const mv = await getRepository(Movie)
      .createQueryBuilder('movie')
      .where('movie.id = :movieID', { movieID })
      .getOne();

    const rentDay = this.getToday();

    // can't reference rentDay to add, it mutates the instance
    const returnDay = this.getToday().add(1, 'week');

    if (mv.quantity === 0)
      throw new NotFoundException(
        'This movie is not available for rent at the moment.',
      );

    const rent = new Rental();
    rent.movie = movieID;
    rent.movie_title = mv.title;
    rent.quantity = 1;
    rent.rent_date = rentDay.format('L');
    rent.return_due = rentDay.to(returnDay);
    rent.renter = renter;
    rent.return_date = returnDay.calendar();

    try {
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

  private getToday() {
    return moment();
  }

  private dateDiff(from: string, to: string) {
    return moment(from, 'DD-MM-YYYY').diff(moment(to, 'DD-MM-YYYY'), 'days');
  }
}
