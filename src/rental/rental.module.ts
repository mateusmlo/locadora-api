import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RentalController } from './rental.controller';
import { RentalRepository } from './rental.repository';
import { RentalService } from './rental.service';

@Module({
  imports: [TypeOrmModule.forFeature([RentalRepository])],
  controllers: [RentalController],
  providers: [RentalService],
})
export class RentalModule {}
