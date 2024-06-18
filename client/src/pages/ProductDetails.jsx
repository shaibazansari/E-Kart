import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Loader from "../components/Loader";

import apiClient from "../services/api-service";
import { addToCart } from "../store/slices/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      setLoading(true);

      const res = await apiClient.get(`/products/${id}`)

      setProduct(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        category: product.category,
        image: product.image,
        price: product.price,
      })
    );

    navigate("/cart");
  };

  if (loading) {
    return <Loader />;
  }

  if (!product) {
    return (
      <div className="w-full flex flex-col flex-grow items-center justify-center">
        <p>Product not found.</p>
        <Link
          className="text-white bg-green-500 rounded hover:bg-green-600 mt-5 py-2 px-4"
          to={"/"}
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="w-full flex flex-grow items-center justify-center">
        <div className="container px-5 py-10 mx-auto">
          <div className="w-full mx-auto flex flex-wrap gap-5 items-center justify-center">
            <img alt="ecommerce" width={300} src={product.image} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm tracking-widest">{product.category}</h2>
              <h1 className="text-3xl font-medium mb-1">{product.name}</h1>

              <p className="leading-relaxed mb-5">{product.description}</p>

              <div className="flex">
                <span className="font-medium text-2xl ">$ {product.price}</span>
                <button
                  className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
