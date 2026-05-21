import Breadcrumb from "../components/common/BreadCrumb";
import CategorySection from "../sections/CategorySection";
import ShopSection from "../sections/shop/ShopSection";

export const dynamic = "force-dynamic";

export default function ShopPage() {
  return (
    <main className="">
      <Breadcrumb items={[{ label: "Shop" }]} />
      <CategorySection />
    </main>
  );
}
