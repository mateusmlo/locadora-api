import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovieDTO } from './dto/movie.dto';
import Movie from './movie.entity';

@Injectable()
export default class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  async getMovies() {
    return this.movieRepository.find();
  }

  async getMovieByID(id: number) {
    const movie = await this.movieRepository.findOne(id);

    if (!movie) throw new NotFoundException(`Movie with ID ${id} not found.`);

    return movie;
  }

  async createMovie(movieDto: MovieDTO) {
    const movie = this.movieRepository.create(movieDto);

    try {
      await this.movieRepository.save(movie);
    } catch (err) {
      throw new BadRequestException('Movie already exists in database.');
    }

    return movie;
  }

  async updateMovie(id: number, movieDto: MovieDTO) {
    await this.movieRepository.update(id, movieDto);

    const updatedMovie = await this.movieRepository.findOne(id);
    if (updatedMovie) return updatedMovie;

    throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
  }

  async deleteMovie(id: number) {
    const deletedMovie = await this.movieRepository.delete(id);

    if (deletedMovie.affected === 0)
      throw new BadRequestException(
        'Could not delete movie. Check if correct ID was provided.',
      );
  }
}
