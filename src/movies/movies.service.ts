import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { MovieRepository } from './movie.repository';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(MovieRepository)
    private movieRepository: MovieRepository,
  ) {}

  async createMovie(createMovieDto: CreateMovieDTO) {
    return this.movieRepository.createMovie(createMovieDto);
  }
}
