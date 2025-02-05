import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Like, Repository } from 'typeorm';
import { ListBooksDto } from './dto/list-books.dto';
import booksMock from './mock/books.mock';

@Injectable()
export class BooksService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  create(createBookDto: CreateBookDto) {
    const book = this.bookRepository.create(createBookDto);
    return this.bookRepository.save(book);
  }

  findAll(listBooksDto: ListBooksDto) {
    const search = listBooksDto.search
      ? [
          { title: Like(`%${listBooksDto.search}%`) },
          { author: Like(`%${listBooksDto.search}%`) },
        ]
      : {};

    return this.bookRepository.find({
      skip: listBooksDto.offset || 0,
      take: listBooksDto.limit || 20,
      where: search,
      order: {
        id: 'desc'
      }
    });
  }

  async onApplicationBootstrap() {
    if (!await this.bookRepository.count()) {
      await this.bookRepository.insert(booksMock);
    }
  }
}
