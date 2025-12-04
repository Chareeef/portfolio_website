import { Orbit } from "lucide-react";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="mb-10 flex items-center text-2xl font-bold md:text-4xl">
      <Orbit className="mr-4 size-8 text-xl text-purple-600 dark:text-purple-400" />
      <h2>{title}</h2>
    </div>
  );
};

export default SectionHeader;
