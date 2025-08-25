import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";

// Component

// Pages
import { Home } from "../pages/Home";
import { Navbar } from "../components/Navbar";
import { Counter } from "../pages/Counter";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="counter" element={<Counter />} />
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
