import { Movie } from 'src/movies/movie.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Rental extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => Movie)
  @JoinColumn()
  movie: Movie;

  @Column()
  movie_title: string;

  @Column()
  quantity: number;

  @Column()
  rent_date: string;

  @Column()
  return_due: string;

  @Column()
  renter: string;

  @Column({ nullable: true })
  return_date: string;
}
