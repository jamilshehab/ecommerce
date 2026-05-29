import React from "react";
import { getCategories } from "../lib/services/category";
import CategoryGrid from "../components/category/CategoryGrid";

const CategorySection = async () => {
  const categories = await getCategories();
  return (
    <div className="py-20 bg-white">
      <CategoryGrid categories={categories} />
    </div>
  );
};

export default CategorySection;
