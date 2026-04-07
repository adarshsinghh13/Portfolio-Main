import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import TopLeft from "./components/TopLeft";

/* FONTS */
const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-dancing",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Adarsh Portfolio",
  description: "Modern developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>

      <body className={`${dancing.variable} bg-black text-white`}>
        <Navbar />
        <TopLeft />
        {children}
      </body>
    </html>
  );
}