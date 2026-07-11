import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/main/Header";

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
  title: "Richard Rodas — Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer specialized in banking and enterprise software. Angular (v13–v21), TypeScript, RxJS and React, with a full-stack foundation in .NET and Node.js. Remote, US time zones.",
  openGraph: {
    title: "Richard Rodas — Senior Frontend Engineer",
    description:
      "Frontend engineering for banking and enterprise — Angular, TypeScript, React. Remote, US time zones.",
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
        <Header />
        {children}
      </body>
    </html>
  );
}
