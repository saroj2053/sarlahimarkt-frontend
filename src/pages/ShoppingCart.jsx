import AppLayout from "../layout/AppLayout";
import CartItemsTable from "../components/CartItemsTable";
import CartStats from "../components/CartStats";
import { PiCheckCircleFill } from "react-icons/pi";

const ShoppingCart = () => {
  return (
    <AppLayout>
      <div className="flex gap-5 justify-between items-start max-w-[90%] mx-auto my-20">
        <div className="flex flex-col w-[70%] bg-white shadow-sm p-6">
          <h2 className="text-2xl font-medium text-slate-800 mb-4">
            Shopping Basket
          </h2>
          <CartItemsTable />
        </div>
        <div className="bg-white w-[28%] border-none shadow-sm text-sm p-6 h-fit">
          <p className="text-green-600 mb-6  flex items-center gap-1">
            <PiCheckCircleFill color="green" size={20} />
            Your order qualifies for FREE Delivery
          </p>
          <CartStats />

          <button className="bg-orange-200 px-6 py-2 text-orange-600 w-full rounded-full mt-4 hover:bg-orange-600 hover:text-white transition-all duration-500 ease-in-out">
            Proceed to Checkout
          </button>
        </div>
      </div>
      {/* <div className="max-w-[90%] mx-auto mt-24 min-h-[calc(100vh-328px)]">
        <h2 className="text-xl uppercase font-semibold bg-clip-text text-transparent bg-gradient-to-t from-primary-red to-primary-yellow">
          Shopping Cart
        </h2>
        <div className="flex flex-col justify-between items-start gap-10 my-4">
          <div className="w-[100%] flex flex-col justify-center items-center">
            <CartItemsTable />
          </div>
          <div className="w-[100%]">
            <CartStats />
          </div>
        </div>
      </div> */}
    </AppLayout>
  );
};

export default ShoppingCart;
