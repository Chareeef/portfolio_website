import { Mail, Linkedin, Github, Twitter } from 'lucide-react'
import SectionHeader from './SectionHeader'

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <SectionHeader title="Contact Transmission" />
      <div className="flex justify-center space-x-8">
        <a href="mailto:youssef.charif.h@gmail.com" className="text-blue-500 hover:text-blue-700 transition-colors">
          <Mail className="w-8 h-8" />
        </a>
        <a href="https://www.linkedin.com/in/youssef-charif-hamidi" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors">
          <Linkedin className="w-8 h-8" />
        </a>
        <a href="https://github.com/Chareeef" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
          <Github className="w-8 h-8" />
        </a>
        <a href="https://x.com/YoussefCharifH2" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors">
          <Twitter className="w-8 h-8" />
        </a>
      </div>
    </section>
  )
}

export default Contact

