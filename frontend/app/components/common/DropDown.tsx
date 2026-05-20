"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SortDropdown() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") || "createdAt:desc";

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("sort", value);
    params.set("page", "1"); // reset page when sorting changes

    router.push(`?${params.toString()}`);
  };

  return (
    <select
      value={currentSort}
      onChange={(e) => handleChange(e.target.value)}
      className=" px-4 py-2 rounded border  border-gray-200 focus:outline-none  "
    >
      <option
        className=" px-4 py-2 rounded border  border-gray-200 focus:outline-none  "
        value="createdAt:desc"
      >
        Newest
      </option>
      <option
        className=" px-4 py-2 rounded border  border-gray-200 focus:outline-none  "
        value="createdAt:asc"
      >
        Oldest
      </option>
      <option
        className=" px-4 py-2 rounded border  border-gray-200 focus:outline-none  "
        value="price:asc"
      >
        Price: Low → High
      </option>
      <option
        className=" px-4 py-2 rounded border  border-gray-200 focus:outline-none  "
        value="price:desc"
      >
        Price: High → Low
      </option>
    </select>
  );
}
