import { Moon, CompassIcon as Comet, Zap } from 'lucide-react'

const skills = [
  { name: 'Adaptability and Resilience', icon: Moon },
  { name: 'Collaboration and Teamwork', icon: Comet },
  { name: 'Quick Learning', icon: Zap },
]

const SoftSkills = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Cosmic Soft Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <skill.icon className="text-6xl mb-4 text-purple-600 dark:text-purple-400" />
            <span className="text-lg font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SoftSkills

