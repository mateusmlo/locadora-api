import { EntityRepository, Repository } from 'typeorm';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { Movie } from './movie.entity';

@EntityRepository(Movie)
export class MovieRepository extends Repository<Movie> {
  async createMovie(createMovieDto: CreateMovieDTO) {
    const {
      title,
      synopsis,
      gender,
      release_date,
      language,
      subbed,
      director,
      IMDB,
      quantity,
    } = createMovieDto;

    const movie = new Movie();

    movie.title = title;
    movie.synopsis = synopsis;
    movie.gender = gender;
    movie.release_date = release_date;
    movie.language = language;
    movie.subbed = Boolean(subbed);
    movie.director = director;
    movie.IMDB = IMDB;
    movie.quantity = Number(quantity);

    await movie.save();

    return movie;
  }
}
