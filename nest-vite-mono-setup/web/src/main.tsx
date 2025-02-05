import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline, CssVarsProvider } from "@mui/joy";
import "@fontsource/inter";

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
