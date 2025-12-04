"use client";

import { useRef, useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rotate = () => setRotation((prev) => (prev + 0.5) % 360);
    const interval = setInterval(rotate, 50);

    const updateOrbit = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      const maxAllowedRadius = rect.height / 2 - 50;
      setRadius(maxAllowedRadius);

      setIsMobile(rect.width < 640);
    };

    updateOrbit();

    // Only reacts to actual container size changes (breakpoints, rotation, sidebar toggle, etc.)
    // → ZERO firing on scroll!
    const observer = new ResizeObserver(updateOrbit);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-10 md:py-20">
      <SectionHeader title="Soft Skills" />

      {/* This is the only div we observe → super stable */}
      <div
        className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]"
        onClick={() => setActiveSkill(null)}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          ref={containerRef}
        >
          {/* Sun */}
          <div className="h-4 w-4 animate-pulse rounded-full bg-yellow-400 shadow-lg" />
        </div>

        {/* Orbits */}
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
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${activeSkill === index ? "z-30" : "z-10"}`}
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                <div className="relative">
                  {/* Desktop tooltip */}
                  {activeSkill === index && !isMobile && (
                    <div className="absolute bottom-full left-1/2 mb-3 w-64 -translate-x-1/2 rounded-lg bg-white/80 p-4 shadow-xl backdrop-blur-lg dark:bg-black/80">
                      <p className="text-center text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  )}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSkill(activeSkill === index ? null : index);
                    }}
                    className="flex flex-col items-center rounded-lg p-3 transition-all hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-400/50"
                    aria-label={`Learn more about ${skill.name}`}
                  >
                    <skill.icon className="mb-1 text-3xl text-purple-600 dark:text-purple-400 md:text-4xl" />
                    <span className="text-xs font-bold tracking-wide md:text-sm">
                      {skill.name}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile modal & hint - unchanged */}
        {activeSkill !== null && isMobile && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setActiveSkill(null)}
          >
            <div className="w-[90vw] max-w-md rounded-2xl bg-white/95 p-6 shadow-2xl dark:bg-black/95">
              <h3 className="mb-3 text-center text-xl font-bold text-purple-600 dark:text-purple-400">
                {skills[activeSkill].name}
              </h3>
              <p className="text-center text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                {skills[activeSkill].description}
              </p>
            </div>
          </div>
        )}
      </div>

      {activeSkill === null && (
        <div className="pointer-events-none absolute bottom-4 left-0 right-0 z-50 text-center text-sm text-gray-500 dark:text-gray-400">
          Tap a skill to explore
        </div>
      )}
    </section>
  );
};

export default SoftSkills;
