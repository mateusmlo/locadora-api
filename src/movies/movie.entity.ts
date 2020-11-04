import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['title'])
export default class Movie extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column({
    type: 'varchar',
    length: 200,
  })
  public synopsis: string;

  @Column()
  public gender: string;

  @Column({ nullable: true })
  public release_date: string;

  @Column()
  public language: string;

  @Column()
  public subbed: boolean;

  @Column({ nullable: true })
  public director: string;

  @Column({ nullable: true })
  public IMDB: string;

  @Column()
  public quantity: number;
}
