import { useSelector } from "react-redux";
import {
  selectGSTAmount,
  selectTotalAmount,
  selectTotalItemsInCart,
} from "../features/cart/cartSlice";
import { getCalculatedShippingCharge } from "../helpers/helperFunctions";

const CartStats = () => {
  const totalProductsCost = useSelector(selectTotalAmount);
  const GSTAmount = useSelector(selectGSTAmount);
  console.log(typeof totalProductsCost, typeof GSTAmount);

  const totalItems = useSelector(selectTotalItemsInCart);
  const shippingCharge = getCalculatedShippingCharge(
    totalProductsCost + GSTAmount,
    totalItems
  );

  return (
    <>
      <div className="flex flex-col gap-5 px-4 py-6 bg-white">
        <div className="flex justify-between border-b pb-2">
          <p className="w-[60%]">Product Cost:</p>
          <p
            className="bg-clip-text text-transparent bg-gradient-to-r
          from-primary-yellow to-primary-red"
          >
            € {totalProductsCost.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between border-b pb-2">
          <p className="w-[60%]">GST:</p>
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-primary-yellow to-primary-red">
            € {GSTAmount.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between border-b pb-2">
          <p className="w-[60%]">Shipping Charge:</p>
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-primary-yellow to-primary-red">
            € {shippingCharge.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between border-b pb-2">
          <p className="w-[60%]">Total Price:</p>
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-primary-yellow to-primary-red">
            € {(totalProductsCost + GSTAmount + shippingCharge).toFixed(2)}
          </p>
        </div>
      </div>
      <p className="text-base font-medium mb-2">
        Subtotal({totalItems} items): €{" "}
        {(totalProductsCost + GSTAmount + shippingCharge).toFixed(2)}
      </p>
    </>
  );
};

export default CartStats;
