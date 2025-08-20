import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import { ProgressProvider } from "@/components/progress-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "700"],
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Python Learn - Interactive Python Course",
  description:
    "Master Python programming with our interactive course featuring hands-on coding exercises, quizzes, and real-time feedback.",
  keywords: ["Python", "programming", "course", "interactive", "learning", "coding", "tutorial"],
  authors: [{ name: "Python Learn Team" }],
  creator: "Python Learn",
  publisher: "Python Learn",
  robots: "index, follow",
  openGraph: {
    title: "Python Learn - Interactive Python Course",
    description:
      "Master Python programming with our interactive course featuring hands-on coding exercises, quizzes, and real-time feedback.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Python Learn - Interactive Python Course",
    description:
      "Master Python programming with our interactive course featuring hands-on coding exercises, quizzes, and real-time feedback.",
  }
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} ${playfairDisplay.variable} ${sourceSans.variable}`}
    >
      <body className="antialiased font-sans">
        <ThemeProvider>
          <ProgressProvider>
            <div className="min-h-screen bg-background">
              <Navigation />
              <main className="lg:ml-80 pt-16 lg:pt-0 min-h-screen">
                <div className="animate-in fade-in-0 duration-300">{children}</div>
              </main>
            </div>
          </ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
