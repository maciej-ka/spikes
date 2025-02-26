import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { CreateBookDto } from "./dto/create-book.dto";
import { Like, Repository } from "typeorm";
import { Book } from "./entities/book.entity";
import { InjectRepository } from "@nestjs/typeorm";
import bookMocks from "./mock/books.mock";
import { ListBooksDto } from "./dto/list-books-dto";

@Injectable()
export class BooksService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async onApplicationBootstrap() {
    if (!(await this.bookRepository.count())) {
      this.bookRepository.insert(bookMocks);
    }
  }

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
      take: listBooksDto.limit || 10,
      skip: listBooksDto.offset || 0,
      where: search,
      order: {
        id: "desc",
      },
    });
  }
}
