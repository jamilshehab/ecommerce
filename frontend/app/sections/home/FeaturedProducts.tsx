import { getFeaturedProducts } from "@/app/lib/services/products";
import FeaturedProductsClient from "./FeaturedProductClient";

const FeaturedProducts = async () => {
  const products = await getFeaturedProducts(3);

  return <FeaturedProductsClient initialProducts={products} />;
};

export default FeaturedProducts;
