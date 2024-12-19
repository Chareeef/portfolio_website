'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    name: 'RemoteOtter Job Platform',
    description: 'A cutting-edge remote job platform with advanced search and real-time notifications.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    github: 'https://github.com/yourusername/remoteotter',
    demo: 'https://remoteotter.com',
    image: '/placeholder.svg?height=200&width=300',
    bulletPoints: [
      'Implemented advanced search algorithms',
      'Developed real-time notification system',
      'Integrated AI-powered job matching',
    ],
  },
  // Add more projects as needed
]

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Stellar Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            onMouseEnter={() => setActiveProject(index)}
            onMouseLeave={() => setActiveProject(null)}
          >
            <Image 
              src={project.image} 
              alt={project.name} 
              width={300} 
              height={200} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-500 hover:text-blue-700 transition-colors"
                >
                  <Github className="mr-2" /> GitHub
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-green-500 hover:text-green-700 transition-colors"
                >
                  <ExternalLink className="mr-2" /> Live Demo
                </a>
              </div>
              {activeProject === index && (
                <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-bold mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside">
                    {project.bulletPoints.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

