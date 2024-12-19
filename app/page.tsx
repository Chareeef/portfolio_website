import Introduction from './components/Introduction'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import TechnicalSkills from './components/TechnicalSkills'
import SoftSkills from './components/SoftSkills'
import Contact from './components/Contact'
import SpaceBackground from './components/SpaceBackground'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <SpaceBackground />
      <div className="container mx-auto px-4 py-20">
        <Introduction />
        <Experience />
        <Education />
        <Projects />
        <TechnicalSkills />
        <SoftSkills />
        <Contact />
      </div>
    </main>
  )
}

