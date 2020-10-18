import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeOrmConfig';
import { RentalModule } from './rental/rental.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), MoviesModule, RentalModule],
})
export class AppModule {}
