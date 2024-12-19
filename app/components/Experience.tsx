'use client'

import { useState } from 'react'

const experiences = [
  {
    title: 'Co-Founder & Full-Stack Engineer',
    company: 'RemoteOtter',
    description: 'Led the development of a cutting-edge remote job platform, implementing advanced search algorithms and real-time notifications.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    website: 'https://remoteotter.com',
  },
  // Add more experiences as needed
]

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState<number | null>(null)

  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Professional Odyssey</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
            onMouseEnter={() => setActiveExperience(index)}
            onMouseLeave={() => setActiveExperience(null)}
          >
            <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
            <h4 className="text-xl text-purple-600 dark:text-purple-400 mb-4">{exp.company}</h4>
            <p className="mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {exp.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <a 
              href={exp.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              Visit Website
            </a>
            {activeExperience === index && (
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <h5 className="font-bold mb-2">Key Accomplishments:</h5>
                <ul className="list-disc list-inside">
                  <li>Increased user engagement by 150% through implementation of personalized job recommendations</li>
                  <li>Optimized database queries, reducing load times by 40%</li>
                  <li>Integrated AI-powered resume parsing, improving job matching accuracy by 75%</li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

