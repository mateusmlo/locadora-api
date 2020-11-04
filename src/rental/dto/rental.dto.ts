import { IsNotEmpty, IsString } from 'class-validator';
import Movie from 'src/movies/movie.entity';

export class RentalDTO {
  @IsNotEmpty()
  movieID: Movie;

  @IsNotEmpty()
  @IsString()
  renter: string;
}
