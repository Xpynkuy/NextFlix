import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/BaseLayout/Header";
import { Footer } from "@/components/BaseLayout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextFlix",
  description: "Онлайн кинотеатр",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-BGMAIN">
        <div className="max-w-7xl mx-auto flex flex-col min-h-screen relative z-10">
          <Header />
          <main className="flex-1 py-6 overflow-hidden">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
