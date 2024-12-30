"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import { Award, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { scrollToSection } from "../../utils";

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
        id="alxswe"
        className="rounded-lg bg-white/5 shadow-lg backdrop-blur-md dark:bg-black/5"
      >
        <div className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex w-full flex-col items-center gap-4 break-words md:flex-row">
              <Image
                src={education.logo}
                alt="ALX Software Engineering Program logo"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div className="text-center md:text-left">
                <h3 className="mb-1 text-lg font-bold md:text-2xl">
                  {education.program}
                </h3>
                <p className="text-sm text-purple-600 dark:text-purple-400">
                  {education.duration}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Link
                href={education.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:inline-flex"
              >
                <Award className="mr-2" />
                View Certificate
              </Link>
            </div>
          </div>
          <p className="mb-4 text-sm md:text-base">{education.description}</p>
          <Link
            href={education.certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mb-4 flex w-fit items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:hidden"
          >
            <Award className="mr-2" />
            View Certificate
          </Link>
          {isExpanded && (
            <>
              <h4 className="mb-4 text-center text-lg font-semibold md:text-left md:text-xl">
                Achievements:
              </h4>
              <div className="space-y-6">
                {education.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="animate-fade-in-up flex flex-col items-center rounded-lg bg-white/5 p-4 text-center opacity-0 dark:bg-black/5 md:items-start md:text-left"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <h5 className="mb-2 text-lg font-semibold">
                      {achievement.title}
                    </h5>
                    <p className="mb-3">{achievement.description}</p>
                    <Link
                      onClick={(e) => e.stopPropagation()}
                      href={achievement.link}
                      className="mx-auto inline-block rounded bg-purple-600 px-4 py-2 text-center text-sm text-white transition-colors hover:bg-purple-700 md:mx-0 md:text-base"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {achievement.linkText}
                    </Link>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <div
          className="flex w-full cursor-pointer items-center justify-center border-t-2 border-gray-200 p-2 text-gray-500 hover:text-purple-500 dark:border-gray-700 dark:text-gray-700 dark:hover:text-purple-700"
          onClick={(e) => {
            if (isExpanded) {
              scrollToSection(e, `#alxswe`, 32);
            }
            setIsExpanded(!isExpanded);
          }}
        >
          <button>
            <ChevronDown
              className={`h-6 w-6 transition-transform duration-300 ${isExpanded ? "rotate-180 transform" : ""}`}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Education;
