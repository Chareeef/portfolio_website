"use client";

import { useRef, useEffect, useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiExpress,
  SiPython,
  SiDjango,
  SiFlask,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiOpenai,
  SiPrisma,
} from "react-icons/si";
import { Rocket, Telescope, Gem } from "lucide-react";
import SectionHeader from "./SectionHeader";

const skillSections = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React.js", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Express.js", icon: SiExpress },
      { name: "Python", icon: SiPython },
      { name: "Django", icon: SiDjango },
      { name: "Flask", icon: SiFlask },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
      { name: "Cloud Firestore", icon: SiFirebase },
      { name: "Prisma", icon: SiPrisma },
    ],
  },
  {
    title: "AI Tools",
    skills: [
      { name: "OpenAI API", icon: SiOpenai },
      { name: "Groq", icon: Telescope },
      { name: "Cohere", icon: Gem },
      { name: "Pinecone", icon: Rocket },
    ],
  },
];

const ContinuousFeed = ({
  skills,
}: {
  skills: { name: string; icon: React.ElementType }[];
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;

    let scrollPosition = 0;
    const scroll = () => {
      scrollPosition += 0.5;
      if (scrollPosition > scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="mx-auto flex max-w-4xl space-x-4 overflow-hidden py-4 md:space-x-8"
    >
      {[...skills, ...skills].map((skill, index) => (
        <div key={index} className="flex flex-shrink-0 flex-col items-center">
          <skill.icon className="mb-2 text-2xl text-purple-600 dark:text-purple-400 md:text-4xl" />
          <span className="whitespace-nowrap text-xs font-semibold md:text-sm">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
};

const CircularOrbit = ({
  skills,
}: {
  skills: { name: string; icon: React.ElementType }[];
}) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => (prevRotation + 0.5) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto h-60 w-60 md:h-80 md:w-80">
      {skills.map((skill, index) => {
        const angle =
          (index / skills.length) * 2 * Math.PI + (rotation * Math.PI) / 180;
        const x = Math.cos(angle) * 120;
        const y = Math.sin(angle) * 120;
        return (
          <div
            key={index}
            className="absolute -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300 ease-in-out"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
          >
            <div className="flex flex-col items-center">
              <skill.icon className="mb-1 text-2xl text-purple-600 dark:text-purple-400 md:mb-2 md:text-4xl" />
              <span className="whitespace-nowrap text-xs font-semibold md:text-sm">
                {skill.name}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const HeartbeatingSquare = ({
  skills,
}: {
  skills: { name: string; icon: React.ElementType }[];
}) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prevScale) => (prevScale === 1 ? 1.1 : 1));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-40 items-center justify-center md:h-60">
      <div
        className="grid grid-cols-2 gap-2 rounded-lg p-2 md:gap-4 md:p-4"
        style={{
          transform: `scale(${scale})`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <skill.icon className="mb-1 text-2xl text-purple-600 dark:text-purple-400 md:mb-2 md:text-4xl" />
            <span className="whitespace-nowrap text-xs font-semibold md:text-sm">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TechnicalSkills = () => {
  return (
    <section id="skills" className="py-20">
      <SectionHeader title="Technical Constellations" />
      <div className="space-y-12">
        <div className="rounded-lg bg-white/5 p-6 backdrop-blur-md dark:bg-black/5">
          <h3 className="mb-4 text-center text-2xl font-bold">
            {skillSections[0].title}
          </h3>
          <ContinuousFeed skills={skillSections[0].skills} />
        </div>
        <div className="block rounded-lg bg-white/5 p-6 backdrop-blur-md dark:bg-black/5 md:hidden">
          <h3 className="mb-4 text-center text-2xl font-bold">
            {skillSections[1].title}
          </h3>
          <ContinuousFeed skills={skillSections[1].skills} />
        </div>
        <div className="hidden rounded-lg bg-white/5 p-6 backdrop-blur-md dark:bg-black/5 md:block">
          <h3 className="mb-4 text-center text-2xl font-bold">
            {skillSections[1].title}
          </h3>
          <CircularOrbit skills={skillSections[1].skills} />
        </div>
        <div className="rounded-lg bg-white/5 p-6 backdrop-blur-md dark:bg-black/5">
          <h3 className="mb-4 text-center text-2xl font-bold">
            {skillSections[2].title}
          </h3>
          <HeartbeatingSquare skills={skillSections[2].skills} />
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
