import { Navigate, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import BookCreate from "./BookCreate";
import BookList from "./BookList";

function App() {
  return (
    <div className={styles.page}>
    <Routes>
      <Route path="/create" Component={BookCreate} />
      <Route path="/" Component={BookList} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </div>
  );
}

export default App;
