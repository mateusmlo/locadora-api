import { NotFoundException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { MovieRepository } from './movie.repository';
import { MoviesService } from './movies.service';

const mockMovie = {
  id: 1,
  title: 'Jurassic Park',
  synopsis:
    "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
  gender: 'Action, Adventure, Sci-Fi',
  release_date: '25/06/1993',
  language: 'English',
  subbed: true,
  director: 'Steven Spielberg',
  IMDB: 'https://www.imdb.com/title/tt0107290/',
};

const mockMovieRepository = () => ({
  getMovies: jest.fn(),
  findOne: jest.fn(),
  createMovie: jest.fn(),
  delete: jest.fn(),
});

describe('Movies Service', () => {
  let moviesService;
  let movieRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        MoviesService,
        { provide: MovieRepository, useFactory: mockMovieRepository },
      ],
    }).compile();

    moviesService = module.get<MoviesService>(MoviesService);
    movieRepository = module.get<MovieRepository>(MovieRepository);
  });

  describe('getMovies', () => {
    it('gets all movies from repository', async () => {
      movieRepository.getMovies.mockResolvedValue('Got all movies');

      expect(movieRepository.getMovies).not.toHaveBeenCalled();

      const result = await moviesService.getMovies();
      expect(movieRepository.getMovies).toHaveBeenCalled();
      expect(result).toEqual('Got all movies');
    });
  });

  describe('getMovieByID', () => {
    it('calls movieRepository.findOne() and succesfuly returns the movie', async () => {
      movieRepository.findOne.mockResolvedValue(mockMovie);

      const result = await moviesService.getMovieByID(1);
      expect(result).toEqual(mockMovie);

      expect(movieRepository.findOne).toHaveBeenCalledWith(1);
    });

    it('throws an error as movie is not found', () => {
      movieRepository.findOne.mockResolvedValue(null);

      expect(moviesService.getMovieByID(1)).rejects.toThrow(NotFoundException);
    });
  });

  describe('createMovie', () => {
    it('succesfuly creates a new movie', async () => {
      movieRepository.createMovie.mockResolvedValue(mockMovie);

      expect(movieRepository.createMovie).not.toHaveBeenCalled();

      const result = await moviesService.createMovie(mockMovie);
      expect(movieRepository.createMovie).toHaveBeenCalledWith(mockMovie);
      expect(result).toEqual(mockMovie);
    });
  });

  describe('deleteMovie', () => {
    it('should delete a movie', async () => {
      movieRepository.delete.mockResolvedValue({ raw: [] });
      expect(movieRepository.delete).not.toHaveBeenCalled();

      await moviesService.deleteMovie(1);
      expect(movieRepository.delete).toHaveBeenCalledWith(1);
    });
  });

  describe('updateMovie', () => {
    it('should update given movie props', async () => {
      const save = jest.fn().mockResolvedValue(true);

      moviesService.getMovieByID = jest
        .fn()
        .mockResolvedValue({ mockMovie, save });

      expect(moviesService.getMovieByID).not.toHaveBeenCalled();
      expect(save).not.toHaveBeenCalled();

      const result = await moviesService.updateMovie(1, { gender: 'Horror' });
      expect(moviesService.getMovieByID).toHaveBeenCalled();
      expect(save).toHaveBeenCalled();
      expect(result.gender).toEqual('Horror');
    });
  });
});
