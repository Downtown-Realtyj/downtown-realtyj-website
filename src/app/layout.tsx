import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import {NextIntlClientProvider} from 'next-intl';
import "./globals.css";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Downtown Realtyj | Curating Patna's Premier Living Spaces",
  description: "Looking for a home in Patna?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-full antialiased font-sans`}
      >
        <NextIntlClientProvider>
          <Navbar />
          <main className="w-full min-h-screen">
            {children}
            <Analytics />
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
