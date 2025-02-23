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
      style={{ scrollSnapType: "y mandatory", height: "100vh", overflowY: "scroll", scrollbarWidth: "thin" }}
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
              className="inline-flex items-center px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 ease-out transform hover:scale-105 shadow-lg hover:shadow-emerald-500/50"
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
              This is the second screen with some information.
            </Text>
          </motion.div>
        </Container>
      </section>

      {/* Screen 3: Features */}
      <section 
        className="snap-start min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-800 to-rose-600"
      >
        <Container>
          <motion.div
            className="w-full max-w-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white text-center mb-10">Screen Three</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((item) => (
                <Card key={item} className="p-6 bg-white/10 backdrop-blur-lg rounded-xl">
                  <Text className="text-xl font-semibold text-white">Feature {item}</Text>
                </Card>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Screen 4: Contact */}
      <section 
        className="snap-start min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-800 to-emerald-600"
      >
        <Container>
          <Box className="bg-white/10 backdrop-blur-lg p-8 rounded-xl w-full max-w-md">
            <Text className="text-2xl font-bold text-white mb-6">Screen Four</Text>
            <Link 
              href="/contact" 
              className="block w-full px-6 py-3 text-white font-semibold text-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Contact Us
            </Link>
          </Box>
        </Container>
      </section>
    </div>
  );
}
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const liveEffect = {
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const backgroundPulse = {
  animate: {
    background: [
      "linear-gradient(to bottom right, rgba(30,41,59,1), rgba(71,85,105,1))",
      "linear-gradient(to bottom right, rgba(40,51,69,1), rgba(81,95,115,1))",
      "linear-gradient(to bottom right, rgba(30,41,59,1), rgba(71,85,105,1))"
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};