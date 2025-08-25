import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "./router/Router.jsx";
import "./assets/styles/index.css";

// Context
import CounterProvider from "./context/counter/CounterProvider.jsx";
import TodoProvider from "./context/todo/TodoContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterProvider>
      <TodoProvider>
        <Router />
      </TodoProvider>
    </CounterProvider>
  </StrictMode>
);
