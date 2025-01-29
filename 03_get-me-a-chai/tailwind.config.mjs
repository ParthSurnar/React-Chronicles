import { Nosifer } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-neon': '#E2E8F0',
      },
      fontFamily: {
        nosifer: ['Nosifer', 'cursive'],

      },
    },
  },
  plugins: [],
};
