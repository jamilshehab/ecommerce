"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items?: BreadcrumbItem[];
};

export default function Breadcrumb({ items = [] }: BreadcrumbProps) {
  return (
    <nav className="    bg-secondary text-sm text-gray-500 flex-wrap gap-1">
      <div className="flex items-center mt-35  container relative mx-auto max-w-6xl py-10 px-4">
        <Link href="/" className="hover:text-black transition-colors">
          Home
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <div key={index} className="flex items-center gap-1">
              <ChevronRight size={16} />

              {isLast || !item.href ? (
                <span className="text-black font-medium">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-black transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
