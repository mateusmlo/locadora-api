import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Post('/add-movie')
  @UsePipes(ValidationPipe)
  createMovie(@Body() createMovieDto: CreateMovieDTO) {
    return this.moviesService.createMovie(createMovieDto);
  }
}
