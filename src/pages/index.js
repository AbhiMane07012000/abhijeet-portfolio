import Head from "next/head";
import { Poppins } from "next/font/google";

import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skill from "@/components/Skill";
import Experience from "@/components/Experience"; // Import must be here
import ChatBot from "@/components/ChatBot";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Abhijeet Mane</title>
        <meta
          name="description"
          content="Web site created with Love by Abhijeet Mane"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="author" content="Abhijeet Mane" />
        <meta name="keywords" content="Abhijeet, Mane, Full Stack Developer, Portfolio, abhijeet mane portfolio, Abhijeet Mane Portfolio, React Developer, Frontend Developer, frontend developer, react developer" />
        <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_SITE_VERIFICATION?`${process.env.NEXT_PUBLIC_SITE_VERIFICATION}`:'Iiqhz8xRV6A80AdIX4A2JSBcqNpfGYDi0DOT9oGri4g'} />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={`${poppins.className}`}>
        <Hero />
        <About />
        <Skill />
        <Experience /> {/* Ensure this line exists ONLY ONCE */}
        <Projects />
        <Contact />
        <ChatBot />
      </div>
    </>
  );
}