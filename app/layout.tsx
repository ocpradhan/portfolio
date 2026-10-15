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
  title: "Onesimus/Dev",
  description:
    "Personal portfolio of Onesimus, a software engineer specializing in building modern, scalable, and responsive web applications.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${vigaFont.variable} ${dmSansFont.variable} ${loraFont.variable} h-full antialiased`}
      suppressHydrationWarning
    >
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
