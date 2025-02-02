import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="navbar h-16 bg-[#D4AF37] flex px-10 justify-between items-center text-[#242424] shadow-lg shadow-yellow-500/30 
  transition-all duration-300">

            {/* LOGO */}
            <div className="logo font-extrabold text-3xl tracking-wide ml-8 cursor-pointer 
    hover:scale-105 hover:text-white transition-all duration-300">
                <Link href="/">
                    BitLinks
                </Link>
            </div>

            {/* NAV ITEMS */}
            <ul className="flex gap-6 font-semibold text-lg items-center mr-10">
                <Link href="/" className="hover:text-white transition-all duration-300 hover:scale-105">Home</Link>
                <Link href="/about" className="hover:text-white transition-all duration-300 hover:scale-105">About</Link>
                <Link href="/contact" className="hover:text-white transition-all duration-300 hover:scale-105">Contact Us</Link>

                {/* BUTTONS */}
                <li className="flex gap-3 items-center">
                    <Link href="/shorten">
                        <button className="relative rounded-lg px-5 py-2 font-bold text-white bg-gradient-to-r from-purple-700 to-purple-500 shadow-md shadow-purple-400 
          transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 
          focus:ring-4 focus:ring-purple-500/70 active:scale-95">
                            Try now
                        </button>
                    </Link>

                    <a href="https://github.com/ParthSurnar/React-Chronicles/tree/a8f9539cbe36934b1e281ae1f2181bde170656c3/04_url-shortner" 
                     target="_blank" rel="noopener noreferrer">

                        <button className="relative rounded-lg px-5 py-2 font-bold text-white bg-gradient-to-r from-gray-900 to-gray-700 shadow-md shadow-gray-500 
          transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-400/50 
          focus:ring-4 focus:ring-gray-500/70 active:scale-95">
                            GitHub
                        </button>
                    </a>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar
