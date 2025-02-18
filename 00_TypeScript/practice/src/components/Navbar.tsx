import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold">Logo</div>
                    <ul className="flex items-center space-x-8">
                        <li className="hover:text-purple-200 transition-colors duration-300 cursor-pointer">
                            Home
                        </li>
                        <li className="hover:text-purple-200 transition-colors duration-300 cursor-pointer">
                            About
                        </li>
                        <li className="hover:text-purple-200 transition-colors duration-300 cursor-pointer">
                            Contact
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
