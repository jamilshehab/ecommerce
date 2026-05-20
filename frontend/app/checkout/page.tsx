import Breadcrumb from "../components/common/BreadCrumb";
import CheckoutSection from "../sections/checkout/Checkout";

export default function CheckoutPage() {
  return (
    <main>
      <Breadcrumb items={[{ label: "Checkout" }]} />
      <CheckoutSection />
    </main>
  );
}
