import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hitallo Azevedo | Fullstack Developer Portfolio",
  description: "Hitallo Azevedo is a fullstack web developer. This portfolio showcases his projects, skills, and experience in modern web development.",
  authors: [
    {
      name: "Hitallo Azevedo",
      url: "https://hitalloazevedo.vercel.app/",
    },
  ],
  keywords: [
    "Hitallo Azevedo", "desenvolvedor de software", "fullstack developer",
    "programador", "dev", "Next.js", "React", "JavaScript", "TypeScript",
    "portfólio web", "web developer", "frontend", "backend", "software engineer",
    "developer", "programmer", "web development", "desenvolvimento web",
    "sites responsivos", "modern websites", "Node.js",
    "API development", "freelancer", "projetos web", "cloud computing",
    "MongoDB", "PostgreSQL", "MySQL", "Firebase", "Express.js", "GraphQL"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
