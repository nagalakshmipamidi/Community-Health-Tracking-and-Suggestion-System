import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (

    <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center fixed top-0 z-10">
    <div className="text-2xl font-extrabold text-purple-600">LOGO</div>
    <div className="space-x-4">
      <Link to="/community" className="px-4 py-2 text-gray-700 hover:text-purple-600">Community</Link>
      <Link to="/profile" className="px-4 py-2 text-gray-700 hover:text-purple-600">Profile</Link>
      <Link to="/login" className="px-4 py-2 text-gray-700 hover:text-purple-600">Log Out</Link>
    </div>
  </nav>

  )
}

export default Nav