import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';

export class MovieDTO {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(200)
  synopsis: string;

  @IsNotEmpty()
  gender: string;

  @IsOptional()
  release_date: string;

  @IsNotEmpty()
  language: string;

  @IsNotEmpty()
  subbed: boolean;

  @IsOptional()
  director: string;

  @IsOptional()
  IMDB: string;

  @IsNotEmpty()
  quantity: number;
}
