import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({
    type: 'varchar',
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
}
