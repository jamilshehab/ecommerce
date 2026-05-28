import ClientShopSection from "@/app/components/ClientShopSection";
import Breadcrumb from "@/app/components/common/BreadCrumb";

import { getProductsByCategory } from "@/app/lib/services/products";

export const dynamic = "force-dynamic";

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
      <ClientShopSection products={products} pageCount={pageCount} />
    </main>
  );
}
