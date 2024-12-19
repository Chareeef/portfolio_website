import { 
  SiNextdotjs, 
  SiReact, 
  SiExpress, 
  SiPython, 
  SiPostgresql, 
  SiOpenai 
} from 'react-icons/si'

const skills = [
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'React.js', icon: SiReact },
  { name: 'Express.js', icon: SiExpress },
  { name: 'Python', icon: SiPython },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'AI Tools', icon: SiOpenai },
]

const TechnicalSkills = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Technical Constellations</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <skill.icon className="text-6xl mb-4 text-purple-600 dark:text-purple-400" />
            <span className="text-lg font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnicalSkills

