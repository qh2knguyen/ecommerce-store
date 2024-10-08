import type { Metadata } from "next";
import "./globals.css";
import { Urbanist} from 'next/font/google'
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

const font = Urbanist({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
