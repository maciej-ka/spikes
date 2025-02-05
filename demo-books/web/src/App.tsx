import { Navigate, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import BookList from "./BookList";
import BookCreate from "./BookCreate";

function App() {
  return (
    <div className={styles.layout}>
      <Routes>
        <Route path="/create" Component={BookCreate} />
        <Route path="/" Component={BookList} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
