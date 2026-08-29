import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import FooterWrapper from "@/components/FooterWrapper";
import ChatBotWrapper from "@/components/ChatBotWrapper";
import EventsFloatingWrapper from "@/components/EventsFloatingWrapper";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MRC | Mechanism for Rational Change",
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
        <ChatBotWrapper />
        <EventsFloatingWrapper />
        <Analytics />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "ya4ohgkfae");`}
        </Script>
      </body>
    </html>
  );
}
