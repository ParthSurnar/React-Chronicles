import React from "react";
import Link from "next/link";
export default function Home() {
  return (
    <>
    

      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-400 "> 
        {/* <h1 className="font-semibold text-3xl ">First page</h1> */}
        < Link href="/about" className="font-semibold text-3xl armour ">About</Link>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-purple-400 ">Second Page</div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-red-400 ">Third Page</div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-400 ">Fourth Page</div>
    </>
  );
}
