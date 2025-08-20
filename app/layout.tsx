import type { Metadata } from "next";
import { Rammetto_One, Lato } from "next/font/google";
import "./globals.css";

const ramettoOne = Rammetto_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rametto",
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
      <body className={`${ramettoOne.variable} ${lato.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
