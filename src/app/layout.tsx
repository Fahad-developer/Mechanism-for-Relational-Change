import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import FooterWrapper from "@/components/FooterWrapper";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MRC | Mechanism for Relational Change",
  description:
    "MRC empowers women and girls in rural Balochistan through education, building schools and creating lasting change.",
  icons: [{ rel: "icon", url: "/mrclogo.png", type: "image/png" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <FooterWrapper />
      </body>
    </html>
  );
}
