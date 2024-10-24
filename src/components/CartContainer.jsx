import React, { useState } from "react";
import About from "./About";
import Cart from "./Cart";

export default function CartContainer({ cart, handleDeleteBtn }) {
  const [isActive, setIsActive] = useState(true);
  const handleIsActiveBtn = (name) => {
    if (name === "cart") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center">
        <button
          className={`btn ${isActive ? "btn-warning" : ""}`}
          onClick={() => handleIsActiveBtn("cart")}
        >
          Cart
        </button>
        <button
          onClick={() => handleIsActiveBtn("about")}
          className={`btn ml-3 ${!isActive ? "btn-warning" : ""}`}
        >
          About
        </button>
      </div>
      {isActive ? (
        <Cart cart={cart} handleDeleteBtn={handleDeleteBtn}></Cart>
      ) : (
        <About></About>
      )}
    </div>
  );
}
