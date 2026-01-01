import Head from "next/head";
import { Poppins } from "next/font/google";

import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skill from "@/components/Skill";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export default function Home() {


  return (
    <>
    <Head>
      <title>Abhijeet Mane</title>
      <meta name="description" content="Full Stack Developer" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo.png" />
    </Head>
    <div
      className={`${poppins.className}`}
    >
     <Hero />
     <About />
     <Skill />
     <Projects />
     <Contact />
    </div> 
    </>
    
  );
}
