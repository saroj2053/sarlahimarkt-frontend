import { useSelector } from "react-redux";
import {
  selectGSTAmount,
  selectTotalAmount,
  selectTotalItemsInCart,
} from "../features/cart/cartSlice";
import { getCalculatedShippingCharge } from "../helpers/helperFunctions";
import { PiCheckCircleFill } from "react-icons/pi";

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
        {totalProductsCost + GSTAmount >= 50 ? (
          <p className="text-green-600 mb-6 flex items-center gap-1 text-xs">
            <PiCheckCircleFill color="green" size={20} />
            Your order qualifies for FREE Delivery
          </p>
        ) : (
          <p className="text-red-600 mb-6 flex items-center gap-1 text-xs">
            Add more items to qualify for FREE Delivery
          </p>
        )}
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
