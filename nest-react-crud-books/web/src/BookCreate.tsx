import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Option,
  Sheet,
  Button,
  FormHelperText,
  Link,
} from "@mui/joy";
import styles from "./BookCreate.module.css";
import { useFormik } from "formik";
import { CreateBookDto } from "api/src/books/dto/create-book.dto";
import * as Yup from "yup";
import { Link as RouterLink, useNavigate } from "react-router-dom";

function BookCreate() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      isbn: "",
      pages: 0,
      rating: 0,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      author: Yup.string().required("Required"),
      isbn: Yup.string().required("Required"),
      pages: Yup.number()
        .required("Required")
        .positive("Must be a positive number"),
      rating: Yup.number().required("Required"),
    }),
    onSubmit: (data: CreateBookDto) => {
      fetch("http://localhost:3000/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(() => navigate("/"));
    },
  });

  const getError = (field: keyof CreateBookDto) =>
    formik.touched[field] && formik.errors[field];

  return (
    <Sheet className={styles.page}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <FormControl error={!!getError("title")}>
          <FormLabel>Title</FormLabel>
          <Input {...formik.getFieldProps("title")} />
          <FormHelperText>{getError("title")}</FormHelperText>
        </FormControl>

        <FormControl error={!!getError("author")}>
          <FormLabel>Author</FormLabel>
          <Input {...formik.getFieldProps("author")} />
          <FormHelperText>{getError("author")}</FormHelperText>
        </FormControl>

        <FormControl error={!!getError("isbn")}>
          <FormLabel>ISBN</FormLabel>
          <Input {...formik.getFieldProps("isbn")} />
          <FormHelperText>{getError("isbn")}</FormHelperText>
        </FormControl>

        <FormControl error={!!getError("pages")}>
          <FormLabel>Pages</FormLabel>
          <Input
            type="number"
            {...formik.getFieldProps("pages")}
            value={formik.values.pages || ""}
          />
          <FormHelperText>{getError("pages")}</FormHelperText>
        </FormControl>

        <FormControl error={!!getError("rating")}>
          <FormLabel>Rating</FormLabel>
          <Select
            {...formik.getFieldProps("rating")}
            value={(formik.values.rating as unknown as string) || ""}
            onChange={(_, value) => formik.setFieldValue("rating", value)}>
            <Option value={1}>1</Option>
            <Option value={2}>2</Option>
            <Option value={3}>3</Option>
            <Option value={4}>4</Option>
            <Option value={5}>5</Option>
          </Select>
          <FormHelperText>{getError("rating")}</FormHelperText>
        </FormControl>

        <div className={styles.cta}>
          <Link component={RouterLink} to="/">
            cancel
          </Link>
          <Button className={styles.submit} type="submit">
            Create Book
          </Button>
        </div>
      </form>
    </Sheet>
  );
}

export default BookCreate;
