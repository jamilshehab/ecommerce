import ShopGrid from "@/app/components/category/ShopGrid";
import Breadcrumb from "@/app/components/common/BreadCrumb";
import SortDropdown from "@/app/components/common/DropDown";
import Pagination from "@/app/components/common/Pagination";
import { getProductsByCategory } from "@/app/lib/services/products";

export default async function Page({ params, searchParams }: any) {
  const { category } = await params;

  const sort = searchParams?.sort || "createdAt:desc";
  const page = Number(searchParams?.page) || 1;

  const { products, pageCount } = await getProductsByCategory(
    category,
    page,
    8,
    sort,
  );

  return (
    <main>
      <Breadcrumb
        items={[
          {
            label: "Shop",
            href: "/shop",
          },
          {
            label: category,
          },
        ]}
      />
      <div className="max-w-6xl mx-auto py-20">
        <div className="flex justify-between mb-6">
          <p>{products.length} products</p>
          <SortDropdown />
        </div>

        <ShopGrid products={products} />
        {products.length > 6 && <Pagination totalPages={pageCount} />}
      </div>
    </main>
  );
}
