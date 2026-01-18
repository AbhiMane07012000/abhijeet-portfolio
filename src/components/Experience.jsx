import React from "react";
import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Software Developer",
    company: "Wiriya Technology",
    period: "Feb 2025 - Present",
    description: "Developing complex web applications. Utilized React, Next.js, and Strapi CMS to build scalable front-end interfaces and backend architectures."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16"
        >
          My <span className="text-blue-400">Experience</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-border transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot on the line */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 mt-1.5 z-10 border-4 border-background" />

              {/* Content Card */}
              <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
                <div className={`p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors shadow-sm ${
                   index % 2 === 0 ? "text-left" : "text-left md:text-right"
                }`}>
                  <h3 className="text-xl font-bold text-foreground dark:text-black">{exp.role}</h3>
                  <div className={`flex items-center gap-2 text-sm text-muted-foreground mt-1 mb-3 ${
                    index % 2 === 0 ? "justify-start" : "justify-start md:justify-end"
                  }`}>
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
              
              {/* Spacer */}
              <div className="md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;