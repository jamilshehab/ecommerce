import Breadcrumb from "../components/common/BreadCrumb";
import CartSection from "../sections/cart/CartSection";

export default function Cart() {
  return (
    <main className="">
      <Breadcrumb items={[{ label: "Cart" }]} />
      <CartSection />
    </main>
  );
}
