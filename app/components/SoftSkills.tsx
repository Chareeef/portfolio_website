"use client";

import { useState, useEffect, useRef } from "react";
import { Moon, CompassIcon as Comet, Zap } from "lucide-react";
import SectionHeader from "./SectionHeader";

const skills = [
  {
    name: "Adaptability and Resilience",
    icon: Moon,
    description:
      "Ability to thrive in changing environments and bounce back from challenges.",
  },
  {
    name: "Collaboration and Teamwork",
    icon: Comet,
    description:
      "Excels in working with diverse teams to achieve common goals.",
  },
  {
    name: "Quick Learning",
    icon: Zap,
    description: "Rapidly acquires and applies new knowledge and skills.",
  },
];

const SoftSkills = () => {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orbitElement = orbitRef.current;
    if (!orbitElement) return;

    let angle = 0;
    const radius =
      Math.min(orbitElement.offsetWidth, orbitElement.offsetHeight) * 0.35;
    const center = {
      x: orbitElement.offsetWidth / 2,
      y: orbitElement.offsetHeight / 2,
    };

    const animate = () => {
      const skillElements = orbitElement.children;
      for (let i = 0; i < skillElements.length; i++) {
        const skill = skillElements[i] as HTMLElement;
        const skillAngle = angle + (i * 2 * Math.PI) / skills.length;
        const x =
          center.x + radius * Math.cos(skillAngle) - skill.offsetWidth / 2;
        const y =
          center.y + radius * Math.sin(skillAngle) - skill.offsetHeight / 2;
        skill.style.transform = `translate(${x}px, ${y}px)`;
      }
      angle += 0.005;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveSkill(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <section className="py-20" ref={containerRef}>
      <SectionHeader title="Cosmic Soft Skills" />
      <div
        className="relative h-[400px] md:h-[500px]"
        onClick={() => {
          setActiveSkill(null);
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse" />
          {activeSkill === null && (
            <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-gray-500 dark:text-gray-400">
              Click on a skill to learn more
            </div>
          )}
        </div>
        <div ref={orbitRef} className="relative w-full h-full">
          {skills.map((skill, index) => (
            <div key={index} className="absolute transition-all duration-500">
              <div className="relative">
                {activeSkill === index && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 p-4 bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-lg shadow-lg w-64 z-20">
                    <p className="text-sm text-center">{skill.description}</p>
                  </div>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveSkill(activeSkill === index ? null : index);
                  }}
                  className="flex flex-col items-center text-center"
                >
                  <skill.icon className="text-4xl mb-2 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm font-semibold">{skill.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
