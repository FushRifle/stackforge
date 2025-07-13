import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "StackForge | Instantly Generate Production-Ready Projects",
  description:
    "StackForge lets developers scaffold production-ready Next.js, React, and Vue projects with your favorite tools and folder structures — in seconds.",
  keywords: [
    "StackForge",
    "Project generator",
    "React boilerplate",
    "Next.js starter",
    "Vue starter",
    "Frontend SaaS",
    "Developer tools",
    "SaaS for developers",
    "Project scaffolding",
    "Code automation",
  ],
  authors: [{ name: "StackForge Team", url: "https://stackforge.dev" }],
  creator: "StackForge",
  publisher: "StackForge",
  metadataBase: new URL("https://stackforge.dev"),
  openGraph: {
    title: "StackForge | Instantly Generate Production-Ready Projects",
    description:
      "Spin up modern web apps with your preferred stack, tools, and folder structure — stop wasting time on boilerplate and start building.",
    url: "https://stackforge.dev",
    siteName: "StackForge",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://stackforge.dev/images/og-banner.png",
        width: 1200,
        height: 630,
        alt: "StackForge OpenGraph Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StackForge | Instantly Generate Production-Ready Projects",
    description:
      "Generate full-stack boilerplates with Next.js, React, Vue, and your favorite tools — instantly.",
    creator: "@stackforge_dev",  // replace with actual handle when ready
    images: ["https://stackforge.dev/images/og-banner.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
