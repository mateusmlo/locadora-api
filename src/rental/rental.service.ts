import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RentalDTO } from './dto/rental.dto';
import { RentalRepository } from './rental.repository';

@Injectable()
export class RentalService {
  constructor(
    @InjectRepository(RentalRepository)
    private rentalRepository: RentalRepository,
  ) {}

  async rentMovie(rentalDto: RentalDTO) {
    return this.rentalRepository.rentMovie(rentalDto);
  }
}
