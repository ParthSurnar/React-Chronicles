'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';


export default function MorePage() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
            <div className="container mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h1 className="text-5xl font-bold text-white mb-8">
                        Welcome to Our Amazing Page
                    </h1>
                    
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl"
                    >
                        <p className="text-xl text-white/90 leading-relaxed">
                            This is a beautifully designed page with smooth animations and modern glass-morphism effects. 
                            The gradient background creates an engaging visual experience.
                        </p>
                        
                        <button 
                            className="mt-8 px-8 py-3 bg-white text-purple-600 rounded-full font-semibold
                                                 hover:bg-purple-50 transition-colors duration-300"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {isHovered ? '✨ Amazing!' : 'Click Me'}
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}