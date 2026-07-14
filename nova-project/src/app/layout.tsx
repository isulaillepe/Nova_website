import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nova - Build, Deploy, Scale",
  description: "The complete platform for modern application development. Deploy, scale, and manage your applications with confidence on infrastructure trusted by innovative teams worldwide.",
  keywords: ["cloud platform", "edge computing", "serverless", "deployment", "database", "developer tools"],
  authors: [{ name: "Nova" }],
  creator: "Nova",
  publisher: "Nova",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nova.io",
    title: "Nova - Build, Deploy, Scale",
    description: "The complete platform for modern application development.",
    siteName: "Nova",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nova Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova - Build, Deploy, Scale",
    description: "The complete platform for modern application development.",
    images: ["/og-image.png"],
    creator: "@nova",
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
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-50 overflow-x-auto overflow-y-hidden">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}