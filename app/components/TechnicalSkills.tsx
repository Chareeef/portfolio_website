"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
type Skill = {
  name: string;
  icon: string;
};
// Official Iconify icons (2025 fresh)
const skills = {
  languages: [
    { name: "HTML", icon: "simple-icons:html5" },
    { name: "CSS", icon: "simple-icons:css3" },
    { name: "JavaScript", icon: "simple-icons:javascript" },
    { name: "TypeScript", icon: "simple-icons:typescript" },
    { name: "Python", icon: "simple-icons:python" },
    { name: "Rust", icon: "simple-icons:rust" },
    { name: "C", icon: "simple-icons:c" },
  ],
  frameworks: [
    { name: "React", icon: "simple-icons:react" },
    { name: "Next.js", icon: "simple-icons:nextdotjs" },
    { name: "Node.js", icon: "simple-icons:nodedotjs" },
    { name: "Express", icon: "simple-icons:express" },
    { name: "Django", icon: "simple-icons:django" },
    { name: "Flask", icon: "simple-icons:flask" },
    { name: "Tailwind", icon: "simple-icons:tailwindcss" },
  ],
  databases: [
    { name: "PostgreSQL", icon: "simple-icons:postgresql" },
    { name: "MySQL", icon: "simple-icons:mysql" },
    { name: "MongoDB", icon: "simple-icons:mongodb" },
    { name: "Redis", icon: "simple-icons:redis" },
    { name: "Prisma", icon: "simple-icons:prisma" },
    { name: "Firebase", icon: "simple-icons:firebase" },
  ],
};

// Reusable card with slight variation per group
const SkillCard = ({
  skill,
  index,
  variant = "float", // "float" | "rise" | "pop"
}: {
  skill: { name: string; icon: string };
  index: number;
  variant?: "float" | "rise" | "pop";
}) => {
  const variants = {
    float: {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 },
      hover: { y: -12, scale: 1.12 },
    },
    rise: {
      initial: { opacity: 0, y: 80, rotateX: -30 },
      animate: { opacity: 1, y: 0, rotateX: 0 },
      hover: { y: -16, scale: 1.15, rotate: 6 },
    },
    pop: {
      initial: { opacity: 0, scale: 0.4 },
      animate: { opacity: 1, scale: 1 },
      hover: { scale: 1.2, rotate: 8 },
    },
  };

  const chosen = variants[variant];

  return (
    <motion.div
      initial={chosen.initial}
      whileInView={chosen.animate}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={chosen.hover}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.2, 0.65, 0.3, 0.9],
      }}
      className="group relative flex h-full w-[25%] flex-col items-center justify-end gap-4 rounded-2xl bg-white/5 p-6 text-purple-700 backdrop-blur-xl transition-all hover:bg-white/10 hover:text-purple-900 dark:bg-black/10 dark:text-purple-400 hover:dark:bg-black/30 dark:hover:text-purple-600 md:w-[20%] xl:w-[15%]"
    >
      <div className="relative">
        <Icon
          icon={skill.icon}
          className="text-5xl transition-all duration-500 group-hover:scale-125 md:text-6xl"
        />
        <div className="absolute -inset-4 scale-0 rounded-full bg-purple-500/20 blur-3xl transition-transform duration-700 group-hover:scale-100" />
      </div>

      <span className="text-center text-sm font-bold tracking-tight md:text-base">
        {skill.name}
      </span>
    </motion.div>
  );
};

const SkillSection = ({
  title,
  skills,
  variant,
}: {
  title: string;
  skills: Skill[];
  variant: "float" | "rise" | "pop";
}) => (
  <div className="space-y-8">
    <h3 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
      {title}
    </h3>

    <div className="flex flex-wrap justify-center gap-6">
      {skills.map((skill, i) => (
        <SkillCard key={skill.name} skill={skill} index={i} variant={variant} />
      ))}
    </div>
  </div>
);

const TechnicalSkills = () => {
  return (
    <section id="skills" className="py-20 lg:py-32">
      <SectionHeader title="Technical Arsenal" />

      <div className="mx-auto max-w-7xl space-y-20 px-6 lg:space-y-32">
        {/* LANGUAGES — subtle floating entrance */}
        <SkillSection
          title="Languages"
          skills={skills.languages}
          variant="float"
        />

        {/* FRAMEWORKS — dramatic rise from below */}
        <SkillSection
          title="Frameworks & Libraries"
          skills={skills.frameworks}
          variant="rise"
        />

        {/* DATABASES — explosive pop-in */}
        <SkillSection
          title="Databases & Tools"
          skills={skills.databases}
          variant="pop"
        />
      </div>
    </section>
  );
};

export default TechnicalSkills;
