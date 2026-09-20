import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/main/Header";
import { LanguageProvider } from "@/components/i18n/LanguageProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rodasridar.dev"),
  title: "Richard Rodas · Fullstack Engineer",
  description:
    "Fullstack Engineer with 5+ years in banking and enterprise. Angular, React and Next.js micro-frontends, Node.js and Nest.js microservices, on AWS and Azure. Remote across US and Canada.",
  openGraph: {
    title: "Richard Rodas · Fullstack Engineer",
    description:
      "Fullstack engineering for banking and enterprise. Angular, React, Next.js, Node.js and Nest.js. Remote across US and Canada.",
    url: "https://rodasridar.dev",
    siteName: "Richard Rodas",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} font-sans`}
      >
        <LanguageProvider>
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
