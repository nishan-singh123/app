"use client";

import { PRODUCTS_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DEFAULT_SORT = JSON.stringify({ createdAt: -1 });
const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 1000000000000;

const ProductsFilter = () => {
  const router = useRouter();

  const [sort, setSort] = useState(DEFAULT_SORT);
  const [minPrice, setMinPrice] = useState(DEFAULT_MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(DEFAULT_MAX_PRICE);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [brands, setBrands] = useState([]);

  function filterProducts() {
    const params = new URLSearchParams();

    params.set("sort", sort);
    params.set("min", minPrice);
    params.set("max", maxPrice);
    params.set("category", category);
    params.set("name", name);
    params.set("brands", brands.join(","));

    router.push(`?${params.toString()}`);
  }

  function resetFilter() {
    setSort(DEFAULT_SORT);
    setMinPrice(DEFAULT_MIN_PRICE);
    setMaxPrice(DEFAULT_MAX_PRICE);
    setCategory("");
    setName("");
    setBrands([]);

    router.push(PRODUCTS_ROUTE);
  }

  function handleBrandsFilterChange(brand) {
    setBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item != brand)
        : [...prev, brand],
    );
  }

  return (
    <aside className="shadow-md py-8 px-6 rounded-xl bg-white dark:bg-gray-800">
      <h3 className="font-semibold text-xl">Products filter</h3>

      <div className="py-3">
        <h4 className="mb-1 font-semibold">Search</h4>
        <input
          name="name"
          id="name"
          value={name}
          className="border border-gray-300 rounded-md w-full px-2 py-1"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="py-3">
        <h4 className="mb-1 font-semibold">Sort By</h4>
        <select
          name="sort"
          id="sort"
          className="border border-gray-300 rounded-md w-full px-2 py-1"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value={JSON.stringify({ createdAt: -1 })}>
            Latest Products
          </option>
          <option value={JSON.stringify({ createdAt: 1 })}>
            Oldest Products
          </option>
          <option value={JSON.stringify({ price: -1 })}>
            Price: High to Low
          </option>
          <option value={JSON.stringify({ price: 1 })}>
            Price: Low to High
          </option>
          <option value={JSON.stringify({ name: 1 })}>Name: A-Z</option>
          <option value={JSON.stringify({ name: -1 })}>Name: Z-A</option>
        </select>
      </div>

      <div className="py-3">
        <h4 className="mb-1 font-semibold">Price Range</h4>

        <label htmlFor="min" className="text-xs text-gray-600">
          Minimum price:
        </label>
        <input
          name="min"
          id="min"
          type="number"
          min={DEFAULT_MIN_PRICE}
          className="border border-gray-300 rounded-md w-full px-2 py-1 mt-1"
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <label htmlFor="max" className="text-xs text-gray-600">
          Maximum price:
        </label>
        <input
          name="max"
          id="max"
          max={DEFAULT_MAX_PRICE}
          className="border border-gray-300 rounded-md w-full px-2 py-1 mt-1"
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div className="py-3">
        <h4 className="mb-1 font-semibold">Category</h4>
        <select
          name="category"
          id="category"
          className="border border-gray-300 rounded-md w-full px-2 py-1"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select category</option>
          <option value="Smartphones">Smartphones</option>
          <option value="Laptops">Laptops</option>
          <option value="Smartwatches">Smartwatches</option>
        </select>
      </div>

      <div className="py-3">
        <h4 className="mb-1 font-semibold">Brands</h4>
        <div className="flex items-center justify-start gap-2 py-0.5">
          <input
            name="Apple"
            id="Apple"
            type="checkbox"
            onChange={() => handleBrandsFilterChange("Apple")}
          />
          <label htmlFor="Apple" className="text-sm text-gray-600">
            Apple
          </label>
        </div>
        <div className="flex items-center justify-start gap-2 py-0.5">
          <input
            name="Samsung"
            id="Samsung"
            type="checkbox"
            onChange={() => handleBrandsFilterChange("Samsung")}
          />
          <label htmlFor="Samsung" className="text-sm text-gray-600">
            Samsung
          </label>
        </div>
        <div className="flex items-center justify-start gap-2 py-0.5">
          <input
            name="Google"
            id="Google"
            type="checkbox"
            onChange={() => handleBrandsFilterChange("Google")}
          />
          <label htmlFor="Google" className="text-sm text-gray-600">
            Google
          </label>
        </div>
        <div className="flex items-center justify-start gap-2 py-0.5">
          <input
            name="Oneplus"
            id="Oneplus"
            type="checkbox"
            onChange={() => handleBrandsFilterChange("Oneplus")}
          />
          <label htmlFor="Oneplus" className="text-sm text-gray-600">
            Oneplus
          </label>
        </div>
        <div className="flex items-center justify-start gap-2 py-0.5">
          <input
            name="Acer"
            id="Acer"
            type="checkbox"
            onChange={() => handleBrandsFilterChange("Acer")}
          />
          <label htmlFor="Acer" className="text-sm text-gray-600">
            Acer
          </label>
        </div>
      </div>

      <div className="py-3 space-y-2">
        <button
          onClick={filterProducts}
          className="bg-primary text-white px-5 py-1 rounded-md w-full cursor-pointer hover:bg-blue-600 transition duration-300"
        >
          Filter Products
        </button>
        <button
          onClick={resetFilter}
          className="bg-red-500 text-white px-5 py-1 rounded-md w-full cursor-pointer hover:bg-red-600 transition duration-300"
        >
          Reset filters
        </button>
      </div>
    </aside>
  );
};

export default ProductsFilter;
