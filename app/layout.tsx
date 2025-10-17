import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "NextlubStroy - Элитная недвижимость",
  description: "Профессиональная строительная компания. Современные жилые комплексы премиум-класса.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
