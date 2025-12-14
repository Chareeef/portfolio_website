"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Link from "next/link";
import { Icon } from "@iconify/react";

const projects = [
  // {
  //   name: "Get A Gig",
  //   logo: "/getagig_logo.png",
  //   description:
  //     "A foundational project for RemoteOtter, built collaboratively with Abdulrhman Metawei. This remote job board platform is tailored for software engineers, offering curated job listings and AI-powered cover letter generation.",
  //   technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Groq AI"],
  //   github: "https://github.com/Chareeef/get-a-gig",
  //   demo: "https://get-a-gig.vercel.app",
  //   images: ["/getagig1.png", "/getagig2.png", "/getagig3.png"],
  //   bulletPoints: [
  //     "Integrated an AI-powered cover letter generator for personalized job applications.",
  //     "Designed a responsive, modern interface for seamless use across devices.",
  //     "Used Prisma and PostgreSQL for efficient data handling and scalability.",
  //   ],
  // },
  {
    name: "Sadim AI",
    logo: "/sadim_logo.png",
    description:
      "An AI-powered chatbot designed for natural, human-like conversations with rapid inference capabilities.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "NextAuth",
      "Groq AI",
      "Firestore",
    ],
    github: "https://github.com/Chareeef/SadimAI",
    demo: "https://sadim-ai.com",
    images: ["/sadim1.png", "/sadim2.png", "/sadim3.png"],
    bulletPoints: [
      "Engineered a fully responsive user interface using Next.js and Tailwind CSS, ensuring seamless and intuitive interactions across mobile, tablet, and desktop devices.",
      "Implemented secure user authentication via NextAuth.js and optimized performance with streaming responses, delivering a robust, efficient, and privacy-focused chat experience.",
      "Designed and implemented persistent chat history with Firebase Firestore, enabling users to save, browse, and manage past conversations with timestamps and clean organization.",
      "Integrated dynamic conversation titles powered by AI, automatically generating concise and relevant titles for new chats to improve discoverability and user experience.",
    ],
  },
  {
    name: "MemFlip",
    logo: "/memflip_logo.png",
    description:
      "An AI-powered flashcard app that enhances learning through intelligent flashcard generation and real-time review.",
    technologies: ["Next.js", "Tailwind CSS", "Clerk", "Firestore", "Groq AI"],
    github: "https://github.com/Chareeef/MemFlip",
    demo: "https://mem-flip.live",
    images: ["/memflip1.png", "/memflip2.png", "/memflip3.png"],
    bulletPoints: [
      "Generated 130+ flashcards within 2 weeks after deployment.",
      "Implemented a seamless, responsive user interface for intuitive cross-device use.",
      "Ensured secure user authentication and real-time data storage for enhanced usability.",
    ],
  },
  {
    name: "Rate My Professor",
    logo: "/ratemyprofessor_logo.png",
    description:
      "An AI-powered platform for professor recommendations and conversational interactions.",
    technologies: ["Next.js", "Tailwind CSS", "Cohere", "Pinecone", "Groq AI"],
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
  // {
  //   name: "Archer",
  //   logo: "/archer_logo.png",
  //   description:
  //     "An education app tailored for children with autism, enhancing literacy, math, and science skills through interactive tools and activities. Always under development to better meet user needs.",
  //   technologies: [
  //     "Next.js",
  //     "Django Rest Framework",
  //     "PostgreSQL",
  //     "Supabase",
  //   ],
  //   github: "https://github.com/Chareeef/Archer",
  //   demo: "https://archer-edu.vercel.app",
  //   images: ["/archer1.jpg", "/archer2.jpg", "/archer3.jpg"],
  //   bulletPoints: [
  //     "Provides engaging and accessible learning experiences for children with autism.",
  //     "Focuses on enhancing literacy, math, and science skills with interactive activities.",
  //     "Promotes inclusivity by tailoring education to meet diverse cognitive needs.",
  //   ],
  // },
  {
    name: "Pantry Tracker",
    logo: "/pantry_logo.png",
    description:
      "A Next.js application to manage pantry inventory, track essentials, and generate ideas using AI. Always evolving to improve user experience.",
    technologies: ["Next.js", "Tailwind CSS", "Firestore", "Auth0", "Groq AI"],
    github: "https://github.com/Chareeef/pantry_tracker",
    demo: "https://pantry-tracker-self-one.vercel.app/",
    images: ["/pantry1.jpg", "/pantry2.jpg", "/pantry3.jpg"],
    bulletPoints: [
      "Secure user authentication using Auth0.",
      "Real-time inventory management with Firestore.",
      "Responsive interface for seamless cross-device use.",
      "AI-powered idea generation based on pantry inventory.",
    ],
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const previousActiveProjectRef = useRef<number | null>(null);

  useEffect(() => {
    // Scroll logic: always scroll to the project we just interacted with
    const targetIndex =
      activeProject !== null ? activeProject : previousActiveProjectRef.current;

    if (targetIndex !== null) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const target = document.querySelector(`#project-${targetIndex}`);
          if (target) {
            const headerHeight = 80;
            const offset = 32;
            const elementPosition =
              target.getBoundingClientRect().top + window.pageYOffset;

            window.scrollTo({
              top: elementPosition - headerHeight - offset,
              behavior: "smooth",
            });
          }
        });
      });
    }

    // Update the ref for next time (after current effect)
    previousActiveProjectRef.current = activeProject;
  }, [activeProject]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="projects" className="py-20">
      <SectionHeader title="Projects" />
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            id={`project-${index}`}
            className="overflow-hidden rounded-lg bg-white/5 shadow-lg backdrop-blur-md transition-all duration-300 ease-in-out hover:shadow-xl dark:bg-black/5"
          >
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex w-full flex-col items-center justify-center gap-4 break-words text-center md:flex-row md:items-start md:justify-start md:text-left">
                  <Image
                    src={project.logo}
                    alt={`${project.name} logo`}
                    width={64}
                    height={64}
                    className="rounded-lg"
                  />
                  <h3 className="mb-1 text-lg font-bold md:text-2xl">
                    {project.name}
                  </h3>
                </div>
              </div>
              <p className="mb-4 text-sm md:text-base">{project.description}</p>
              <div className="mb-4 flex flex-wrap justify-center gap-2 md:justify-start">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="h-fit rounded-full bg-gray-200 px-3 py-1 text-center text-sm dark:bg-gray-700"
                  >
                    {tech === "Django Rest Framework" && windowWidth < 768
                      ? "DRF"
                      : tech}
                  </span>
                ))}
              </div>
              <div className="mb-4 flex flex-col items-center gap-4 md:flex-row md:items-start">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-purple-500 transition-colors hover:text-blue-700"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Icon icon="tabler:brand-github" className="mr-2" /> GitHub
                </Link>
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-green-500 transition-colors hover:text-green-700"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Icon icon="ri:external-link-line" className="mr-2" /> Live
                  Demo
                </Link>
              </div>
              {activeProject === index && (
                <div className="mt-4 space-y-4">
                  <div className="rounded-lg bg-gray-100/10 p-4 dark:bg-gray-800/10">
                    <h4 className="mb-2 font-bold">Key Features:</h4>
                    <ul className="list-inside list-disc">
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
                        className="h-auto w-full rounded-lg shadow-md"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div
              className="mt-4 flex w-full cursor-pointer items-center justify-center border-t-2 border-gray-200 p-2 text-gray-500 hover:text-purple-500 dark:border-gray-700 dark:text-gray-700 dark:hover:text-purple-700"
              onClick={(e) => {
                e.stopPropagation();
                setActiveProject(activeProject === index ? null : index);
              }}
            >
              <button>
                <ChevronDown
                  className={`h-6 w-6 transition-transform duration-300 ${activeProject === index ? "rotate-180 transform" : ""}`}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
