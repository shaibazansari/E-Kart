import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import toast from "react-hot-toast";
import EmptyCartImg from "../assets/images/empty-cart.png";

import apiClient from "../services/api-service";
import { clearCart } from "../store/slices/cartSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = useSelector((state) => state.cart.items);

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shippingCharge = 0;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const placeOrder = async (data)=> {
    try {
      // setLoading(true);

      const res = await apiClient.post(`/orders`, data);

      dispatch(clearCart());
      setName("");
      setEmail("");

      toast.success("Order placed successfully!");
    } catch (error) {
      toast.error("Due to some error your order could not be placed. Please try again after some time.");
      console.error("Error placing order:", error);
    } finally {
      // setLoading(false);
      navigate("/");
    }
  }

  const handleSubmit = () => {
    if (!name || !email) {
      toast.error("Please fill in all the fields.");
      return;
    }

    const order = {
      user: {
        name,
        email,
      },
      amount: totalPrice,
      items: items,
    };

    placeOrder(order)
  };

  if (items.length === 0) {
    return (
      <div className="flex flex-col flex-grow items-center justify-center p-5">
        <img src={EmptyCartImg} alt="cart" loading="lazy" />
        <p className="text-lg">
          Your cart is empty. Please add some products to checkout.
        </p>
      </div>
    );
  }

  return (
    <section className="w-full flex flex-grow items-center justify-center">
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 py-10">
        <div className="px-4">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="mt-6 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col rounded-lg bg-white sm:flex-row"
              >
                <img
                  className="m-2 h-24 w-28 rounded-md border object-cover object-center flex-shrink-0"
                  src={item.image}
                  alt={item.name + " image"}
                />
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">{item.name}</span>
                  <p className="text-lg font-bold">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 bg-gray-100 rounded px-4 pt-4 lg:mt-0">
          <p className="text-xl font-medium">Order Details</p>
          <p className="text-gray-400">
            Complete your order by providing your order details.
          </p>
          <div>
            <label
              htmlFor="name"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your full name here"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>
              </div>
            </div>
            <label
              htmlFor="email"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Email
            </label>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="your.email@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-gray-900">
                  ${totalPrice.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Shipping</p>
                <p className="font-semibold text-gray-900">${shippingCharge}</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">
                ${(totalPrice + shippingCharge).toFixed(2)}
              </p>
            </div>
          </div>
          <button
            className="mt-4 mb-6 w-full text-white bg-green-500 rounded hover:bg-green-600 px-6 py-3 font-medium text-white"
            onClick={handleSubmit}
          >
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
