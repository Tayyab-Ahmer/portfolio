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
  title: "Tayyab Ahmer - Backend Developer",
  description:
    "Portfolio of Tayyab Ahmer, a skilled Backend Developer specializing in NestJS, Node.js, and scalable system architecture.",
  keywords:
    "Backend Developer, NestJS, Node.js, PostgreSQL, API Development, JWT Authentication",
  authors: [{ name: "Tayyab Ahmer" }],
  openGraph: {
    title: "Tayyab Ahmer - Backend Developer",
    description:
      "Portfolio of Tayyab Ahmer, a skilled Backend Developer specializing in NestJS, Node.js, and scalable system architecture.",
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
