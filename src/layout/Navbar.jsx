import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <Link to='/' >Home</Link>
      <Link to='/show/notes' >Notes</Link>
      <Link to='/add/note' >+</Link>
    </div>
  )
}
