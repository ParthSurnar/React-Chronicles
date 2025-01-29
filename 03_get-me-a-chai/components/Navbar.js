import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='bg-[#120C1F] text-[#E2E8F0] shadow-[0_0_15px_#FF00B6] flex p-3 justify-between items-center'>
            <div className="logo font-bold ml-[80px] text-lg">GetMeaChai</div>

            
            <Link href={"/login"}>
                <button
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 cursor-pointer z-10">
                    <span className="font-nosifer relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 group-hover:text-white">
                        Login
                    </span>
                </button>
            </Link>
            {/* <ul className='flex justify-between gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign Up</li>
            <li>Login</li>
        </ul> */}

        </nav>
    )
}

export default Navbar
