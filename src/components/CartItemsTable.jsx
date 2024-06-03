import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharactersToLength } from "../helpers/helperFunctions";
import { FaTrash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { removeFromCart, updateItemQty } from "../features/cart/cartSlice";

const CartItemsTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);

  const incQty = (item) => {
    dispatch(updateItemQty({ _id: item._id, qty: item.qty + 1 }));
  };

  const decQty = (item) => {
    if (item.qty > 1) {
      dispatch(updateItemQty({ _id: item._id, qty: item.qty - 1 }));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item._id));
  };

  //   console.log(Array.isArray(items));

  return (
    <div className="w-2/3 flex flex-col justify-center items-center">
      <table className="min-w-full bg-white shadow-md">
        <thead>
          <tr className="text-slate-700 font-bold text-base">
            <th className="py-2">Product Image</th>
            <th className="py-2">Product Name</th>
            <th className="py-2">Price</th>
            <th className="py-2">Quantity</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-b text-center">
              <td className="py-2 px-4">
                <div className="w-24 h-24">
                  <img
                    className="w-full h-full object-contain cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
                    src={item.productImage}
                    alt=""
                  />
                </div>
              </td>
              <td className="py-2 px-4">
                <span
                  className="text-slate-700 font-semibold cursor-pointer hover:underline"
                  onClick={() => navigate(`/product/${item._id}`)}
                >
                  {getCharactersToLength(item.productName, 40)}
                </span>
              </td>
              <td className="py-2 px-4 text-slate-700 font-bold">
                € {item.sellingPrice}
              </td>
              <td className="py-2 px-4">
                <div className="flex gap-4 items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-primary-yellow to-primary-red text-xl font-bold border-2 border-slate-500 px-4 py-0.5 ml-2 rounded-full">
                  <button onClick={() => decQty(item)}>-</button>
                  <p>{item.qty}</p>
                  <button onClick={() => incQty(item)}>+</button>
                </div>
              </td>
              <td className="py-2 px-4">
                <button
                  className="bg-red-500 text-white w-8 h-8 rounded-full "
                  onClick={() => handleRemove(item)}
                >
                  <span className="text-sm font-bold flex justify-center items-center">
                    <FaTrash />
                  </span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartItemsTable;
