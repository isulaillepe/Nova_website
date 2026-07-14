import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://projectnova.lk"),
  title: "Project Nova - AIESEC in University of Sri Jayewardenepura",
  description: "A dynamic tech-based event designed for school and university students, creating a platform where innovation meets opportunity. Organized by AIESEC in University of Sri Jayewardenepura.",
  keywords: ["Project Nova", "AIESEC", "Sri Jayewardenepura", "tech competition", "student innovation", "youth leadership", "Sri Lanka tech event"],
  authors: [{ name: "AIESEC in University of Sri Jayewardenepura" }],
  creator: "AIESEC in University of Sri Jayewardenepura",
  publisher: "Project Nova",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://projectnova.lk",
    title: "Project Nova - Innovation Meets Opportunity",
    description: "A dynamic tech-based event for school and university students connecting passionate young minds with forward-thinking organizations.",
    siteName: "Project Nova",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Project Nova - AIESEC in University of Sri Jayewardenepura",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Nova - Innovation Meets Opportunity",
    description: "A dynamic tech-based event for school and university students connecting passionate young minds with forward-thinking organizations.",
    images: ["/og-image.png"],
    creator: "@aiesec_usj",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-50">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}