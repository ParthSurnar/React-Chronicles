"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Lenis from 'lenis'
import { motion } from 'framer-motion'

function About() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }``

    requestAnimationFrame(raf)

    // Update scroll progress
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = window.scrollY / totalHeight
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-white z-50"
        style={{ scaleX: scrollProgress }}
        initial={{ scaleX: 0 }}
      />

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-600 text-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/about" className="font-bold text-6xl hover:text-slate-300 transition-colors duration-300">
            About Us
          </Link>
        </motion.div>
      </div>

      <motion.div 
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-800 to-purple-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
        <p className="text-xl max-w-2xl text-center">Transforming ideas into digital reality</p>
      </motion.div>

      <motion.div 
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-800 to-red-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
        <p className="text-xl max-w-2xl text-center">Leading the future of web development</p>
      </motion.div>

      <motion.div 
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-800 to-green-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-4">Join Us</h2>
        <p className="text-xl max-w-2xl text-center">Be part of our journey</p>
      </motion.div>
    </>
  )
}

export default About
