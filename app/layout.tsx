import type { Metadata } from "next";
import { Bevan, Lato } from "next/font/google";
import "./globals.css";

const bevan = Bevan({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bevan",
});

const lato = Lato({
  weight: ["300", "400", "700"], //Light, Regular, Bold
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Natanael da Matta",
  description: "Portfolio of Natanael da Matta",
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
