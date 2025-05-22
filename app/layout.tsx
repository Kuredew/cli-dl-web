import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

const google = localFont({
    src: "../public/fonts/helvetica.ttf",
    variable: "--font-google-sans"
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "cli-dl: downloader for editors.",
  description: "web developing by kureichi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${google.variable} ${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
