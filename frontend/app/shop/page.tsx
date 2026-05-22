import Breadcrumb from "../components/common/BreadCrumb";
import CategorySection from "../sections/CategorySection";

export const dynamic = "force-dynamic";

export default function ShopPage() {
  return (
    <main className="">
      <Breadcrumb items={[{ label: "Shop" }]} />
      <CategorySection />
    </main>
  );
}
