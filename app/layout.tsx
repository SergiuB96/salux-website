import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import Navbar from "@/components/navbar"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "SALUX — Gestiune Digitală a Salubrizării Stradale",
    template: "%s — SALUX",
  },
  description:
    "Platforma software pentru operatori de salubrizare și autorități locale din România. Program lunar, raportare GPS, urmărire contract — totul integrat.",
  keywords: ["salubrizare", "gestiune salubrizare", "program lunar salubrizare", "software salubrizare romania", "UAT salubrizare", "SALUX"],
  authors: [{ name: "S.C. MILBAC MANAGEMENT S.R.L." }],
  metadataBase: new URL("https://www.salux.ro"),
  openGraph: {
    title: "SALUX — Gestiune Digitală a Salubrizării Stradale",
    description: "Platforma software pentru operatori de salubrizare și autorități locale din România.",
    url: "https://www.salux.ro",
    siteName: "SALUX",
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SALUX — Gestiune Digitală a Salubrizării Stradale",
    description: "Platforma software pentru operatori de salubrizare și autorități locale din România.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#03090f",
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro" className="dark">
      <body className={`font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
