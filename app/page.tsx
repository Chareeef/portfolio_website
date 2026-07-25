import { Navigation } from "@/components/navigation/Navigation";
import { CosmicHero } from "@/components/hero/CosmicHero";
import { RemoteOtterCaseStudy } from "@/components/sections/RemoteOtterCaseStudy";
import { MathVellumCaseStudy } from "@/components/sections/MathVellumCaseStudy";
import { SupportingProjects } from "@/components/sections/SupportingProjects";
import { Capabilities } from "@/components/sections/Capabilities";
import { Mission } from "@/components/sections/Mission";
import { Education } from "@/components/sections/Education";
import { FinalHorizon } from "@/components/sections/FinalHorizon";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <CosmicHero />
        <RemoteOtterCaseStudy />
        <MathVellumCaseStudy />
        <SupportingProjects />
        <Capabilities />
        <Mission />
        <Education />
        <FinalHorizon />
      </main>
      <Footer />
    </>
  );
}
