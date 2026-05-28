"use client";

import ShopGrid from "@/app/components/category/ShopGrid";
import SortDropdown from "@/app/components/common/DropDown";
import Pagination from "@/app/components/common/Pagination";
import { useHydrateProductList } from "../hooks/useHydrateProducts";

const ClientShopSection = ({ products, pageCount }: any) => {
  useHydrateProductList(products);

  return (
    <div className="max-w-6xl mx-auto py-20">
      <div className="flex justify-between mb-6">
        <p>{products.length} products</p>
        <SortDropdown />
      </div>

      <ShopGrid products={products} />

      {products.length > 6 && <Pagination totalPages={pageCount} />}
    </div>
  );
};

export default ClientShopSection;
