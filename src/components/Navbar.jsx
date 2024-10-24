import React from "react";

export default function Navbar({ cart, totalPrice }) {
  return (
    <div className=" bg-blue-100 py-4">
      <div className="w-4/5 mx-auto flex items-center justify-between">
        <h1 className="font-bold text-3xl">Logo</h1>
        <div className="font-bold text-xl space-x-3">
          <a href="">Home</a>
          <a href="">Product</a>
          <a href="">Cart{cart.length}</a>
          <a href="">{totalPrice.toFixed(2)}$</a>
        </div>
      </div>
    </div>
  );
}
