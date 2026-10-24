import type { Metadata } from "next";
import { Viga, DM_Sans, Lora } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";

import { ThemeProvider } from "@/providers/theme-provider";
import LenisProvider from "@/providers/lenis-provider";

const vigaFont = Viga({
  weight: "400", // Viga only comes in weight 400
  subsets: ["latin"],
  variable: "--font-viga", // CSS variable name
});

const dmSansFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const loraFont = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  // 1. Defining base production URL so Next.js can resolve relative links
  metadataBase: new URL("https://onesimus-pradhan.vercel.app"),
  title: "Onesimus/Dev",
  description:
    "Personal portfolio of Onesimus, a software engineer specializing in building modern, scalable, and responsive web applications.",
  // 2. Adding canonical link pointing to the master URL of the page
  alternates: {
    canonical: "/", // Using "/" for the home page, or "/about" for subpages
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${vigaFont.variable} ${dmSansFont.variable} ${loraFont.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Structured Data fro SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https:schema.org",
              "@type": "Person",
              name: "Onesimus Chandra Pradhan",
              jobTitle: "Frontend Developer",
              url: "https://onesimus-pradhan.vercel.app",
              sameAs: [
                "https://github.com/ocpradhan",
                "https://www.linkedin.com/in/onesimus-chandra",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LenisProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
