import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/design/navbar";
import Footer from "@/components/design/footer";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Cerebria'24",
  description: "DEPARTMENT OF ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} + bg-[#191919] px-20`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
