import { useState } from "react";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import React, { useEffect } from "react";
import {
  addPriceToLS,
  addToLS,
  getItemFromLS,
  getPriceFromLS,
  removeFromLS,
  removePriceFromLS,
} from "./Utilities/LocalStorage";

function App() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (products.length) {
      const carts = getItemFromLS();
      const savedCart = [];
      for (const id of carts) {
        const product = products.find((product) => product.id === id);
        savedCart.push(product);
      }

      setCart(savedCart);
      const prices = getPriceFromLS();
      const sum = prices.reduce((prev, curr) => prev + curr, 0);
      setTotalPrice(sum);
    }
  }, [products]);
  const handleBuyNow = (product, id) => {
    const isExist = cart.find((product) => product.id === id);
    if (isExist) {
      alert("already exists");
    } else {
      setCart([...cart, product]);
      addToLS(id);
      addPriceToLS(product.price);
      setTotalPrice(totalPrice + product.price);
    }
  };
  const handleDeleteBtn = (product, id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromLS(id);
    removePriceFromLS(product.price);
    setTotalPrice(totalPrice - product.price);
  };

  return (
    <>
      <Navbar totalPrice={totalPrice} cart={cart}></Navbar>
      <div className="w-4/5 mx-auto grid grid-cols-3 mt-6 gap-8">
        <Products products={products} handleBuyNow={handleBuyNow}></Products>
        <CartContainer
          handleDeleteBtn={handleDeleteBtn}
          cart={cart}
        ></CartContainer>
      </div>
    </>
  );
}

export default App;
