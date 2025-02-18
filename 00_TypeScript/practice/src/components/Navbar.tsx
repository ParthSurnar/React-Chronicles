import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full transition-all duration-300 ${
            scrolled 
            ? 'backdrop-blur-lg bg-black/30' 
            : 'backdrop-blur-sm bg-transparent'
        }`}>
            {/* Animated background effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -inset-[10px] opacity-30">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
                </div>
            </div>

            {/* Navbar content */}
            <div className="container mx-auto px-6 py-4 relative z-10">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold tracking-tight hover:scale-105 transition-transform duration-300 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                        Logo
                    </div>
                    <ul className="flex items-center space-x-8">
                        {['Home', 'About', 'Contact'].map((item) => (
                            <li key={item} className="relative group">
                                <span className="cursor-pointer text-sm font-medium text-white/90 hover:text-white transition-colors duration-300 flex items-center space-x-1">
                                    <span>{item}</span>
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                                </span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
