"use client"; // Only needed in Next.js App Router

// import { useEffect } from "react";
// import Lenis from "@studio-freight/lenis";

// export default function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
//   useEffect(() => {
//     const lenis = new Lenis({
//       lerp: 0.1, // Controls smoothness (0 = no smoothing, 1 = super smooth)
//     });

//     function raf(time: number) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy(); // Cleanup to avoid memory leaks
//     };
//   }, []);

//   return <div>{children}</div>;
// }
