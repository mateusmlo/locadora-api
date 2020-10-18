import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RentalDTO } from './dto/rental.dto';
import { RentalService } from './rental.service';

@Controller('rental')
export class RentalController {
  constructor(private rentalService: RentalService) {}

  @Post()
  @UsePipes(ValidationPipe)
  rentMovie(@Body() rentalDto: RentalDTO) {
    return this.rentalService.rentMovie(rentalDto);
  }
}
