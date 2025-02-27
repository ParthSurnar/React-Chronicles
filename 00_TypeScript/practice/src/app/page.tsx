"use client";
import React from "react";
import Link from "next/link";
import { Box, Text, Card, Container } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div 
      className="h-screen w-full overflow-y-scroll snap-y snap-mandatory"
      style={{ scrollSnapType: "y mandatory", height: "100vh" }}
    >
      <Navbar />

      {/* Screen 1: Hero */}
      <section 
        className="snap-start min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-600"
      >
        <Container>
          <motion.div
            className="max-w-2xl text-center"
            initial="initial"
            animate="animate"
            variants={fadeInUp} 
          >
            <h1 className="text-5xl font-bold text-white mb-6">Screen One</h1>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all duration-300"
            >
              Next Screen →
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* Screen 2: Info */}
      <section 
        className="snap-start min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-800 to-indigo-600"
      >
        <Container>
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Screen Two</h2>
            <Text className="text-white/80 max-w-xl mx-auto">
             second screen.
            </Text>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
