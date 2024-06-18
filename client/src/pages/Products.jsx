import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";

import Loader from "../components/Loader";
import Card from "../components/Card";

import useProducts from "../hooks/useProducts";

const Products = () => {
  const { loading } = useProducts();
  const { products, categories } = useSelector((state) => state.product);

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") {
      return products;
    } else {
      return products.filter((product) => product.category === activeCategory);
    }
  }, [products, activeCategory]);

  const handleClick = (category) => {
    setActiveCategory(category);
  };

  if (loading) {
    return <Loader />;
  }

  if (products.length === 0) {
    return (
      <div className="w-full flex flex-grow items-center justify-center">
        <p>Currently there are no products!.</p>
      </div>
    );
  }

  return (
    <section className="w-full">
      <div className="container p-5 mx-auto">
        <div className="flex gap-5 items-center justify-start overflow-x-scroll mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`border px-4 py-1 rounded-lg  min-w-fit ${category == activeCategory ? "bg-green-500 text-white" : ""}`}
              onClick={() => handleClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap -m-4">
          {filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
