"use client"
import React, { useEffect } from "react";
import Link from "next/link";
// import { useDisableRightClick } from "@/components/Disable";
import Lenis from 'lenis'
export default function Home() {
  // useEffect(() => {
  //   // Initialize Lenis
  //   const lenis = new Lenis({
  //     autoRaf: true,
  //   });
  // }, []);
  // useDisableRightClick();
  return (
    <>


      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-400 ">
        {/* <h1 className="font-semibold text-3xl ">First page</h1> */}
        < Link href="/about" className="font-semibold text-3xl armour ">About</Link>
        < Link href="/contact" className="font-semibold text-3xl armour ">Contact</Link>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-purple-400 ">Second Page</div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-red-400 ">Third Page</div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-400 ">Fourth Page</div>
    </>
  );
}

