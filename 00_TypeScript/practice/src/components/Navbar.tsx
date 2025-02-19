import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'Portfolio', href: '#' },
        { name: 'Contact', href: '#' }
    ];

    return (
        <nav className={`fixed w-full transition-all duration-500 ${
            scrolled 
            ? 'backdrop-blur-xl bg-black/40 border-b border-white/10' 
            : 'backdrop-blur-sm bg-transparent'
        }`}>
            {/* Enhanced animated background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -inset-[10px] opacity-40">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/30 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
                </div>
            </div>

            {/* Navbar content */}
            <div className="container mx-auto px-6 py-4 relative z-10">
                <div className="flex items-center justify-between">
                    {/* Enhanced Logo */}
                    <div className="text-3xl font-bold tracking-tighter hover:scale-105 transition-all duration-300 cursor-pointer">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-600 animate-gradient">
                            Logo
                        </span>
                    </div>

                    {/* Enhanced Navigation Menu */}
                    <ul className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <li key={item.name} className="relative group">
                                <a href={item.href} className="cursor-pointer text-sm font-medium text-white/90 hover:text-white transition-all duration-300 flex items-center space-x-2">
                                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                                    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">→</span>
                                </a>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        ))}
                        <li>
                            <button className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-0.5">
                                Connect
                            </button>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white hover:text-purple-400 transition-colors duration-300"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen 
                                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            }
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <ul className="pt-4 pb-3 space-y-3">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a href={item.href} className="block text-white/90 hover:text-white transition-colors duration-300">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
