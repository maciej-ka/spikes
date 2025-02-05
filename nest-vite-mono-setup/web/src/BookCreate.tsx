import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Option,
  Sheet,
  Button,
  Stack,
  FormHelperText,
} from "@mui/joy";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CreateBookDto } from "api/src/books/dto/create-book.dto";
import styles from "./BookCreate.module.css";
import { useNavigate } from "react-router-dom";

/**
 * TheStringinator ®©™
 * Change all field types to strings.
 * So DTOs can be used in web forms.
 */
type TheStringinator<T> = { [k in keyof T]: string };

function BookCreate() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      isbn: "",
      pages: "",
      rating: "",
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
    onSubmit: (values: TheStringinator<CreateBookDto>) => {
      fetch("http://localhost:3000/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }).then(() => navigate("/"));
    },
  });

  const getError = (field: keyof CreateBookDto) =>
    formik.touched[field] && formik.errors[field];

  return (
    <Sheet className={styles.wrapper}>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={2}>
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
            <FormLabel>Number of pages</FormLabel>
            <Input type="number" {...formik.getFieldProps("pages")} />
            <FormHelperText>{getError("pages")}</FormHelperText>
          </FormControl>

          <FormControl error={!!getError("rating")}>
            <FormLabel>Rating</FormLabel>
            <Select
              {...formik.getFieldProps("rating")}
              onChange={(_, value) => formik.setFieldValue("rating", value)}>
              <Option value={1}>1</Option>
              <Option value={2}>2</Option>
              <Option value={3}>3</Option>
              <Option value={4}>4</Option>
              <Option value={5}>5</Option>
            </Select>
            <FormHelperText>{getError("rating")}</FormHelperText>
          </FormControl>

          <div className={styles.spacer} />

          <Button type="submit">Create</Button>
        </Stack>
      </form>
    </Sheet>
  );
}

export default BookCreate;
