import React from "react";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1 className="font-semibold text-3xl">Home</h1>
     < Link href="/about" className="font-semibold text-3xl">About</Link>
    </div>
  );
}
