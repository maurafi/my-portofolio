// [UPDATED] Root Layout Configuration
// Description: Menggunakan font system modern yang cepat dan andal (--font-sans, --font-mono)
// untuk menghilangkan ketergantungan unduhan eksternal Google Fonts yang dapat menyebabkan network timeout pada lingkungan sandbox.
// Reason: Menjamin kecepatan load instan, performa responsif, dan reliabilitas proses build produksi.

import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.seo.author }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={cn(
        "h-full",
        "scroll-smooth",
        "antialiased",
        "font-sans"
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
