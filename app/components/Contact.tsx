import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { Icon } from "@iconify/react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <SectionHeader title="Contact" />
      <div className="flex justify-center space-x-8">
        <Link
          href="mailto:youssef.charif.h@gmail.com"
          className="text-purple-700 transition-colors hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-600"
        >
          <Icon icon="tabler:mail" className="h-8 w-8" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/youssef-charif-hamidi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-700 transition-colors hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-600"
        >
          <Icon icon="mdi:linkedin" className="h-8 w-8" />
        </Link>
        <Link
          href="https://x.com/YoussefCharifH2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-700 transition-colors hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-600"
        >
          <Icon icon="tabler:brand-x" className="h-8 w-8" />
        </Link>
        <Link
          href="https://github.com/Chareeef"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-700 transition-colors hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-600"
        >
          <Icon icon="tabler:brand-github" className="h-8 w-8" />
        </Link>
      </div>
    </section>
  );
};

export default Contact;
