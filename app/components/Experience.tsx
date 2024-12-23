"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    title: "Co-Founder & Full-Stack Engineer",
    company: "RemoteOtter",
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
      "Built and scaled a remote job board platform with a database of 18,000+ job listings and 1,500 registered users in less than three months",
      "Implemented personalized email notifications, advanced search filters, and real-time updates, achieving in average 100+ daily active users.",
      "Developed the platform using Next.js, TypeScript, Prisma, PostgreSQL and OpenAI API, ensuring robust performance and seamless user experience.",
    ],
  },
];

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState<number>(0);

  return (
    <section id="experience" className="py-20">
      <SectionHeader title="Professional Odyssey" />
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white/5 dark:bg-black/5 backdrop-blur-md rounded-lg shadow-lg p-6 transition-all duration-300 ease-in-out hover:shadow-xl"
            onClick={() =>
              setActiveExperience(activeExperience === index ? null : index)
            }
          >
            <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
            <h4 className="text-xl text-purple-600 dark:text-purple-400 mb-4">
              {exp.company}
            </h4>
            <p className="mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {exp.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={exp.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              View Website
            </a>
            {activeExperience === index && (
              <div className="mt-4 space-y-4">
                <div className="p-4 bg-gray-100/10 dark:bg-gray-800/10 rounded-lg">
                  <h5 className="font-bold mb-2">Key Accomplishments:</h5>
                  <ul className="list-disc list-inside">
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
                      className="w-full h-auto rounded-lg shadow-md"
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
