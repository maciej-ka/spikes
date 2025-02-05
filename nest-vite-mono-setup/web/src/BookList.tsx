import { useEffect, useState, useCallback } from "react";
import styles from "./BookList.module.css";
import { Button, FormControl, FormLabel, Input, Sheet, Table } from "@mui/joy";
import { Book } from "api/src/books/entities/book.entity";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { debounce } from "@mui/material/utils";

function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageLength, setPageLength] = useState(10);

  const debouncedSetSearch = useCallback(
    debounce((value) => setSearch(value), 500),
    []
  );

  useEffect(() => {
    const query = new URLSearchParams({
      ...(search && { search }),
      offset: ((page - 1) * pageLength).toString(),
      limit: pageLength.toString(),
    });
    fetch(`http://localhost:3000/books?${query}`)
      .then((res) => res.json())
      .then((books) => setBooks(books));
  }, [search, page, pageLength]);

  const renderBook = (book: Book) => (
    <tr key={book.id}>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.isbn}</td>
      <td>{book.pages}</td>
      <td>{book.rating}</td>
    </tr>
  );

  return (
    <Sheet className={styles.page}>
      <Button component={Link} to="/create">
        Create
      </Button>
      <div className={styles.header}>
        <FormControl>
          <Input
            placeholder="Search"
            startDecorator={<SearchIcon />}
            defaultValue={search}
            onChange={(e) => debouncedSetSearch(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Page</FormLabel>
          <Input
            type="number"
            value={page}
            onChange={(e) => setPage(+e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Elements on page</FormLabel>
          <Input
            type="number"
            value={pageLength}
            onChange={(e) => setPageLength(+e.target.value)}
          />
        </FormControl>
      </div>
      <div className={styles.table}>
        <Table
          className={styles.table}
          stickyHeader
          size="lg"
          sx={{
            "--TableCell-headBackground":
              "var(--joy-palette-background-level1)",
          }}>
          <thead>
            <tr>
              <th className={styles.title}>Title</th>
              <th className={styles.author}>Author</th>
              <th className={styles.isbn}>ISBN</th>
              <th className={styles.pages}>Pages</th>
              <th className={styles.rating}>Rating</th>
            </tr>
          </thead>
          <tbody>{books.map(renderBook)}</tbody>
        </Table>
      </div>
    </Sheet>
  );
}

export default BookList;
