'use client'

import { useEffect, useRef } from 'react'
import SectionHeader from './SectionHeader'
import { BadgeIcon as Certificate } from 'lucide-react'

const education = {
  program: 'ALX Software Engineering Program',
  duration: '2022 - 2023',
  description: `The prestigious ALX Software Engineering Program, in partnership with Mastercard, is an intense 12-month program designed to equip participants with essential skills and knowledge for the tech industry through hands-on learning and real-world applications. During the 9-month Foundations phase, I mastered low-level programming with C, learned high-level programming with Python and Flask, and managed databases with MySQL. In the 3-month Specialization phase, I focused on backend development, learning modern technologies like MongoDB, Redis, and Express.js. This hands-on, project-based approach emphasized problem-solving and critical thinking. With the support of a vibrant community of peers and mentors, I am now well-prepared to enter the tech industry.`,
  certificateLink: 'https://intranet.alxswe.com/certificates/R7yGXPhxcs',
  achievements: [
    {
      title: 'Community Champion',
      description: 'Recognized for dedication and impact within the ALX community, reinforcing commitment to fostering an inclusive tech community.',
      link: 'https://www.linkedin.com/posts/youssef-charif-hamidi_community-champion-letter-of-recognition-activity-7216113846208339970-U_hD?utm_source=share&utm_medium=member_android',
      linkText: 'View Letter of Recognition'
    },
    {
      title: 'Community Advocate',
      description: 'Honored for advocating disability inclusion in tech. Contributed to a session on challenges and opportunities for software engineers with disabilities.',
      link: 'https://www.linkedin.com/posts/youssef-charif-hamidi_alx-alxabrse-community-activity-7167523433969352704-FVZX?utm_source=share&utm_medium=member_android',
      linkText: 'View Badge'
    },
    {
      title: '#100DaysOfALXSE Challenge',
      description: '100 days of code non-stop.',
      link: 'https://www.linkedin.com/posts/youssef-charif-hamidi_day100-100daysofalxse-alx-activity-7210026317616939008--k0o?utm_source=share&utm_medium=member_android',
      linkText: 'View #Day100 post'
    }
  ],
};

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
      <SectionHeader title="Educational Voyage" />
      <div className="bg-white/5 dark:bg-black/5 backdrop-blur-md rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">{education.program}</h3>
          <a
            href={education.certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <Certificate className="w-4 h-4 mr-2" />
            View Certificate
          </a>
        </div>
        <p className="text-purple-600 dark:text-purple-400 mb-4">{education.duration}</p>
        <p className="mb-6">{education.description}</p>
        <h4 className="text-xl font-semibold mb-4">Achievements:</h4>
        <div className="space-y-6">
          {education.achievements.map((achievement, index) => (
            <div key={index} className="opacity-0 animate-fade-in-up bg-white/5 dark:bg-black/5 rounded-lg p-4" style={{ animationDelay: `${index * 200}ms` }}>
              <h5 className="font-semibold text-lg mb-2">{achievement.title}</h5>
              <p className="mb-3">{achievement.description}</p>
              <a 
                href={achievement.link} 
                className="inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                {achievement.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

