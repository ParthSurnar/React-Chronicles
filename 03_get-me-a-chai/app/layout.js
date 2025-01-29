import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Project - Get me a Chai",
  description: "This is website for crowd funding project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 relative overflow-x-hidden`}
      >
        <Navbar className="bg-[#0A0F1E] text-[#E2E8F0] shadow-[0_0_20px_#FF00B6]"/>
        <div className="min-h-[88.9vh] relative flex-1">
          <div className="absolute inset-0">
            <div className="absolute left-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full 
            bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

            <div className="absolute right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full 
            bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          </div>
          <div className="relative z-10">{children}</div>
        </div>
        <Footer className="bg-[#0A0F1E] text-[#E2E8F0] "/>
      </body>
    </html>
  );
}

