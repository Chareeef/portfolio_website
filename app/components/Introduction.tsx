"use client";

import { useState } from "react";
import { Rocket } from "lucide-react";
import Image from "next/image";

const Introduction = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="px-4 py-20 text-center">
      <div className="relative mb-8">
        <Image
          src="/my_picture.png"
          alt="Youssef Charif Hamidi"
          width={200}
          height={200}
          className="mx-auto h-48 w-48 overflow-hidden rounded-full bg-white dark:bg-gray-800"
        />
      </div>
      <h2
        className="relative mb-6 inline-block text-4xl font-bold md:text-6xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Welcome to My Cosmic Journey
        <Rocket
          className={`ml-2 inline-block transition-transform duration-300 ${isHovered ? "-translate-y-2 translate-x-2 transform" : ""}`}
        />
      </h2>
      <p className="mx-auto max-w-3xl text-center text-xl md:text-2xl">
        Greetings, fellow space traveler! I am a passionate software engineer
        and co-founder of RemoteOtter, a platform connecting professionals with
        remote job opportunities. My journey, marked by resilience and creative
        problem-solving despite cerebral palsy, has given me a unique
        perspective. I've thrived through unconventional learning methods and
        made meaningful contributions to diverse international teams. Committed
        to lifelong learning, I am excited about the endless possibilities in
        tech and eager to keep pushing boundaries.
      </p>
    </section>
  );
};

export default Introduction;
