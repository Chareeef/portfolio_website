import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
import { copy, isLocale, locales, type Locale } from "@/lib/i18n";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale: value } = await params;
  if (!isLocale(value)) return {};

  const content = copy[value];
  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      canonical: `/${value}`,
      languages: {
        en: "/en",
        fr: "/fr",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "profile",
      title: content.meta.title,
      description: content.meta.description,
      url: `/${value}`,
      locale: value === "fr" ? "fr_FR" : "en_US",
      alternateLocale: value === "fr" ? ["en_US"] : ["fr_FR"],
      images: [
        {
          url: "/og_my_picture.png",
          width: 1200,
          height: 630,
          alt: "Portrait of Youssef Charif Hamidi",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.meta.title,
      description: content.meta.description,
      images: ["/og_my_picture.png"],
    },
  };
}

export default async function Home({ params }: LocalePageProps) {
  const { locale: value } = await params;
  if (!isLocale(value)) notFound();

  const locale: Locale = value;
  const content = copy[locale];

  return (
    <>
      <a className="skip-link" href="#main-content">
        {content.skip}
      </a>
      <Navigation locale={locale} />
      <main id="main-content">
        <CosmicHero locale={locale} />
        <RemoteOtterCaseStudy locale={locale} />
        <MathVellumCaseStudy locale={locale} />
        <SupportingProjects locale={locale} />
        <Capabilities locale={locale} />
        <Mission locale={locale} />
        <Education locale={locale} />
        <FinalHorizon locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
