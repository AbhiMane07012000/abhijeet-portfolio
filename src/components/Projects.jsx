import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card"; // Ensure this file exists in src/components/ui/
import { AnimatePresence, motion } from "motion/react";
import { X, Github, ExternalLink } from "lucide-react";
import { projectsData } from "@/data/projects"; // Your data file

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Fallback if data file is empty or missing
  const projects = projectsData 

  // LOGIC: Only show Marquee if we have more than 3 projects
  const showMarquee = projects.length > 3;

  // Reusable Card Component to avoid code duplication
  const ProjectCard = ({ project }) => (
    <div 
      onClick={() => setSelectedProject(project)}
      className="cursor-pointer"
    >
      <CardContainer className="inter-var w-[350px] h-[400px]">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black/40 dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border flex flex-col justify-between">
          <div>
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
              {project.title}
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
              {project.description}
            </CardItem>
          </div>

          <CardItem translateZ="100" className="w-full mt-4 flex-1">
             {/* Replace with actual project images later */}
            <img
              src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1000&auto=format&fit=crop"
              className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>

          <div className="flex justify-between items-center mt-6">
            <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 2).map(t => (
                  <CardItem key={t} translateZ={20} className="px-2 py-1 rounded-md bg-white/10 text-[10px] text-white">
                    {t}
                  </CardItem>
                ))}
            </div>
            <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
              View
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );

  return (
    <section id="projects" className="py-16 overflow-hidden bg-background relative">
      <div className="container mx-auto px-4 mb-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Featured <span className="text-blue-400">Projects</span>
        </h2>
        <p className="text-muted-foreground">
          Click on a card to view details
        </p>
      </div>

      <div className="relative w-full">
        
        {showMarquee ? (
          /* --- MARQUEE MODE (> 3 Projects) --- */
          <>
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

            <div className="flex overflow-hidden py-10 group">
              <div 
                className="flex shrink-0 gap-8 animate-scroll-left group-hover:[animation-play-state:paused]"
                style={{ animationDuration: "40s" }}
              >
                {[...projects, ...projects].map((project, idx) => (
                  <ProjectCard key={`${project.id}-marquee-${idx}`} project={project} />
                ))}
              </div>
            </div>
          </>
        ) : (
          /* --- STATIC GRID MODE (<= 3 Projects) --- */
          <div className="flex flex-wrap justify-center gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

      </div>

      {/* --- MODAL (Same as before) --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[9000] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-white/10 overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="relative h-48 w-full">
                <img 
                  src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1000&auto=format&fit=crop"
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                    <div className="flex gap-2 mb-4">
                      {selectedProject.tech.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none mb-8">
                  <p className="text-gray-500 leading-relaxed text-lg">
                    {selectedProject.detailedDescription}
                  </p>
                </div>

                <div className="flex gap-4 pt-4 border-t border-white/10">
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                  >
                    <Github size={20} /> GitHub Repo
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;