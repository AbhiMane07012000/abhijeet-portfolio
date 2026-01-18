import React from "react";
import { motion } from "motion/react";

const skills = [
  "Next JS",
  "React",
  "Node JS",
  "Redux",
  "React Query",
  "Express",
  "Android Studio",
  "C",
  "C++",
  "Java",
  "Python",
  "Tailwind",
  "Bootstrap",
  "Javascript",
  "Typescript",
  "HTML",
  "CSS",
  "MongoDB",
  "MySQL",
  "Git",
  "GitHub",
  "Netlify",
  "Vercel",
  "Strapi CMS",
];


const SkillPill = ({ name }) => (
  <div className="mx-4 px-8 py-4 rounded-full bg-white dark:bg-gray-800 border border-black/5 dark:border-white/10 shadow-sm whitespace-nowrap text-lg font-medium text-foreground hover:border-primary/50 transition-colors cursor-default">
    {name}
  </div>
);

const Marquee = ({ items, direction = "left", speed = 20 }) => {
  return (
    <div className="flex overflow-hidden py-4 mask-linear-gradient">
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
        className="flex shrink-0"
      >
        {[...items, ...items].map((item, idx) => (
          <SkillPill key={`${item}-${idx}`} name={item} />
        ))}
      </motion.div>
    </div>
  );
};

const Skill = () => {
  const firstRow = skills.slice(0, Math.ceil(skills.length / 2));
  const secondRow = skills.slice(Math.ceil(skills.length / 2));

  return (
    <section id="skills" className="py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-4xl font-bold mb-6">
          My <span className="text-blue-400">Arsenal</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          The tools and technologies I use to build digital experiences.
        </p>
      </div>

      <div className="relative w-full max-w-[100vw] overflow-hidden">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex flex-col gap-8">
          <Marquee items={firstRow} direction="left" speed={30} />
          <Marquee items={secondRow} direction="right" speed={30} />
        </div>
      </div>
    </section>
  );
};

export default Skill;