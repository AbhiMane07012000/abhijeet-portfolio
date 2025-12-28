import React from "react";
import { Lens } from "@/components/ui/lens";
import FloatingLines from "./FloatingLines";
import { LayoutTextFlip } from "./ui/layout-text-flip";
import { motion } from "motion/react";
import { NoiseBackground } from "./ui/noise-background";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  const handleAboutMeClick = () => {
    router.push("/about");
  };

  return (
    <section id="home">
      <div className="hidden lg:block">
        <Lens>
          <div className="h-screen w-screen overflow-hidden">
            <FloatingLines
              className="flex items-center justify-center"
              enabledWaves={["top", "middle", "bottom"]}
              lineCount={[10, 7, 10]}
              lineDistance={[8, 6, 4]}
              bendRadius={5.0}
              bendStrength={-0.5}
              interactive={true}
              parallax={true}
            >
              <h2 className="text-5xl relative  md:text-6xl lg:text-9xl font-bold text-center text-white dark:text-white font-sans tracking-tight my-5">
                Abhijeet Mane
              </h2>
              <NoiseBackground
                containerClassName="w-fit p-2 rounded-full mx-auto flex justify-self-start"
                gradientColors={[
                  "rgb(255, 100, 150)",
                  "rgb(100, 150, 255)",
                  "rgb(255, 200, 100)",
                ]}
              >
                <button onClick={handleAboutMeClick} className="h-full w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-4 py-2 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]">
                  About Me &rarr;
                </button>
              </NoiseBackground>
            </FloatingLines>
          </div>
        </Lens>
      </div>
      <div className="lg:hidden flex flex-col items-center justify-center h-screen">
        <motion.div className="relative mx-4 my-5 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
          <LayoutTextFlip
            text="Hello I'm "
            words={[
              "Abhijeet Mane",
              "Frontend Developer",
              "Backend Developer",
              "MERN Stack Developer",
            ]}
          />
        </motion.div>
        <p className="font-semibold text-center my-5">
          I focus on developing user-friendly web applications that meet the
          client's requirements, with attention to detail, scalability, and
          performance.
        </p>
        <NoiseBackground
          containerClassName="w-fit p-2 rounded-full mx-auto"
          gradientColors={[
            "rgb(255, 100, 150)",
            "rgb(100, 150, 255)",
            "rgb(255, 200, 100)",
          ]}
        >
          <button onClick={handleAboutMeClick} className="h-full w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-4 py-2 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]">
            About Me &rarr;
          </button>
        </NoiseBackground>
      </div>
    </section>
  );
};

export default Hero;
