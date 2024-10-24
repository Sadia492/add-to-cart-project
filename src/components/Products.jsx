import Product from "./Product";

export default function Products({ products, handleBuyNow }) {
  return (
    <div className="col-span-2">
      <div className="grid grid-cols-2 gap-6">
        {products.map((product) => (
          <Product
            key={product.id}
            handleBuyNow={handleBuyNow}
            product={product}
          ></Product>
        ))}
      </div>
    </div>
  );
}
