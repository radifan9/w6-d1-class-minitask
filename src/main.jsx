import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "./router/Router.jsx";
import "./assets/styles/index.css";

// Context
import CounterProvider from "./context/counter/CounterProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterProvider>
      <Router />
    </CounterProvider>
  </StrictMode>
);
