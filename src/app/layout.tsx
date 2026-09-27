import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ScrollProgress from "@/components/motion/ScrollProgress";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andrés Quirós — Desarrollador de Software",
  description: "Portfolio y carta de presentación de Andrés Quirós, desarrollador de software especializado en .NET y en expansión hacia el desarrollo web moderno.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-50">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
