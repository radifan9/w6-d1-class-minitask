import React from "react";
import { Link } from "react-router";

export const Navbar = () => {
  return (
    <header className="flex py-4 px-[var(--small-pad)] shadow-sm">
      <img src="/coffee.svg" alt="Coffee" />
      <nav className="flex gap-6 ml-auto">
        <ul>
          <Link to="/counter">Counter App</Link>
        </ul>
        <ul>
          <Link>Minitask 1. ShoppingApp</Link>
        </ul>
        <ul>
          <Link to="/todo">Minitask 3. Todo App</Link>
        </ul>
      </nav>
    </header>
  );
};
