"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { ChevronDown, Award } from "lucide-react";
import AudioPlayer from "./AudioPlayer";

const certificates = [
  {
    title: "AI Career Essentials Program",
    logo: "/alx_logo.png",
    date: "September 2024",
    description:
      "The ALX AICE program provided me with hands-on experience and deep insights into the latest AI tools and technologies. Throughout the program, I developed the ability to integrate AI into various workflows, significantly enhancing my productivity and problem-solving abilities. This achievement has further strengthened my competitive edge in the tech industry, equipping me with the skills to leverage AI for innovative solutions and streamlined processes.",
    keyLearnings: [
      "Mastery of cutting-edge AI tools and platforms.",
      "Increased productivity through automation and AI integrations.",
      "Real-world applications of AI in tech projects.",
    ],
    link: "https://intranet.alxswe.com/certificates/57BPCsFf9E",
    aiProject: {
      title: "Echoes of Home, Whispers of Now",
      description:
        "As part of the AICE program, I created this song using ChatGPT for lyrics and Udio for music and singing. This project showcases the creative potential of AI in music production.",
      audioSrc: "/echoes_of_home.mp3",
    },
  },
];

const Certificates = () => {
  const [expandedCertificate, setExpandedCertificate] = useState<number | null>(
    null,
  );

  return (
    <section id="certificates" className="py-20">
      <SectionHeader title="Certifications" />
      <div className="space-y-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="cursor-pointer rounded-lg bg-white/5 p-6 shadow-lg backdrop-blur-md dark:bg-black/5"
            onClick={() =>
              setExpandedCertificate(
                expandedCertificate === index ? null : index,
              )
            }
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Image
                  src={cert.logo}
                  alt={`${cert.title} logo`}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-2xl font-bold">{cert.title}</h3>
                  <p className="text-purple-600 dark:text-purple-400">
                    {cert.date}
                  </p>
                </div>
              </div>
              <ChevronDown
                className={`h-6 w-6 transition-transform duration-300 ${
                  expandedCertificate === index ? "rotate-180 transform" : ""
                }`}
              />
            </div>
            <p className="mb-4">{cert.description}</p>
            {expandedCertificate === index && (
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="mb-2 font-bold">Key Learnings:</h4>
                  <ul className="list-inside list-disc">
                    {cert.keyLearnings.map((learning, i) => (
                      <li key={i}>{learning}</li>
                    ))}
                  </ul>
                </div>
                <p className="italic">
                  This certification is a testament to my commitment to staying
                  at the forefront of technology and continuously evolving as a
                  software engineer.
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Award className="mr-2" />
                  View Certificate
                </a>
                {cert.aiProject && (
                  <div className="mt-6 rounded-lg bg-white/5 p-4 backdrop-blur-md dark:bg-black/5">
                    <h4 className="mb-2 text-xl font-bold">
                      AI Project: {cert.aiProject.title}
                    </h4>
                    <p className="mb-4">{cert.aiProject.description}</p>
                    <AudioPlayer
                      audioSrc={cert.aiProject.audioSrc}
                      title={cert.aiProject.title}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
