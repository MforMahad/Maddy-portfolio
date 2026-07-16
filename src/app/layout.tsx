import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google"; // Added Syne here
import "./globals.css";
// import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configure Syne for your high-impact headlines
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["800"], // Extra bold for Awwwards-level impact
});

export const metadata: Metadata = {
  icons: {
    icon: '/micon.png',
  },
  title: "Mahad's Portfolio",
  description: "A creative developer portfolio built with Next.js, TypeScript, Tailwind CSS and GSAP.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full antialiased`} // Added syne.variable here
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}