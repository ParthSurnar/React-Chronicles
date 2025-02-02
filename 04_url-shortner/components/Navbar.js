import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='navbar h-8 bg-[#D4AF37] flex p-7 justify-between  items-center text-[#242424]'>
            <div className="logo font-bold text-2xl ml-[10%] cursor-pointer">BitLinks</div>
            <ul className='flex gap-4 font-bold text-lg mr-[5%] items-center'>
                <Link href="/"> <li className=' '>Home</li> </Link>
                <Link href="/about"> <li className=' '>About</li> </Link>
                <Link href="/shorten"> <li className=' '>Shorten</li> </Link>
                <Link href="/contact"> <li className=' '>Contact Us</li> </Link>
                <li className='gap-2 float-start flex text-center justify-center items-center '>
                    <Link href="/generate"> <button className='rounded-lg px-3  gap-2 bg-slate-800 p-2 text-white '>Try now </button></Link>
                    <Link href="/github"> <button className='rounded-lg px-3  gap-2 bg-slate-800 p-2  text-white'> GitHub</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
