import React from 'react'

const Navbar = () => {
    return (
        <nav className='navbar h-8 bg-[#D4AF37] flex p-7 justify-between  items-center text-[#242424]'> 
        <div className="logo font-bold text-2xl ml-[10%] cursor-pointer">BitLinks</div>
            <ul className='flex gap-6 font-bold text-lg mr-[10%]'>
                <li className='cursor-pointer '>Home</li>
                <li className='cursor-pointer '>About</li>
                <li className='cursor-pointer '>Shorten</li>
                <li className='cursor-pointer '>Contact Us</li>
            </ul>
        </nav>
    )
}

export default Navbar
