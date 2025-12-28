import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import Hero from "@/components/Hero";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {


  return (
    <div
      className={`${poppins.className}`}
    >
     <Hero />
    </div> 
  );
}
