import React from "react";
import { Iphone } from "./ui/iphone";
import { NoiseBackground } from "./ui/noise-background";
import { Highlighter } from "./ui/highlighter"

const About = () => {
  return (
    <div>
      <section
        id="about"
        className="flex flex-col lg:flex-row lg:h-screen py-5"
      >
        <div className="flex flex-col justify-center   py-10 lg:px-7 w-5/6 md:w-4/5  lg:w-3/5 text-left md:text-left lg:h-full ">
          <h2 className=" pl-10 lg:pl-16 md:pl-16 text-left text-xl font-extrabold pb-7 md:text-2xl font-code ">
            About
          </h2>

          <p className="pl-10 lg:pl-16 md:pl-16 text-left font-medium text-sm pb-5  md:text-lg">
            Ahoy there! 🎉 I'm a seasoned {" "}
            <Highlighter action="highlight" color="#87CEFA" >
              Full-Stack developer 
            </Highlighter>  {" "}
            based in Pune,
            India, proudly waving my Computer Science postgrad cape from SPPU!
            🎓 I've delved into web development since my freshman days. 💻 My
            focus lies in crafting websites and applications that seamlessly
            blend functionality. Oh, and did I mention {" "}
             <Highlighter action="underline" color="#FF9800" >
              my love for building full-stack Apps
            </Highlighter>  {" "} and side projects?💡It's kind of my thing! 🚀
          </p>

          <a
            href="./Abhijeet_Mane_Resume.pdf" // Replace with the actual file path
            download="Abhijeet_Mane_Resume.pdf" // Name of the file after download
            className="ml-6 md:ml-14 lg:ml-9 w-1/2 md:w-1/4 lg:w-1/4 mb-5 py-2 rounded-md flex flex-row justify-center"
          >
            <NoiseBackground
              containerClassName="w-fit p-2 rounded-full mx-auto flex justify-self-start"
              gradientColors={[
                "rgb(255, 100, 150)",
                "rgb(100, 150, 255)",
                "rgb(255, 200, 100)",
              ]}
            >
              <button
                className="h-full w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-4 py-2 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]"
              >
                Resume &darr;
              </button>
            </NoiseBackground>
          </a>
        </div>

        <div className="w-52 lg:w-60 lg:m-10 self-center md:grayscale transition duration-500 ease-in-out transform rotate-4 hover:scale-95 hover:grayscale-0">
          <Iphone src="./Photo.jpg" />
        </div>
      </section>
    </div>
  );
};

export default About;
