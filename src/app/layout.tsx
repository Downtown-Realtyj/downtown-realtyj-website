import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import {NextIntlClientProvider} from 'next-intl';
import "./globals.css";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import JsonLd from "../components/JsonLd";
import { jsonLdData } from "../utils/jsonLdData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Downtown Realtyj | Best real estate & construction company in Patna Bihar",
  description: "Downtown Realtyj, along with subsidiary Omshirdisai Maa Construction Pvt Ltd, provides expert real estate solutions in Patna. From luxury apartments, commercial spaces and ready-to-move flats to residential plots in Omshirdi Sai City, we build dreams across Bihar.",
  keywords: "Buy land in Patna Bihar, Downtown Realty Patna, Downtown Realtyj Pvt Ltd, Omshirdisai Maa Construction Private Limited, Residential plots for sale in Patna, Buy land in Patna Bihar, Ready to move flats in Patna, 3 BHK apartments in Patna, Affordable housing in Patna, Luxury apartments in Patna, Commercial land for sale in Bihar, Downtown Realty Bihar, Omshirdi Sai City Patna, Real estate developers in Patna, Best real estate company in Bihar, Residential projects in Patna, Land development in Bihar, Real estate investment in Patna, Downtown Realtyj reviews, Plots near Bihta Patna, Plots in Danapur Patna, Plots in Phulwari Patna, Plots in Patna Sahib Patna, Plots in Bankipur Patna, Plots in Kankarbagh Patna, Plots in Rajendra Nagar Patna, Plots in Boring Road Patna, Plots in Bailey Road Patna, Plots in Ashiana Patna, Plots in Pataliputra Colony Patna, Plots in S K Puri Patna, Plots in Digha Patna, Plots in Rukanpura Patna, Plots in Kankarbagh Extension Patna, Plots near Danapur Cantt Patna, Top construction companies in Patna Bihar, Best real-estate company in Patna Bihar",
  openGraph: {
    title: "Downtown Realtyj | Leading Real Estate & Construction in Patna",
    description: "Downtown Realtyj, along with subsidiary Omshirdisai Maa Construction Pvt Ltd, provides expert real estate solutions in Patna. From luxury apartments, commercial spaces and ready-to-move flats to residential plots in Omshirdi Sai City, we build dreams across Bihar.",
    url: "https://www.downtownrealtyj.com",
    siteName: "Downtown Realtyj",
    images: [
      {
        url: "https://www.downtownrealtyj.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Downtown Realtyj - Leading Real Estate & Construction in Patna"
      }
    ],
    locale: "en",
    type: "website"
  },
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/x-icon",
        url: "/favicon.ico",
      }
    ]
  },
  alternates: {
    canonical: 'https://downtownrealtyj.com',
  },
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
        <JsonLd data={jsonLdData}/>
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
