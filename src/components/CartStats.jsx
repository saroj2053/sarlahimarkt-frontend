import React from "react";
import { useSelector } from "react-redux";
import {
  selectGSTAmount,
  selectTotalAmount,
  selectTotalItemsInCart,
} from "../features/cart/cartSlice";
import { getCalculatedShippingCharge } from "../helpers/helperFunctions";

const CartStats = ({ item }) => {
  const totalProductsCost = useSelector(selectTotalAmount);
  const GSTAmount = useSelector(selectGSTAmount);
  //   console.log(typeof totalProductsCost, typeof GSTAmount);

  const totalItems = useSelector(selectTotalItemsInCart);
  const shippingCharge = getCalculatedShippingCharge(
    totalProductsCost + GSTAmount,
    totalItems
  );

  return (
    <div className="flex flex-col gap-5 px-4 py-6 shadow-lg">
      <h2 className="text-2xl text-center w-full text-slate-700 font-bold">
        SUBTOTAL ({totalItems}) ITEMS
      </h2>
      <table className="min-w-full bg-white">
        <tbody>
          <tr className="text-slate-700 font-bold">
            <td className="px-4 py-2">Product Cost:</td>
            <td className="px-4 py-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-yellow to-primary-red">
                € {totalProductsCost.toFixed(2)}
              </span>
            </td>
          </tr>
          <tr className="text-slate-700 font-bold border-t">
            <td className="px-4 py-2">GST:</td>
            <td className="px-4 py-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-yellow to-primary-red">
                € {GSTAmount.toFixed(2)}
              </span>
            </td>
          </tr>

          <tr className="text-slate-700 font-bold border-t">
            <td className="px-4 py-2">Shipping Charge:</td>
            <td className="px-4 py-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-yellow to-primary-red">
                € {shippingCharge.toFixed(2)}
              </span>
            </td>
          </tr>

          <tr className="text-slate-700 font-bold border-t">
            <td className="px-4 py-2">Total Price:</td>
            <td className="px-4 py-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-yellow to-primary-red">
                € {(totalProductsCost + GSTAmount + shippingCharge).toFixed(2)}
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <button className="border py-2 uppercase text-slate-700 font-semibold tracking-wide">
        Proceed to Payment
      </button>
    </div>
  );
};

export default CartStats;
