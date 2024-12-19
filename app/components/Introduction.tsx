'use client'

import { useState } from 'react'
import { Rocket } from 'lucide-react'

const Introduction = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-20 text-center">
      <h2 
        className="text-4xl md:text-6xl font-bold mb-6 relative inline-block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Welcome to My Cosmic Journey
        <Rocket 
          className={`inline-block ml-2 transition-transform duration-300 ${isHovered ? 'transform translate-x-2 -translate-y-2' : ''}`} 
        />
      </h2>
      <p className="text-xl md:text-2xl max-w-3xl mx-auto">
        Greetings, fellow space traveler! I'm Youssef Charif Hamidi, a full-stack engineer and co-founder of RemoteOtter. 
        My journey through the digital cosmos has been filled with exciting challenges and innovative solutions. 
        Join me as we explore the vast universe of technology and discover the wonders of software engineering together!
      </p>
    </section>
  )
}

export default Introduction

