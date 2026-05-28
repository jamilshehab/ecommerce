"use client";

import ShopGrid from "@/app/components/category/ShopGrid";
import SortDropdown from "@/app/components/common/DropDown";
import Pagination from "@/app/components/common/Pagination";
import { useHydrateProductList } from "../hooks/useHydrateProducts";
import { useProductStore } from "../hooks/useProduct";

const ClientShopSection = ({ products, pageCount }: any) => {
  useHydrateProductList(products);

  // ✅ always read from Zustand (single source of truth)
  const hydratedProducts = useProductStore((state) => state.products);

  return (
    <div className="max-w-6xl mx-auto py-20">
      <div className="flex justify-between mb-6">
        <p>{hydratedProducts.length} products</p>
        <SortDropdown />
      </div>

      <ShopGrid products={hydratedProducts} />

      {hydratedProducts.length > 6 && <Pagination totalPages={pageCount} />}
    </div>
  );
};

export default ClientShopSection;
