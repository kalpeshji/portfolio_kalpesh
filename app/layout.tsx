import type React from "react";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kalpesh Gupta",
  description:
    "Boost productivity, reduce costs, and scale your business with our all-in-one SaaS platform.",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.ico", // This is the traditional favicon
    // apple: '/apple-icon.png', // Optional: For Apple devices
    // shortcut: '/favicon-16x16.png', // Optional: Alternative favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <CustomCursor />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import { useEffect } from "react";
