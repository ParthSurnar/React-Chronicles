import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-purple-300 flex justify-between items-center mx-auto px-[350px] py-4 text-white">
      <div className="logo  font-extrabold text-2xl ">
        <span className='text-[#1E1E2C]'> &lt; </span>
        Pass
        <span className='text-[#1E1E2C]'> /&gt; </span>
      </div>
      <ul className="flex gap-4">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
