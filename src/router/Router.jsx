import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";

// Component
import { Navbar } from "../components/Navbar";

// Pages
import { Home } from "../pages/Home";
import { Counter } from "../pages/Counter";
import { Todo } from "../pages/Todo";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="counter" element={<Counter />} />
            <Route path="todo" element={<Todo />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

function Layout() {
  return (
    <>
      <Navbar />
      <div className="px-[var(--small-pad)]">
        <Outlet />
      </div>
    </>
  );
}
