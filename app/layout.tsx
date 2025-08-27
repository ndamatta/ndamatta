import type { Metadata } from "next";
import { Bevan, Lato } from "next/font/google";
import "./globals.css";

const bevan = Bevan({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bevan",
  display: "swap",
});

const lato = Lato({
  weight: ["300", "400", "700"], //Light, Regular, Bold
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Natanael da Matta - Full Stack Developer",
  description:
    "Portfolio of Natanael da Matta - Full Stack Developer specializing in React, Next.js, and modern web technologies",
  keywords: "developer, portfolio, react, nextjs, full stack, web developer",
  authors: [{ name: "Natanael da Matta" }],
  openGraph: {
    title: "Natanael da Matta - Full Stack Developer",
    description:
      "Portfolio showcasing modern web development projects and skills",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bevan.variable} ${lato.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
