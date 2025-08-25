import React from 'react'
import { Link } from 'react-router'

export const Navbar = () => {
  return (
    <header className='flex pt-4 px-[var(--small-pad)] mb-6'>
      <img src="/coffee.svg" alt="Coffee" />
      <nav className="flex gap-6 ml-auto">
        <ul><Link to="/counter">useReducer + Context Demo</Link></ul>
        <ul><Link>Minitask 1. ShoppingApp</Link></ul>
      </nav>
    </header>
  )
}
