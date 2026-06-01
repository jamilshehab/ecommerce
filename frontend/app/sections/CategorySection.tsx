import React from "react";
import { getCategories } from "../lib/services/category";
import CategoryGrid from "../components/category/CategoryGrid";
import CategoryVersionTwo from "../components/category/CategoryVersionTwo";

const CategorySection = async () => {
  const categories = await getCategories();
  console.log("Fetched Categories:", categories); // Debug log
  return (
    <div className="py-20 bg-white">
      <CategoryVersionTwo categories={categories} />
    </div>
  );
};

export default CategorySection;
