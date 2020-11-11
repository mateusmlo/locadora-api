import { Rental } from 'src/rental/rental.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['title'])
export default class Movie extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({
    length: 200,
  })
  synopsis: string;

  @Column()
  gender: string;

  @Column({ nullable: true })
  release_date: string;

  @Column()
  language: string;

  @Column()
  subbed: boolean;

  @Column({ nullable: true })
  director: string;

  @Column({ nullable: true })
  IMDB: string;

  @Column()
  quantity: number;

  @OneToMany(
    () => Rental,
    (rental: Rental) => rental.movie,
    { eager: true },
  )
  rentals: Rental[];
}
