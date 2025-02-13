"use client"
import React,{useEffect} from 'react'
import Link from 'next/link'
import Lenis from 'lenis'

function About() {
  // useEffect(() => {
  //   // Initialize Lenis
  //   const lenis = new Lenis({
  //     autoRaf: true,
  //   });
  // }, []);
  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-400 ">
        {/* <h1 className="font-semibold text-3xl ">First page</h1> */}
        < Link href="/about" className="font-semibold text-3xl armour ">About page</Link>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-purple-400 ">Second about Page</div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-red-400 ">Third about Page</div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-400 ">Fourth about Page</div>
      </>
  )
}

export default About
