import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { MotionProvider } from "@/components/motion/motion-provider";

import "./globals.css";

const siteUrl = "https://tunx.vercel.app";
const siteDescription =
  "A bright, fast Discord bot for music, moderation, utilities, anime fun, Minecraft tools, and AI chat.";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Atsuko",
    template: "%s | Atsuko",
  },
  description: siteDescription,
  keywords: ["Atsuko", "Discord bot", "music bot", "moderation bot", "AI chat", "Minecraft"],
  icons: {
    icon: "/favicon.webp",
    apple: "/apple-touch-icon.webp",
  },
  openGraph: {
    title: "Atsuko",
    description: siteDescription,
    type: "website",
    url: "/",
    siteName: "Atsuko",
    images: [{ url: "/icon-192.webp", width: 192, height: 192, alt: "Atsuko" }],
  },
  twitter: {
    card: "summary",
    title: "Atsuko",
    description: siteDescription,
    images: ["/icon-192.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} min-h-screen bg-background font-sans text-foreground antialiased`}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
