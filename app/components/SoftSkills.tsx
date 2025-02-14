"use client";

import { useState, useEffect } from "react";
import { Moon, CompassIcon as Comet, Zap } from "lucide-react";
import SectionHeader from "./SectionHeader";

const skills = [
  {
    name: "Resilience",
    icon: Moon,
    description:
      "Thrives in changing environments and overcomes challenges, drawing strength from a personal journey with cerebral palsy.",
  },
  {
    name: "Teamwork",
    icon: Comet,
    description:
      "Works effectively in diverse teams, fostering shared goals and mutual success through clear communication and cooperation.",
  },
  {
    name: "Quick Learning",
    icon: Zap,
    description:
      "Adapts swiftly to new concepts and technologies, turning challenges into opportunities for growth and improvement.",
  },
];

const SoftSkills = () => {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const [radius, setRadius] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => (prevRotation + 0.5) % 360);
    }, 50);

    const updateRadius = () => {
      setRadius(Math.min(window.innerWidth, window.innerHeight) * 0.22);
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", updateRadius);
    };
  }, []);

  return (
    <section className="py-10 md:py-20">
      <SectionHeader title="Cosmic Soft Skills" />
      <div
        className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
        onClick={() => setActiveSkill(null)}
      >
        <div className="absolute inset-0 flex h-full items-center justify-center">
          <div className="h-4 w-4 animate-pulse rounded-full bg-yellow-400" />
        </div>
        <div className="relative h-full w-full">
          {skills.map((skill, index) => {
            const angle =
              (index / skills.length) * 2 * Math.PI +
              (rotation * Math.PI) / 180;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <div
                key={index}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300 ease-in-out ${
                  activeSkill === index ? "z-30" : "z-0"
                }`}
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                <div className="relative">
                  {activeSkill === index && (
                    <div className="absolute bottom-full left-1/2 z-10 mb-2 w-48 -translate-x-1/2 transform rounded-lg bg-white/75 p-2 shadow-lg backdrop-blur-lg dark:bg-black/75 sm:w-56 md:mb-4 md:w-64 md:p-4">
                      <p className="text-center text-xs sm:text-sm">
                        {skill.description}
                      </p>
                    </div>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSkill(activeSkill === index ? null : index);
                    }}
                    className="relative z-20 flex flex-col items-center text-center"
                  >
                    <skill.icon className="mb-1 text-2xl text-purple-600 dark:text-purple-400 md:mb-2 md:text-4xl" />
                    <span className="text-xs font-semibold md:text-sm">
                      {skill.name}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {activeSkill === null && (
          <div className="absolute left-0 right-0 text-center text-sm text-gray-500 dark:text-gray-400">
            Click on a skill to learn more
          </div>
        )}
      </div>
    </section>
  );
};

export default SoftSkills;
