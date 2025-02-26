import { useEffect, useState } from "react";
import styles from "./BookList.module.css";
import { Book } from "api/src/books/entities/book.entity";
import { Button, FormControl, FormLabel, Input, Sheet, Table } from "@mui/joy";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { debounce } from "@mui/material/utils";

function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [page, setPage] = useState(1);
  const [pageLenght, setPageLenght] = useState(10);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const query = new URLSearchParams({
      offset: ((page - 1) * pageLenght).toString(),
      limit: pageLenght.toString(),
      ...(search ? { search } : {}),
    });

    fetch(`http://localhost:3000/books?${query}`)
      .then((res) => res.json())
      .then(setBooks);
  }, [page, pageLenght, search]);

  const renderRow = (book: Book) => (
    <tr key={book.id}>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.isbn}</td>
      <td>{book.pages}</td>
      <td>{book.rating}</td>
    </tr>
  );

  const renderTable = () => (
    <div className={styles.table}>
      <Table stickyHeader size="lg">
        <thead>
          <tr>
            <th className={styles.title}>Title</th>
            <th className={styles.author}>Author</th>
            <th className={styles.isbn}>Isbn</th>
            <th className={styles.pages}>Pages</th>
            <th className={styles.rating}>Rating</th>
          </tr>
        </thead>
        <tbody>{books.map(renderRow)}</tbody>
      </Table>
    </div>
  );

  const renderHeader = () => (
    <div className={styles.header}>
      <Button component={Link} to="/create" startDecorator={<AddIcon />}>
        New Book
      </Button>
      <div className={styles.options}>
        <div className={styles.paging}>
          <FormControl>
            <FormLabel>Page</FormLabel>
            <Input
              value={page}
              onChange={(e) => setPage(+e.target.value)}
              size="sm"
              type="number"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Page Length</FormLabel>
            <Input
              value={pageLenght}
              onChange={(e) => setPageLenght(+e.target.value)}
              size="sm"
              type="number"
            />
          </FormControl>
        </div>
        <Input
          placeholder="Search"
          defaultValue={search}
          onChange={debounce((e) => setSearch(e.target.value), 500)}
          className={styles.search}
          startDecorator={<SearchIcon />}
        />
      </div>
    </div>
  );

  return (
    <Sheet className={styles.page}>
      {renderHeader()}
      {renderTable()}
    </Sheet>
  );
}

export default BookList;
