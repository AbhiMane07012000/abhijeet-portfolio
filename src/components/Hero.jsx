import React from "react";
import { Lens } from "@/components/ui/lens";
import FloatingLines from "./FloatingLines";

const Hero = () => {
  return (
    <Lens>
      <div className=" h-screen w-screen flex flex-col items-center justify-center overflow-hidden">
        <FloatingLines
          className="flex flex-col items-center justify-center"
          enabledWaves={["top", "middle", "bottom"]}
          // Array - specify line count per wave; Number - same count for all waves
          lineCount={[10, 7, 10]}
          // Array - specify line distance per wave; Number - same distance for all waves
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        >
          <h2 className="text-4xl relative  md:text-4xl lg:text-7xl font-bold text-center text-white dark:text-white font-sans tracking-tight">
            Abhijeet Mane
          </h2>
        </FloatingLines>
      </div>
    </Lens>
  );
};

export default Hero;
