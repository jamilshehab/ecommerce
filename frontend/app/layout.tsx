import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import CartDrawer from "./components/cart/CartDrawer";
import SubscribePopup from "./components/common/PopUpModal";
import Instagram from "./components/social/Instagram";
import ToastProvider from "./components/ui/Toastify";
import CategoryNavbar from "./components/common/Header/CategorySidebar";
import { getCategories } from "./lib/services/category";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "500", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luxury Skincare & Beauty Products |   SELF Lebanon",
  description: "Discover luxury skincare and beauty products at   SELF Lebanon",
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getCategories();

  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans  ">
        <ToastProvider>
          <Header />
          <CategoryNavbar categories={categories} />
          {children}
          <SubscribePopup />
          <CartDrawer />
          <Instagram />
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
