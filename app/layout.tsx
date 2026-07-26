import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Analytics } from "@vercel/analytics/react";
import { DM_Mono, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://youssefcharifhamidi.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Youssef Charif Hamidi — Software Engineer & Product Builder",
  description:
    "Software engineer building production web and mobile applications, including RemoteOtter and MathVellum, with a focus on accessible and meaningful technology.",
  alternates: {
    languages: {
      en: "/en",
      fr: "/fr",
      "x-default": "/",
    },
  },
  authors: [{ name: "Youssef Charif Hamidi", url: siteUrl }],
  creator: "Youssef Charif Hamidi",
  keywords: [
    "software engineer",
    "product engineer",
    "Next.js",
    "Flutter",
    "accessibility",
    "RemoteOtter",
    "MathVellum",
  ],
  openGraph: {
    type: "profile",
    url: siteUrl,
    siteName: "Youssef Charif Hamidi",
    title: "Youssef Charif Hamidi — Software Engineer & Product Builder",
    description:
      "Building production web and mobile products that expand what people can do.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Beyond the Horizon — Youssef Charif Hamidi, software engineer and product builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Youssef Charif Hamidi — Software Engineer & Product Builder",
    description:
      "Building production web and mobile products that expand what people can do.",
    images: ["/twitter-image"],
  },
  icons: {
    icon: [
      { url: "/icons/favicon.ico" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050713",
  colorScheme: "dark",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Youssef Charif Hamidi",
    url: siteUrl,
    jobTitle: "Software Engineer & Product Builder",
    email: "mailto:youssef.charif.h@gmail.com",
    sameAs: [
      "https://github.com/Chareeef",
      "https://www.linkedin.com/in/youssef-charif-hamidi",
    ],
    knowsAbout: [
      "Product engineering",
      "Web application architecture",
      "Mobile application development",
      "Accessibility",
      "PostgreSQL",
      "Next.js",
      "Flutter",
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = (await headers()).get("x-portfolio-locale") === "fr" ? "fr" : "en";

  return (
    <html
      lang={locale}
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
        {process.env.VERCEL ? <Analytics /> : null}
      </body>
    </html>
  );
}
