import { Mail, Linkedin, Github, Twitter } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Contact Transmission</h2>
      <div className="flex justify-center space-x-8">
        <a href="mailto:your.email@example.com" className="text-blue-500 hover:text-blue-700 transition-colors">
          <Mail className="w-8 h-8" />
        </a>
        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors">
          <Linkedin className="w-8 h-8" />
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
          <Github className="w-8 h-8" />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors">
          <Twitter className="w-8 h-8" />
        </a>
      </div>
    </section>
  )
}

export default Contact

