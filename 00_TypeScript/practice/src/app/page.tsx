"use client";
import React from "react";
import Link from "next/link";
import { Box, Progress, Flex, Text, Card, Container } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion"; // You'll need to install framer-motion

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <Navbar />
      
      {/* Hero Section */}
      <section className="snap-start min-h-screen relative bg-gradient-to-br from-slate-800 to-slate-600">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        <Container className="relative z-10 h-screen flex flex-col items-center justify-center px-4">
          <motion.div
            className="max-w-2xl text-center"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="text-5xl font-bold text-white mb-6">Welcome to the Future</h1>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 text-white font-semibold 
                rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 
                hover:from-emerald-600 hover:to-teal-600 
                transition-all duration-300 ease-out transform hover:scale-105
                shadow-lg hover:shadow-emerald-500/50"
            >
              Get Started →
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="snap-start min-h-screen bg-gradient-to-br from-purple-800 to-purple-600">
        <Container className="h-screen flex items-center justify-center px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {[1, 2, 3].map((item) => (
              <Card key={item} className="p-6 bg-white/10 backdrop-blur-lg rounded-xl">
                <Text className="text-xl font-semibold text-white mb-4">Feature {item}</Text>
                <Progress value={75} className="mb-4" />
                <Text className="text-white/80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </Card>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Statistics Section */}
      <section className="snap-start min-h-screen bg-gradient-to-br from-red-800 to-red-600">
        <Container className="h-screen flex items-center justify-center">
          <Flex direction="column" gap="6" className="text-center text-white">
            <motion.h2 
              className="text-4xl font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Our Impact
            </motion.h2>
            <Flex gap="8" wrap="wrap" justify="center">
              {['Users', 'Countries', 'Projects'].map((stat, index) => (
                <motion.div
                  key={stat}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-lg p-8 rounded-xl"
                >
                  <Text className="text-3xl font-bold">{(index + 1) * 1000}+</Text>
                  <Text size="2">{stat}</Text>
                </motion.div>
              ))}
            </Flex>
          </Flex>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="snap-start min-h-screen bg-gradient-to-br from-green-800 to-green-600">
        <Container className="h-screen flex items-center justify-center">
          <Box
            className="bg-white/10 backdrop-blur-lg p-8 rounded-xl w-full max-w-md"
          >
            <Text className="text-2xl font-bold text-white mb-6">Get in Touch</Text>
            <Link 
              href="/about" 
              className="block w-full px-6 py-3 text-white font-semibold 
                text-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 
                hover:from-blue-600 hover:to-blue-700 
                transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Learn More
            </Link>
          </Box>
        </Container>
      </section>
    </div>
  );
}
