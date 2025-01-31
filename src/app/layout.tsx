import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/global/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jayana Pharma",
  description:
    "India Jayana pharma is a leading provider of pharmaceutical raw materials, offering a comprehensive range of APIs, pellets, herbal extracts and excipients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="absolute bottom-0 z-0 left-0 right-0 top-20 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_2px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_2px)] bg-[size:34px_46px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
