import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ThemeProvider } from "./components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Youssef Charif Hamidi - Full-Stack Engineer",
  description:
    "Portfolio of Youssef Charif Hamidi, a full-stack engineer and co-founder of RemoteOtter.",
  openGraph: {
    title: "Youssef Charif Hamidi - Full-Stack Engineer",
    description:
      "Portfolio of Youssef Charif Hamidi, a full-stack engineer and co-founder of RemoteOtter.",
    images: [
      {
        url: "https://youssefcharifhamidi.com/og_my_picture.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Youssef Charif Hamidi - Full-Stack Engineer",
    description:
      "Portfolio of Youssef Charif Hamidi, a full-stack engineer and co-founder of RemoteOtter.",
    images: [
      {
        url: "https://youssefcharifhamidi.com/og_my_picture.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {/* Apple Touch Icon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
      </head>

      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
