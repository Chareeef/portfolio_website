"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    title: "Co-Founder & Full-Stack Engineer",
    company: "RemoteOtter",
    logo: "/remoteotter_logo.png",
    description:
      "RemoteOtter is a modern job board platform that connects users with remote work opportunities worldwide. As Co-Founder and Full-Stack Engineer, I collaborated with Abdulrhman Metawei to design and implement the platform's architecture, ensuring scalability and performance. Built under the mentorship of Julien Barbier, Co-Founder of Holberton School, the platform features advanced search capabilities, personalized email notifications, and seamless user experience, powered by state-of-the-art technologies and AI integrations.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Memcached",
    ],
    website: "https://remoteotter.com",
    images: ["/remoteotter1.png", "/remoteotter2.png", "/remoteotter3.png"],
    accomplishments: [
      "Built and scaled a remote job board platform with a database of 30,000+ job listings and 1,500 registered users in less than three months",
      "Implemented personalized email notifications, advanced search filters, and real-time updates, achieving in average 100+ daily active users.",
      "Developed the platform using Next.js, TypeScript, Prisma, PostgreSQL and OpenAI API, ensuring robust performance and seamless user experience.",
    ],
  },
];

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20">
      <SectionHeader title="Professional Odyssey" />
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="cursor-pointer rounded-lg bg-white/5 p-6 shadow-lg backdrop-blur-md transition-all duration-300 ease-in-out hover:shadow-xl dark:bg-black/5"
            onClick={() =>
              setActiveExperience(activeExperience === index ? null : index)
            }
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <h3 className="mb-2 text-2xl font-bold">{exp.title}</h3>
                  <h4 className="text-xl text-purple-600 dark:text-purple-400">
                    {exp.company}
                  </h4>
                </div>
              </div>
              <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <ChevronDown
                  className={`h-6 w-6 transition-transform duration-300 ${activeExperience === index ? "rotate-180 transform" : ""}`}
                />
              </button>
            </div>
            <p className="mb-4">{exp.description}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {exp.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="rounded-full bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={exp.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
              onClick={(e) => e.stopPropagation()}
            >
              View Website
            </a>
            {activeExperience === index && (
              <div className="mt-4 space-y-4">
                <div className="rounded-lg bg-gray-100/10 p-4 dark:bg-gray-800/10">
                  <h5 className="mb-2 font-bold">Key Accomplishments:</h5>
                  <ul className="list-inside list-disc">
                    {exp.accomplishments.map((accomplishment, accIndex) => (
                      <li key={accIndex}>{accomplishment}</li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {exp.images.map((image, imgIndex) => (
                    <Image
                      key={imgIndex}
                      src={image}
                      alt={`${exp.company} experience ${imgIndex + 1}`}
                      width={400}
                      height={300}
                      className="h-auto w-full rounded-lg shadow-md"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
