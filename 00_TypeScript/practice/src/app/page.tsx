"use client";
import React from "react";
import Link from "next/link";
import { Box, Progress, Flex, Text, Radio } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css"; // ✅ Required for Radix UI Themes
// import MyDialog from "@/components/Dialog";
import * as Select from '@radix-ui/react-select';
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>

        <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-400">
        {/* <MyDialog /> */}

        <Box maxWidth="300px" p="4" style={{ backgroundColor: "gray", borderRadius: "medium" }} >
          <Progress value={50} max={100} />
            <Link 
            href="/about" 
            className="mt-4 block px-4 py-2 text-white font-semibold 
            rounded-md bg-blue-500 hover:bg-blue-600 transition-colors 
            duration-200 ease-in-out text-center shadow-md 
            hover:shadow-lg active:transform active:scale-95"
            >
            About Us
            </Link>
        </Box>
       
        
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center bg-purple-400">
        Second Page
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-red-400">
        Third Page
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-400">
        Fourth Page
      </div>
    </>
  );
}
