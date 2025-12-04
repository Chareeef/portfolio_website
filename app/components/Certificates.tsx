"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { ChevronDown, Award } from "lucide-react";
import AudioPlayer from "./AudioPlayer";
import { scrollToSection } from "../../utils";
import Link from "next/link";

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
      <SectionHeader title="Certificates" />
      <div className="space-y-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            id={`certificate-${index}`}
            className="rounded-lg bg-white/5 shadow-lg backdrop-blur-md dark:bg-black/5"
          >
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex w-full flex-col items-center gap-4 break-words text-center md:flex-row md:text-left">
                  <Image
                    src={cert.logo}
                    alt={`${cert.title} logo`}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="mb-1 text-lg font-bold md:text-2xl">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-purple-600 dark:text-purple-400">
                      {cert.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Link
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:inline-flex"
                  >
                    <Award className="mr-2" />
                    View Certificate
                  </Link>
                </div>
              </div>
              <p className="mb-4">{cert.description}</p>
              <Link
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto flex w-fit items-center rounded bg-blue-600 px-4 py-2 text-center text-white transition-colors hover:bg-blue-700 md:mx-0 md:hidden"
              >
                <Award className="mr-2" />
                View Certificate
              </Link>
              {expandedCertificate === index && (
                <div className="mt-4 space-y-4">
                  <div>
                    <h3 className="mb-2 text-lg font-bold md:text-xl">
                      Key Learnings:
                    </h3>
                    <ul className="list-inside list-disc text-sm md:text-base">
                      {cert.keyLearnings.map((learning, i) => (
                        <li key={i}>{learning}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-sm italic md:text-base">
                    This certification is a testament to my commitment to
                    staying at the forefront of technology and continuously
                    evolving as a software engineer.
                  </p>
                  {cert.aiProject && (
                    <div className="mt-6 rounded-lg bg-white/5 p-4 text-center backdrop-blur-md dark:bg-black/5 md:text-left">
                      <h3 className="mb-2 text-lg font-bold md:text-xl">
                        AI Project:
                      </h3>
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
            <div
              className="flex w-full cursor-pointer items-center justify-center border-t-2 border-gray-200 p-2 text-gray-500 hover:text-purple-500 dark:border-gray-700 dark:text-gray-700 dark:hover:text-purple-700"
              onClick={(e) => {
                if (expandedCertificate === index) {
                  scrollToSection(e, `#certificate-${index}`, 28);
                }

                setExpandedCertificate(
                  expandedCertificate === index ? null : index,
                );
              }}
            >
              <button>
                <ChevronDown
                  className={`h-6 w-6 transition-transform duration-300 ${expandedCertificate === index ? "rotate-180 transform" : ""}`}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
