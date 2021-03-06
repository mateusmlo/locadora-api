import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MovieDTO } from './dto/movie.dto';
import MoviesService from './movies.service';

@Controller('movies')
export default class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get()
  getMovies() {
    return this.moviesService.getMovies();
  }

  @Get('/:id')
  getMovieByID(@Param('id', ParseIntPipe) id: number) {
    return this.moviesService.getMovieByID(id);
  }

  @Post('/add-movie')
  @UsePipes(ValidationPipe)
  createMovie(@Body() movieDto: MovieDTO) {
    return this.moviesService.createMovie(movieDto);
  }

  @Patch('/:id/update-movie')
  updateMovie(
    @Param('id', ParseIntPipe) id: number,
    @Body() movieDto: MovieDTO,
  ) {
    return this.moviesService.updateMovie(id, movieDto);
  }

  @Delete('/:id')
  deleteMovie(@Param('id', ParseIntPipe) id: number) {
    return this.moviesService.deleteMovie(id);
  }
}
