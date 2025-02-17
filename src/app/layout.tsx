import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tawaanzo Consultants – Tax, GST, Company Registration, and more!",
  description: "Tax, GST, Company Registration, you name it, we do it!",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
