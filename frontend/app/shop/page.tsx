import Breadcrumb from "../components/common/BreadCrumb";
import { getFeaturedProductsNew } from "../lib/services/products";
import CategorySection from "../sections/CategorySection";
import SkincareSection from "../sections/shop/SkinCareSection";

export const dynamic = "force-dynamic";

export default async function ShopPage() {
  const { products } = await getFeaturedProductsNew();

  return (
    <main className="">
      <Breadcrumb items={[{ label: "Shop" }]} />
      <CategorySection />
      <SkincareSection products={products} />
    </main>
  );
}
