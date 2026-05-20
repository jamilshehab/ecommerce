import Image from "next/image";
import Link from "next/link";
import CustomImage from "../common/CustomImage";
import { getStrapiImage } from "@/app/lib/services/common";
import { Category } from "@/app/types";

export default function CategoryGrid({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <section className="max-w-6xl mx-auto py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat: any) => (
          <Link
            key={cat.id}
            href={`/shop/${cat.slug}`}
            className="group relative rounded-2xl overflow-hidden h-40 md:h-52 block"
          >
            {/* Image */}
            <CustomImage
              src={getStrapiImage(cat.image.url)}
              alt={cat.name}
              width={cat.image.width || 500}
              height={cat.image.height || 500}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

            <div className="flex items-center justify-between">
              <div className="absolute inset-0 flex items-end p-4">
                <h3 className="text-white font-semibold text-lg">{cat.name}</h3>
              </div>
              <div className="absolute inset-0 flex items-end justify-end p-4">
                <p className="text-white/80 text-sm">
                  {cat.products?.length || 0} Products
                </p>
              </div>
            </div>
            {/* Text */}
          </Link>
        ))}
      </div>
    </section>
  );
}
