import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieDTO } from './dto/movie.dto';
import { MovieRepository } from './movie.repository';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(MovieRepository)
    private movieRepository: MovieRepository,
  ) {}

  async getMovies() {
    return this.movieRepository.getMovies();
  }

  async getMovieByID(id: number) {
    const movie = await this.movieRepository.findOne(id);

    if (!movie) throw new NotFoundException(`Movie with ID ${id} not found.`);

    return movie;
  }

  async createMovie(movieDto: MovieDTO) {
    return this.movieRepository.createMovie(movieDto);
  }

  async updateMovie(id: number, movieDto: MovieDTO) {
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
    } = movieDto;

    const movie = await this.getMovieByID(id);

    movie.title = title;
    movie.synopsis = synopsis;
    movie.gender = gender;
    movie.release_date = release_date;
    movie.language = language;
    movie.subbed = subbed;
    movie.director = director;
    movie.IMDB = IMDB;
    movie.quantity = quantity;

    await movie.save();
    return movie;
  }

  async deleteMovie(id: number) {
    return await this.movieRepository.delete(id);
  }
}
