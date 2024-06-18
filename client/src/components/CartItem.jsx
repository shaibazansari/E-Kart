import React from "react";
import { useDispatch } from "react-redux";

import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../store/slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = async () => {
    dispatch(removeFromCart(item.id));
  };

  const handleIncrement = async () => {
    dispatch(incrementQuantity(item.id));
  };

  const handleDecrement = async () => {
    dispatch(decrementQuantity(item.id));
  };

  return (
    <div className="flex items-center gap-3 lg:p-5 p-3 my-2 rounded-lg relative border cursor-pointer">
      <img src={item.image} alt={item.title} width={100} />

      <div className="flex flex-col items-start gap-3">
        <button
          className="bg-red-500 text-white px-2 py-1 rounded-lg absolute right-2 top-2"
          onClick={handleRemoveFromCart}
        >
          X
        </button>
        <h2 className="text-lg font-medium">{item.name}</h2>

        <div className="flex justify-between items-center gap-5 ">
          <p className="text-lg font-semibold">
            $ {item.price * item.quantity}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="text-2xl px-2 bg-red-500 text-white rounded-lg"
            onClick={handleDecrement}
          >
            -
          </button>

          <span className="text-lg">{item.quantity}</span>

          <button
            className="text-2xl px-2 bg-green-500 text-white rounded-lg"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
