"use client";

import Link from "next/link";

interface Category {
  id: number;
  name: string;
  slug: string;
}

export default function CategoryNavbar({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <section className="fixed top-[88px] left-0 right-0 z-40 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl    px-3 py-3">
          <div className="flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/shop/${category.slug}`}
                className="
                  flex-shrink-0
                  flex items-center justify-center
                  h-9 px-4
                  rounded-full
                  border border-black/5
                  bg-white/60 backdrop-blur-xl
                  text-xs sm:text-sm font-medium
                  transition-all
                  hover:bg-black hover:text-white
                "
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
