import type React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Tayyab Ahmer | Full Stack Engineer",
  description:
    "Portfolio of Tayyab Ahmer, a full stack engineer building fintech, automation, and operational product systems with Next.js, NestJS, PostgreSQL, and AI integrations.",
  keywords:
    "Tayyab Ahmer, Full Stack Engineer, Next.js, NestJS, PostgreSQL, Prisma, Supabase, AI integrations, fintech developer",
  authors: [{ name: "Tayyab Ahmer" }],
  openGraph: {
    title: "Tayyab Ahmer | Full Stack Engineer",
    description:
      "Full stack engineer shipping fintech, automation, and operational products with strong backend architecture and polished product delivery.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
