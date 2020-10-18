import { EntityRepository, Repository } from 'typeorm';
import { MovieDTO } from './dto/movie.dto';
import { Movie } from './movie.entity';
import moment = require('moment');
import 'moment/locale/pt-br';
moment.locale('pt-br');

@EntityRepository(Movie)
export class MovieRepository extends Repository<Movie> {
  async getMovies() {
    const query = this.createQueryBuilder('movie');
    const movies = await query.getMany();

    return movies;
  }

  async createMovie(movieDto: MovieDTO) {
    const {
      title,
      synopsis,
      gender,
      release_date,
      language,
      subbed,
      director,
      IMDB,
    } = movieDto;

    const movie = new Movie();

    movie.title = title;
    movie.synopsis = synopsis;
    movie.gender = gender;
    movie.release_date = this.setDay(release_date).format('L');
    movie.language = language;
    movie.subbed = subbed;
    movie.director = director;
    movie.IMDB = IMDB;
    movie.quantity = 1;

    await movie.save();

    return movie;
  }

  private setDay(date: string) {
    return moment(date, 'DD-MM-YYYY');
  }
}
