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
  metadataBase: new URL("https://mark-ramirez-dev.rexopolis500.chatgpt.site"),
  title: {
    default: "Mark Ramirez — Software Architect & Developer",
    template: "%s | Mark Ramirez",
  },
  description:
    "C#/.NET software architect and developer building user-focused desktop applications, developer tools, and understandable systems.",
  keywords: [
    "Mark Ramirez",
    "C# developer",
    ".NET developer",
    "software architect",
    "desktop applications",
    "developer tools",
    "system architecture",
  ],
  authors: [{ name: "Mark Ramirez" }],
  creator: "Mark Ramirez",
  other: {
    "codex-preview": "development",
  },
  openGraph: {
    title: "Mark Ramirez — Software Architect & Developer",
    description:
      "Software built by understanding the system first.",
    type: "website",
    url: "https://mark-ramirez-dev.rexopolis500.chatgpt.site",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
