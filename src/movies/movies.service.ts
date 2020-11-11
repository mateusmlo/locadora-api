import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovieDTO } from './dto/movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
import Movie from './movie.entity';

@Injectable()
export default class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  async getMovies() {
    return await this.movieRepository.find();
  }

  async getMovieByID(id: number) {
    try {
      return await this.movieRepository.findOne(id);
    } catch (err) {
      throw new NotFoundException(`Movie with ID ${id} not found.`);
    }
  }

  async createMovie(movieDto: MovieDTO) {
    const movie = this.movieRepository.create(movieDto);

    try {
      await this.movieRepository.save(movie);
      return movie;
    } catch (err) {
      throw new BadRequestException('Movie already exists in database.');
    }
  }

  async updateMovie(id: number, updateMovieDto: UpdateMovieDTO) {
    try {
      await this.movieRepository.update(id, updateMovieDto);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  async deleteMovie(id: number) {
    const deletedMovie = await this.movieRepository.delete(id);

    if (deletedMovie.affected === 0)
      throw new BadRequestException(
        'Could not delete movie. Check if correct ID was provided.',
      );
  }
}
