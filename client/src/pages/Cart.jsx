import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "../components/CartItem";
import EmptyCartImg from "../assets/images/empty-cart.png";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="flex flex-col flex-grow items-center justify-center p-5">
        <img src={EmptyCartImg} alt="cart" loading="lazy" />
        <p className="text-lg">Your cart is empty.</p>
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
    <section className="w-full">
      <h2 className="text-center text-2xl my-10 font-semibold">Your Cart</h2>
      <div className="container flex flex-wrap px-2 mx-auto">
        <div className="md:w-1/2 w-full">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className=" md:w-1/2  w-full">
          <div className="border-2 m-2 border-gray-200 px-4 py-4 rounded-lg">
            <h2 className="title-font font-medium text-2xl mb-4">
              Cart Summary
            </h2>
            <div className="flex justify-between items-center mb-3">
              <span className="text-lg">Total Items:</span>
              <span className="text-lg">{items.length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg">Total Price:</span>
              <span className="text-lg">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="mt-6">
              <Link
                className="py-2 px-4 text-white bg-green-500 rounded hover:bg-green-600"
                to={"/checkout"}
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
