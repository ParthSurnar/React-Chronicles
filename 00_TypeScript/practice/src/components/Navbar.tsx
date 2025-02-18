import React from 'react'

const Navbar = () => {
    return (
        <nav className="relative backdrop-blur-sm bg-gradient-to-r from-purple-600/80 to-blue-600/80 text-white shadow-lg">
            {/* Animated background effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -inset-[10px] opacity-50">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
                </div>
            </div>

            {/* Navbar content */}
            <div className="container mx-auto px-6 py-4 relative z-10">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold tracking-tight hover:scale-105 transition-transform">
                        Logo
                    </div>
                    <ul className="flex items-center space-x-8">
                        {['Home', 'About', 'Contact'].map((item) => (
                            <li key={item} className="relative group">
                                <span className="cursor-pointer text-sm font-medium hover:text-white transition-colors duration-300">
                                    {item}
                                </span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
