import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop | Self",
  description: "Browse the latest fashion products and collections.",
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
