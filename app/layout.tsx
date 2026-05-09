import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Nav from './components/Nav';
import Celebi from './components/Celebi';

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nathan Yao",
  description: "Hello! I'm Nathan Yao and this is my personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
        <Celebi />
      </body>
    </html>
  );
}
