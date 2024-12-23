import { Star as Planet } from 'lucide-react'

interface SectionHeaderProps {
  title: string
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center">
      <Planet className="mr-4 text-purple-600 dark:text-purple-400" />
      {title}
    </h2>
  )
}

export default SectionHeader

