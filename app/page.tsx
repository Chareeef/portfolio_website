import Introduction from "./components/Introduction";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import TechnicalSkills from "./components/TechnicalSkills";
import SoftSkills from "./components/SoftSkills";
import Contact from "./components/Contact";
import SpaceBackground from "./components/SpaceBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 pt-20 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <SpaceBackground />
      <div className="container mx-auto px-4 py-20">
        <Introduction />
        <div className="space-y-20">
          {[
            Experience,
            Education,
            Projects,
            Certificates,
            TechnicalSkills,
            SoftSkills,
            Contact,
          ].map((Section, index) => (
            <div
              key={index}
              className="animate-fade-in mx-4 rounded-lg bg-white/[.25] p-8 backdrop-blur-md dark:bg-black/[.25] md:mx-8 lg:mx-12"
            >
              <Section />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
