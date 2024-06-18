import React, { useState } from "react";
import { Link } from "react-router-dom";

import CartIcon from "../assets/images/icons/cart.svg";
import HamburgerIcon from "../assets/images/icons/hamburger.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow fixed w-full z-50 top-0 h-20 bg-white">
      <nav className="container mx-auto lg:p-5 px-1 py-2 h-full flex justify-between items-center">
        <Link className="text-xl font-bold" to="/">
          E-Cart
        </Link>
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-5 items-start md:items-center w-full md:w-auto p-3 md:p-0 bg-white md:relative absolute left-0 md:top-0 top-20`}
        >
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </div>
        <div className="flex">
          <button className="md:hidden visible mr-2" onClick={toggleMenu}>
            <img className="bt-icon" src={HamburgerIcon} alt="Menu Icon" />
          </button>
          <Link className="px-2 py-1 text-xl" to="/cart">
            <img className="bt-icon" src={CartIcon} alt="Cart Icon" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
