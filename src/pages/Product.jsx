import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CommonHeader from "../components/CommonHeader";
import cross from "../assets/x.svg";
import CardComponent from "../components/CardComponent";
import PriceRangeSlider from "../components/Pricerangeslider";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";

function Product() {
  const { storeInfo, loading } = useSelector((state) => state.storeInfo);
  const { product } = useSelector((state) => state.products);

  const categories = storeInfo?.sub_category_list || [];
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    in_stock:
      searchParams.get("in_stock") !== null
        ? searchParams.get("in_stock") === "true"
        : true,
    out_of_stock: searchParams.get("out_of_stock") === "true" || true,
    categories: searchParams.get("categories")
      ? searchParams.get("categories").split(",")
      : [],
    sizes: searchParams.get("sizes")
      ? searchParams.get("sizes").split(",")
      : [],
    priceRange: [
      searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) : 0,
      searchParams.get("maxPrice")
        ? Number(searchParams.get("maxPrice"))
        : 10000,
    ],
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.in_stock) params.set("in_stock", "true");
    if (filters.out_of_stock) params.set("out_of_stock", "true");
    if (filters.categories.length > 0)
      params.set("categories", filters.categories.join(","));
    if (filters.sizes.length > 0) params.set("sizes", filters.sizes.join(","));
    if (filters.priceRange[0] > 0)
      params.set("minPrice", filters.priceRange[0]);
    if (filters.priceRange[1] < 10000)
      params.set("maxPrice", filters.priceRange[1]);

    setSearchParams(params, { replace: true });
  }, [filters, setSearchParams]);

  useEffect(() => {
    const in_stock = searchParams.get("in_stock") === "true";
    const out_of_stock = searchParams.get("out_of_stock") === "true";
    const categories = searchParams.get("categories")
      ? searchParams.get("categories").split(",")
      : [];
    const sizes = searchParams.get("sizes")
      ? searchParams.get("sizes").split(",")
      : [];
    setFilters((prev) => ({
      ...prev,
      in_stock: in_stock || prev.in_stock,
      out_of_stock: out_of_stock || prev.out_of_stock,
      categories: categories.length > 0 ? categories : prev.categories,
      sizes: sizes.length > 0 ? sizes : prev.sizes,
    }));
  }, [searchParams]);

  const handleCheckboxChange = (filterType, value) => {
    if (filterType === "in_stock" || filterType === "out_of_stock") {
      setFilters((prev) => ({
        ...prev,
        [filterType]: !prev[filterType],
      }));
    } else if (filterType === "categories") {
      const category = categories.find((cat) => cat.id.toString() === value);
      const categoryName = category?.name || value;

      setFilters((prev) => ({
        ...prev,
        categories: prev.categories.includes(categoryName)
          ? prev.categories.filter((cat) => cat !== categoryName)
          : [...prev.categories, categoryName],
      }));
    } else if (filterType === "sizes") {
      setFilters((prev) => ({
        ...prev,
        sizes: prev.sizes?.includes(value)
          ? prev.sizes.filter((s) => s !== value)
          : [...(prev.sizes || []), value],
      }));
    }
  };

  const clearAllFilters = () => {
    setFilters({
      in_stock: false,
      out_of_stock: true,
      categories: [],
      sizes: [],
      priceRange: [0, 10000],
    });
    setSearchParams({});
  };
  const products = product?.data?.products?.data || [];

  const filteredProducts = products.filter((product) => {
    const in_stock = product.quantity > 0;

    const stockMatch =
      (filters.in_stock && in_stock) ||
      (filters.out_of_stock && !in_stock) ||
      (!filters.in_stock && !filters.out_of_stock);

    const categoryMatch =
      filters.categories.length === 0 ||
      filters.categories.some((categoryName) => {
        const category = categories.find((cat) => cat.name === categoryName);
        return category && category.id === product.sub_category_id;
      });

    const priceMatch =
      product.final_price >= filters.priceRange[0] &&
      product.final_price <= filters.priceRange[1];

    return stockMatch && categoryMatch && priceMatch;
  });

  // const uniqueSizes = [
  //   ...new Set(products.map((product) => product.size).filter(Boolean)),
  // ];

  return (
    <div className="">
      <CommonHeader />
      <div className="mx-auto py-[3.125rem] lg:py-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7.5 px-4 sm:px-6 lg:px-10 xl:px-[4.6875rem]">
          <div className="lg:col-span-2 text-start fillters">
            <div className="flex flex-col border-b mb-[1rem] xl:mb-[1.5rem]">
              <div className="flex justify-between w-full">
                <h4 className="text-lg font-bold uppercase text-[0.875rem] text-[#111111]">
                  Filter By <span>(2)</span>
                </h4>
                <span
                  className="underline text-[0.875rem] cursor-pointer"
                  onClick={clearAllFilters}
                >
                  Clear All
                </span>
              </div>
              <div className="flex flex-wrap gap-[0.5rem] py-[1.5rem]">
                <span className="bg-[#F8F8F8] text-sm inline-flex px-[0.9375rem] py-[0.375rem] gap-[0.375rem] rounded-lg">
                  In stock <img className="cursor-pointer" src={cross} alt="" />
                </span>
                <span className="bg-[#F8F8F8] text-sm inline-flex px-[0.9375rem] py-[0.375rem] gap-[0.375rem] rounded-lg">
                  Out of Stock{" "}
                  <img className="cursor-pointer" src={cross} alt="" />
                </span>
                <span className="bg-[#F8F8F8] text-sm inline-flex px-[0.9375rem] py-[0.375rem] gap-[0.375rem] rounded-lg">
                  Women’s Watch
                  <img className="cursor-pointer" src={cross} alt="" />
                </span>
              </div>
            </div>
            <div className="mb-[1.5rem]">
              <h4 className="text-lg font-bold uppercase text-[0.875rem] text-[#111111] mb-[0.9375rem]">
                Availability <span>(2)</span>
              </h4>
              <div className="flex flex-wrap gap-5 lg:gap-[0.5rem] flex-row lg:flex-col">
                <label className="flex items-center text-[0.875rem]">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-transparent focus:ring-blue-500 dark:focus:ring-blue-400 appearance-none custom-checkbox"
                    defaultChecked
                    checked={filters.in_stock}
                    onChange={() => handleCheckboxChange("in_stock")}
                  />
                  <span className="ml-2">In Stock</span>
                </label>
                <label className="flex items-center text-[0.875rem]">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-transparent focus:ring-blue-500 dark:focus:ring-blue-400 appearance-none custom-checkbox"
                    checked={filters.out_of_stock}
                    onChange={() => handleCheckboxChange("out_of_stock")}
                  />
                  <span className="ml-2">Out of Stock</span>
                </label>
              </div>
            </div>
            {loading ? (
              <div className="flex items-center justify-center p-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              </div>
            ) : categories.length > 0 ? (
              <div className="mb-[1.5rem]">
                <h4 className="text-lg font-bold mb-2 uppercase text-[0.875rem] text-[#111111]">
                  Category <span>({categories.length})</span>
                </h4>
                <div className="flex flex-wrap gap-5 lg:gap-[0.5rem] flex-row lg:flex-col">
                  {categories.map((category) => {
                    const name = category?.name || "Unnamed";
                    return (
                      <label
                        key={category.id || name}
                        className="flex items-center text-[0.875rem]"
                      >
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-transparent focus:ring-blue-500 dark:focus:ring-blue-400 appearance-none custom-checkbox"
                          checked={filters.categories.includes(category.name)}
                          onChange={() =>
                            handleCheckboxChange(
                              "categories",
                              category.id.toString()
                            )
                          }
                        />
                        <span className="ml-2">{name}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center p-4">
                <p className="text-sm text-gray-500">No categories found</p>
              </div>
            )}

            {/* do not remove this below code */}
            {/* {loading ? (
              <div className="flex items-center justify-center p-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              </div>
            ) : uniqueSizes.length > 0 ? (
              <div className="mb-[1.5rem]">
                <h4 className="text-lg font-bold mb-2 uppercase text-[0.875rem] text-[#111111]">
                  Size <span>({uniqueSizes.length})</span>
                </h4>
                <div className="flex flex-wrap gap-5 lg:gap-[0.5rem] flex-row lg:flex-col">
                  {uniqueSizes.map((size) => (
                    <label
                      key={size}
                      className="flex items-center text-[0.875rem]"
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-transparent focus:ring-blue-500 dark:focus:ring-blue-400 appearance-none custom-checkbox"
                        checked={filters.sizes?.includes(size)}
                        onChange={() => handleCheckboxChange("sizes", size)}
                      />
                      <span className="ml-2">{size}</span>
                    </label>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center p-4">
                <p className="text-sm text-gray-500">No sizes found</p>
              </div>
            )} */}
            <div>
              <h4 className="text-lg font-bold uppercase text-[0.875rem] text-[#111111] mb-[0.9375rem]">
                Price Range
              </h4>
              <PriceRangeSlider
                value={filters.priceRange}
                onChange={(newRange) =>
                  setFilters((prev) => ({ ...prev, priceRange: newRange }))
                }
              />
            </div>
          </div>

          <div className="lg:col-span-10 lg:pl-[1.875rem]">
            <div className="flex flex-wrap gap-2 justify-between mb-[1.5rem]">
              <select className="uppercase">
                <option className="uppercase">Short By</option>
                <option value="">In Stock</option>
              </select>
              <span className="text-[#808080] uppercase">
                Showing {products.length} results
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-y-[4.375rem]">
              {filteredProducts?.length > 0 ? (
                filteredProducts.map((product) => (
                  <CardComponent
                    key={product.id}
                    product={product}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-lg text-gray-600">
                    No products match the selected filters.
                  </p>
                  <button
                    onClick={clearAllFilters}
                    className="inline-flex gap-2 btn px-[1.5rem] py-[0.9375rem] rounded-lg text-sm font-medium focus:outline-none items-center mt-5"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
            <nav className="mt-[4.375rem]" aria-label="Page navigation">
              <ul class="flex items-center justify-center -space-x-px h-8 text-sm text-[1rem]">
                {/* <li>
                  <a href="#" class="px-3 h-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M20 8L12 16L20 24"
                        stroke="#111111"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </li> */}
                <li>
                  <a href="#" class="px-3 h-8">
                    1
                  </a>
                </li>
                <li>
                  <a href="#" class="px-3 h-8">
                    2
                  </a>
                </li>
                <li>
                  <a href="#" aria-current="page" class="px-3 h-8">
                    3
                  </a>
                </li>
                <li>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="3"
                      viewBox="0 0 11 3"
                      fill="none"
                    >
                      <path
                        d="M1.31475 2.176C0.77075 2.176 0.30675 1.728 0.30675 1.2C0.30675 0.656 0.77075 0.192 1.31475 0.192C1.85875 0.192 2.32275 0.656 2.32275 1.2C2.32275 1.728 1.85875 2.176 1.31475 2.176ZM5.50225 2.176C4.95825 2.176 4.49425 1.728 4.49425 1.2C4.49425 0.656 4.95825 0.192 5.50225 0.192C6.04625 0.192 6.51025 0.656 6.51025 1.2C6.51025 1.728 6.04625 2.176 5.50225 2.176ZM9.68975 2.176C9.14575 2.176 8.68175 1.728 8.68175 1.2C8.68175 0.656 9.14575 0.192 9.68975 0.192C10.2338 0.192 10.6978 0.656 10.6978 1.2C10.6978 1.728 10.2338 2.176 9.68975 2.176Z"
                        fill="#111111"
                      />
                    </svg>
                  </span>
                </li>
                <li>
                  <a href="#" class="px-3 h-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M12 24L20 16L12 8"
                        stroke="#111111"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
