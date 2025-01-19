import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-[#D4AF37] text-[#1C1C1C] py-2'>
        <div className="logo">
            <span className='font-bold text-xl mx-8'>Task</span>
        </div>
     <ul className="flex gap-12 mx-8">

        <li className='cursor-pointer hover:font-bold transition-all '>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all '>Your Tasks</li>
     </ul>
    </nav>
  )
}

export default Navbar
