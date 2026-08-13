import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuickViewProvider } from "@/components/providers/QuickViewProvider";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luxe Auto Accessories | Premium Auto Accessories Ontario",
  description:
    "The Greater Toronto Area's most trusted automotive accessories destination. Premium styling, protection, and customisation with expert installation and a 12-month workmanship warranty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body>
        <QuickViewProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </QuickViewProvider>
      </body>
    </html>
  );
}
