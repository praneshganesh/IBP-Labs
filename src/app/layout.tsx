import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ibp-labs.com"),
  title: "IBP Labs — Private, AI-powered personal software",
  description:
    "IBP Labs is an independent app studio building private, AI-powered software for modern life — from wealth planning with PathToFIRE to life administration with LifeOS.",
  openGraph: {
    title: "IBP Labs",
    description:
      "An independent app studio building private, AI-powered software for modern life.",
    url: "https://ibp-labs.com",
    siteName: "IBP Labs",
    type: "website",
  },
  verification: {
    google: "HmtCJ7pmSTcRPF3F8t1Ek7pHqaS0SVdSu8bqTuMmA0M",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
