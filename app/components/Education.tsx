"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import { BadgeIcon as Certificate, ChevronDown } from "lucide-react";
import Image from "next/image";

const education = {
  program: "ALX Software Engineering Program",
  logo: "/alx_logo.png",
  duration: "2023 - 2024",
  description: `The prestigious ALX Software Engineering Program, in partnership with Mastercard, is an intense 12-month program designed to equip participants with essential skills and knowledge for the tech industry through hands-on learning and real-world applications. During the 9-month Foundations phase, I mastered low-level programming with C, learned high-level programming with Python and Flask, and managed databases with MySQL. In the 3-month Specialization phase, I focused on backend development, learning modern technologies like MongoDB, Redis, and Express.js. This hands-on, project-based approach emphasized problem-solving and critical thinking. With the support of a vibrant community of peers and mentors, I am now well-prepared to enter the tech industry.`,
  certificateLink: "https://intranet.alxswe.com/certificates/R7yGXPhxcs",
  achievements: [
    {
      title: "Community Champion",
      description:
        "Recognized for dedication and impact within the ALX community, reinforcing commitment to fostering an inclusive tech community.",
      link: "https://www.linkedin.com/posts/youssef-charif-hamidi_community-champion-letter-of-recognition-activity-7216113846208339970-U_hD?utm_source=share&utm_medium=member_android",
      linkText: "View Letter of Recognition",
    },
    {
      title: "Community Advocate",
      description:
        "Honored for advocating disability inclusion in tech. Contributed to a session on challenges and opportunities for software engineers with disabilities.",
      link: "https://www.linkedin.com/posts/youssef-charif-hamidi_alx-alxabrse-community-activity-7167523433969352704-FVZX?utm_source=share&utm_medium=member_android",
      linkText: "View Badge",
    },
    {
      title: "#100DaysOfALXSE Challenge",
      description: "100 days of code non-stop.",
      link: "https://www.linkedin.com/posts/youssef-charif-hamidi_day100-100daysofalxse-alx-activity-7210026317616939008--k0o?utm_source=share&utm_medium=member_android",
      linkText: "View #Day100 post",
    },
  ],
};

const Education = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="education" className="py-20" ref={sectionRef}>
      <SectionHeader title="Educational Voyage" />
      <div
        className="cursor-pointer rounded-lg bg-white/5 p-6 shadow-lg backdrop-blur-md dark:bg-black/5"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src={education.logo}
              alt="ALX Software Engineering Program logo"
              width={64}
              height={64}
              className="rounded-full"
            />
            <div>
              <h3 className="text-2xl font-bold">{education.program}</h3>
              <p className="text-purple-600 dark:text-purple-400">
                {education.duration}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <a
              href={education.certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:inline-flex"
              onClick={(e) => e.stopPropagation()}
            >
              <Certificate className="mr-2 h-4 w-4" />
              View Certificate
            </a>
            <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <ChevronDown
                className={`h-6 w-6 transition-transform duration-300 ${isExpanded ? "rotate-180 transform" : ""}`}
              />
            </button>
          </div>
        </div>
        <p className="mb-6">{education.description}</p>
        <a
          href={education.certificateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4 inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <Certificate className="mr-2 h-4 w-4" />
          View Certificate
        </a>
        {isExpanded && (
          <>
            <h4 className="mb-4 text-xl font-semibold">Achievements:</h4>
            <div className="space-y-6">
              {education.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up rounded-lg bg-white/5 p-4 opacity-0 dark:bg-black/5"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <h5 className="mb-2 text-lg font-semibold">
                    {achievement.title}
                  </h5>
                  <p className="mb-3">{achievement.description}</p>
                  <a
                    href={achievement.link}
                    className="inline-block rounded bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {achievement.linkText}
                  </a>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Education;
