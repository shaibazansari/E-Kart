import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <Link
      className="p-4 lg:w-1/4 md:w-1/2 w-full"
      to={`/products/${product.id}`}
    >
      <div className="h-full flex flex-col items-center cursor-pointer rounded-lg p-2 bg-gray-100 hover:bg-gray-200 text-black text-center ">
        <img
          className="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4"
          src={product.image}
          alt={product.name + " image"}
        />
        <div className="w-full">
          <h2 className="font-medium text-lg">$ {product.price}</h2>
          <h3 className="mb-3">{product.category}</h3>
          <p className="mb-4">{product.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
