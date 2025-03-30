import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Rayshel Luxury | Exclusive High-End Fashion",
  description: "Discover the epitome of luxury fashion at Rayshel Luxury. Shop our curated collection of high-end clothing, accessories, and jewelry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
