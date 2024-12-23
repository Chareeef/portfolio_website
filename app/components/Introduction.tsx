"use client";

import { useState } from "react";
import { Rocket } from "lucide-react";
import Image from "next/image";

const Introduction = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 text-center">
      <div className="mb-8 relative">
        <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-white dark:bg-gray-800">
          <Image
            src="/my_picture.png"
            alt="Youssef Charif Hamidi"
            width={200}
            height={200}
            className="rounded-full mx-auto"
          />
        </div>
      </div>
      <h2
        className="text-4xl md:text-6xl font-bold mb-6 relative inline-block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Welcome to My Cosmic Journey
        <Rocket
          className={`inline-block ml-2 transition-transform duration-300 ${isHovered ? "transform translate-x-2 -translate-y-2" : ""}`}
        />
      </h2>
      <p className="text-xl md:text-2xl max-w-3xl mx-auto">
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
