import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const getBaseUrl = () => {
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
};

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: "Atsuko - Premium Discord Bot",
  description:
    "A bright, fast Discord bot for music, moderation, utilities, anime fun, Minecraft tools, and AI chat.",
  keywords: ["Atsuko", "Discord bot", "music bot", "moderation bot", "AI chat", "Minecraft"],
  icons: {
    icon: "/favicon.webp",
    apple: "/apple-touch-icon.webp",
  },
  openGraph: {
    title: "Atsuko - Premium Discord Bot",
    description:
      "A bright, fast Discord bot for music, moderation, utilities, anime fun, Minecraft tools, and AI chat.",
    type: "website",
    images: [{ url: "/icon-192.webp", width: 192, height: 192, alt: "Atsuko" }],
  },
  twitter: {
    card: "summary",
    title: "Atsuko - Premium Discord Bot",
    description:
      "A bright, fast Discord bot for music, moderation, utilities, anime fun, Minecraft tools, and AI chat.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
        suppressHydrationWarning
        className={`${inter.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
