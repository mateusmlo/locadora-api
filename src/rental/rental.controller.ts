import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RentalDTO } from './dto/rental.dto';
import { RentalService } from './rental.service';

@Controller('rental')
export class RentalController {
  constructor(private rentalService: RentalService) {}

  @Get()
  async getRentedMovies() {
    return this.rentalService.getRentedMovies();
  }

  @Delete('/devolve')
  async returnRent(@Body() rentalDto: RentalDTO) {
    return this.rentalService.returnRent(rentalDto);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async rentMovie(@Body() rentalDto: RentalDTO) {
    return this.rentalService.rentMovie(rentalDto);
  }

  @Get('/expired')
  async getExpiredRents() {
    return this.rentalService.getExpiredRents();
  }
}
