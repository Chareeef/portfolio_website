import { Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <SectionHeader title="Contact" />
      <div className="flex justify-center space-x-8">
        <Link
          href="mailto:youssef.charif.h@gmail.com"
          className="text-blue-500 transition-colors hover:text-blue-700"
        >
          <Mail className="h-8 w-8" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/youssef-charif-hamidi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 transition-colors hover:text-blue-900"
        >
          <Linkedin className="h-8 w-8" />
        </Link>
        <Link
          href="https://x.com/YoussefCharifH2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 transition-colors hover:text-blue-600"
        >
          <XIcon className="h-8 w-8 fill-current" />
        </Link>
        <Link
          href="https://github.com/Chareeef"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 transition-colors hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400"
        >
          <Github className="h-8 w-8" />
        </Link>
      </div>
    </section>
  );
};

export default Contact;
