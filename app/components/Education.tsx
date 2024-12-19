'use client'

import { useEffect, useRef } from 'react'

const education = {
  program: 'ALX Software Engineering Program',
  duration: '2022 - 2023',
  description: 'Intensive full-stack software engineering program focusing on practical, project-based learning.',
  accomplishments: [
    'Developed a shell program in C, replicating core functionalities of bash',
    'Created a full-stack web application using Python Flask and MySQL',
    'Implemented data structures and algorithms in various programming challenges',
    'Collaborated on team projects, enhancing communication and project management skills',
  ],
}

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="education" className="py-20" ref={sectionRef}>
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Educational Voyage</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold mb-2">{education.program}</h3>
        <p className="text-purple-600 dark:text-purple-400 mb-4">{education.duration}</p>
        <p className="mb-6">{education.description}</p>
        <h4 className="text-xl font-semibold mb-4">Key Accomplishments:</h4>
        <ul className="list-disc list-inside space-y-2">
          {education.accomplishments.map((accomplishment, index) => (
            <li key={index} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
              {accomplishment}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Education

