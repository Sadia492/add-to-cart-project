import React from "react";

export default function Product({ product, handleBuyNow }) {
  const { name, description, price, isFeatured, img, id } = product;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>{price}$</p>
          <p>{isFeatured ? "Featured Category" : "not Category"}</p>
          <div className="card-actions">
            <button
              onClick={() => handleBuyNow(product, id)}
              className="btn btn-primary"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
