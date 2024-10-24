import React from "react";

export default function Cart({ cart, handleDeleteBtn }) {
  return (
    <div className="mt-5">
      {cart.map((product, index) => (
        <div key={index} className="overflow-x-auto">
          <table className="table">
            <tbody>
              {/* row 2 */}
              <tr className="hover">
                <th>{index + 1}</th>
                <td>
                  <img className="w-10" src={product.img} alt="" />
                </td>
                <td>{product.price}$</td>
                <td>
                  <button
                    onClick={() => handleDeleteBtn(product, product.id)}
                    className="btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
