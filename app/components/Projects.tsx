"use client";

import { useState } from "react";
import Image from "next/image";
import { Github, ExternalLink, ChevronDown } from "lucide-react";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    name: "MemFlip",
    logo: "/memflip_logo.png",
    description:
      "An AI-powered flashcard app that enhances learning through intelligent flashcard generation and real-time review.",
    technologies: ["Next.js", "Tailwind CSS", "Clerk", "Firestore"],
    github: "https://github.com/Chareeef/MemFlip",
    demo: "https://mem-flip.live",
    images: ["/memflip1.png", "/memflip2.png", "/memflip3.png"],
    bulletPoints: [
      "Attracted 8 users and generated 130+ flashcards within 2 weeks after deployment.",
      "Implemented a seamless, responsive user interface for intuitive cross-device use.",
      "Ensured secure user authentication and real-time data storage for enhanced usability.",
    ],
  },
  {
    name: "Sadim AI",
    logo: "/sadim_logo.png",
    description:
      "An AI-powered chatbot designed for natural, human-like conversations with rapid inference capabilities.",
    technologies: ["Next.js", "Tailwind CSS", "Groq API", "NextAuth"],
    github: "https://github.com/Chareeef/SadimAI",
    demo: "https://sadim-ai.com",
    images: ["/sadim1.png", "/sadim2.png", "/sadim3.png"],
    bulletPoints: [
      "Facilitated 20+ conversations within the first 30 days of deployment.",
      "Designed a responsive interface to ensure smooth interactions across all devices.",
      "Delivered a secure and optimized user experience with robust authentication and performance.",
    ],
  },
  {
    name: "Rate My Professor",
    logo: "/ratemyprofessor_logo.png",
    description:
      "An AI-powered platform for professor recommendations and conversational interactions.",
    technologies: ["Next.js", "Tailwind CSS", "Cohere", "Pinecone", "Groq API"],
    github: "https://github.com/Chareeef/RateMyProfessor",
    demo: "https://rate-my-professor-murex.vercel.app",
    images: [
      "/ratemyprofessor1.png",
      "/ratemyprofessor2.png",
      "/ratemyprofessor3.png",
    ],
    bulletPoints: [
      "Integrated a Pinecone database with 104 records for efficient data management.",
      "Leveraged Cohere for AI-driven professor recommendations.",
      "Designed a responsive user interface for seamless interaction across all devices.",
    ],
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20">
      <SectionHeader title="Stellar Projects" />
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 dark:bg-black/5 backdrop-blur-md rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer"
            onClick={() =>
              setActiveProject(activeProject === index ? null : index)
            }
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-4">
                  <Image
                    src={project.logo}
                    alt={`${project.name} logo`}
                    width={64}
                    height={64}
                    className="rounded-lg"
                  />
                  <h3 className="text-2xl font-bold">{project.name}</h3>
                </div>
                <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-300 ${activeProject === index ? "transform rotate-180" : ""}`}
                  />
                </button>
              </div>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4 mb-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-500 hover:text-blue-700 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="mr-2" /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-green-500 hover:text-green-700 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="mr-2" /> Live Demo
                </a>
              </div>
              {activeProject === index && (
                <div className="mt-4 space-y-4">
                  <div className="p-4 bg-gray-100/10 dark:bg-gray-800/10 rounded-lg">
                    <h4 className="font-bold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside">
                      {project.bulletPoints.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {project.images.map((image, imgIndex) => (
                      <Image
                        key={imgIndex}
                        src={image}
                        alt={`${project.name} screenshot ${imgIndex + 1}`}
                        width={400}
                        height={300}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
