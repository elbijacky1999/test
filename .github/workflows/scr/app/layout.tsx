import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foodlify - Your Ultimate Food Companion",
  description: "Discover, organize, and enjoy amazing culinary experiences with Foodlify. Your modern food companion for the digital age.",
  keywords: ["Foodlify", "food", "recipes", "culinary", "dining", "cooking", "restaurant"],
  authors: [{ name: "Foodlify Team" }],
  openGraph: {
    title: "Foodlify - Your Ultimate Food Companion",
    description: "Discover, organize, and enjoy amazing culinary experiences with Foodlify",
    url: "www.myfoodlify.ga",
    siteName: "Foodlify",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foodlify - Your Ultimate Food Companion",
    description: "Discover, organize, and enjoy amazing culinary experiences with Foodlify",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
