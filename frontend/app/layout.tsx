import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import CartDrawer from "./components/cart/CartDrawer";
import SubscribePopup from "./components/common/PopUpModal";
import Instagram from "./components/social/Instagram";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "500", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luxury Skincare & Beauty Products | SELF Lebanon",
  description: "Discover luxury skincare and beauty products at SELF Lebanon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans  ">
        <Header />
        {children}
        <SubscribePopup />
        <CartDrawer />
        <Instagram />
        <Footer />
      </body>
    </html>
  );
}
