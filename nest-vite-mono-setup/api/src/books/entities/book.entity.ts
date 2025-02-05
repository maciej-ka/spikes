import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index()
  title: string

  @Column()
  @Index()
  author: string

  @Column()
  isbn: string

  @Column()
  pages: number

  @Column()
  rating: number
}
