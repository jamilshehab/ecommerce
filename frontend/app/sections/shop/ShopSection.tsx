import ProductCard from "@/app/components/products/ProductCard";
import { getCategories } from "@/app/lib/services/category";
import { getProductsByCategory } from "@/app/lib/services/products";
 
const ShopSection = async ({ searchParams }: any) => {
  const category = searchParams?.category || "all";

  const { products } = await getProductsByCategory(category);

  return (
    <div className="max-w-6xl mx-auto flex gap-10 py-10">
      {/* SIDEBAR */}

      {/* MAIN */}
      <section className="flex-1">
        <div className="flex justify-between mb-8">
          <p className="text-sm text-gray-500">
            Showing {products.length} products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {products.map((product: any) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={() => {}}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShopSection;
