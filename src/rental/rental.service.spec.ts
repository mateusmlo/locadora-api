import { Test } from '@nestjs/testing';
import { RentalRepository } from './rental.repository';
import { RentalService } from './rental.service';

const mockRent = {
  movie: 2,
  movie_title: 'Jurassic Park: O Parque dos Dinossauros',
  quantity: 1,
  rent_date: '01/10/2020',
  return_due: 'em 7 dias',
  renter: 'Mateus',
  return_date: '07/10/2020',
  id: 2,
};

const mockRentalRepository = () => ({
  getRentedMovies: jest.fn(),
  rentMovie: jest.fn(),
  returnRent: jest.fn(),
  getExpiredRents: jest.fn(),
});

describe('Rents Service', () => {
  let rentalService;
  let rentalRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        RentalService,
        { provide: RentalRepository, useFactory: mockRentalRepository },
      ],
    }).compile();

    rentalService = module.get<RentalService>(RentalService);
    rentalRepository = module.get<RentalRepository>(RentalRepository);
  });

  describe('getRentedMovies', () => {
    it('should get all rented movies', async () => {
      rentalRepository.getRentedMovies.mockResolvedValue(
        'Got all rented movies',
      );

      expect(rentalRepository.getRentedMovies).not.toHaveBeenCalled();

      const result = await rentalService.getRentedMovies();
      expect(rentalRepository.getRentedMovies).toHaveBeenCalled();
      expect(result).toEqual('Got all rented movies');
    });
  });

  describe('rentMovie', () => {
    it('should rent a movie', async () => {
      rentalService.rentMovie = jest.fn().mockResolvedValue(mockRent);

      expect(rentalService.rentMovie).not.toHaveBeenCalled();

      const result = await rentalService.rentMovie(mockRent);
      expect(rentalService.rentMovie).toHaveBeenCalled();
      expect(result).toEqual(mockRent);
    });
  });

  describe('returnRent', () => {
    it('should return rented movie', async () => {
      const mockReturnRent = {
        movieID: mockRent.movie,
        return_date: '19/10/2020',
      };

      rentalRepository.returnRent.mockResolvedValue(mockReturnRent);
      expect(rentalRepository.returnRent).not.toHaveBeenCalled();

      const result = await rentalRepository.returnRent({
        renter: 'Mateus',
        movieID: 2,
      });
      expect(rentalRepository.returnRent).toHaveBeenCalled();
      expect(result).toEqual(mockReturnRent);
    });
  });

  describe('getExpiredRents', () => {
    it('should list expired rents', async () => {
      rentalRepository.getExpiredRents.mockResolvedValue({
        movie: 2,
        movie_title: 'Jurassic Park: O Parque dos Dinossauros',
        quantity: 1,
        rent_date: '01/10/2020',
        return_due: 'em 7 dias',
        renter: 'Mateus',
        return_date: '07/10/2020',
        id: 2,
        expired_since: 'Há 7 dias',
      });

      rentalRepository.getRentedMovies.mockResolvedValue(mockRent);
      expect(rentalRepository.getRentedMovies).not.toHaveBeenCalled();

      const result = await rentalRepository.getExpiredRents();
      expect(rentalRepository.getExpiredRents).toHaveBeenCalled();
      expect(result.expired_since).toEqual('Há 7 dias');
    });
  });
});
