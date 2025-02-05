import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CssBaseline, CssVarsProvider } from "@mui/joy";
import "@fontsource/inter";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <CssVarsProvider modeStorageKey={"mode"}>
        <CssBaseline />
        <App />
      </CssVarsProvider>
    </Router>
  </StrictMode>
);
