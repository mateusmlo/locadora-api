import {
  IsBoolean,
  IsBooleanString,
  IsNumber,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateMovieDTO {
  @IsOptional()
  title: string;

  @MinLength(10)
  @MaxLength(200)
  @IsOptional()
  synopsis: string;

  @IsOptional()
  gender: string;

  @IsOptional()
  release_date: string;

  @IsOptional()
  language: string;

  @IsOptional()
  @IsBoolean()
  subbed: boolean;

  @IsOptional()
  director: string;

  @IsOptional()
  IMDB?: string;

  @IsNumber(
    {
      allowNaN: false,
      allowInfinity: false,
    },
    {
      message: 'Invalid quantity value. A number is expected.',
    },
  )
  @IsOptional()
  quantity: number;
}
