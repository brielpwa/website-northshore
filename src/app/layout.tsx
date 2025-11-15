import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";

export const metadata: Metadata = {
  title: "NorthShore Web Services - Professional Websites for Local Businesses",
  description: "Modern, fast websites for auto repair shops, body shops, and contractors in North Shore, Massachusetts. $149/month includes everything.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
