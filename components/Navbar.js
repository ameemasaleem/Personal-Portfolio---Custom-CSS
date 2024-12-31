import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="logo">My Portfolio</div>
    <div className="nav-links">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </div>
  </nav>
  )
}

export default Navbar