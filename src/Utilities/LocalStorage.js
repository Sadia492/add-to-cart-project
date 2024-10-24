const getItemFromLS = () => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    return JSON.parse(storedCart);
  }
  return [];
};

const addToLS = (id) => {
  const cart = getItemFromLS();
  cart.push(id);

  saveToLS(cart);
};

const saveToLS = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
const removeFromLS = (id) => {
  const cart = getItemFromLS();
  const remaining = cart.filter((idx) => idx !== id);
  saveToLS(remaining);
};

const getPriceFromLS = () => {
  const storedPrice = localStorage.getItem("price");
  if (storedPrice) {
    return JSON.parse(storedPrice);
  }
  return [];
};

const addPriceToLS = (id) => {
  const prices = getPriceFromLS();
  prices.push(id);

  savePriceToLS(prices);
};

const savePriceToLS = (prices) => {
  localStorage.setItem("price", JSON.stringify(prices));
};

const removePriceFromLS = (price) => {
  const prices = getPriceFromLS();
  const remaining = prices.filter((prices) => prices !== price);
  savePriceToLS(remaining);
};

export {
  addToLS,
  getItemFromLS,
  removeFromLS,
  addPriceToLS,
  getPriceFromLS,
  removePriceFromLS,
};
