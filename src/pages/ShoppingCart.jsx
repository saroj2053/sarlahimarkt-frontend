import AppLayout from "../layout/AppLayout";
import CartItemsTable from "../components/CartItemsTable";
import CartStats from "../components/CartStats";
import { useSelector } from "react-redux";
import CheckoutForm from "../components/CheckoutForm";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <AppLayout>
      <div className="flex flex-col-reverse lg:flex-row gap-5 justify-between items-start max-w-[90%] mx-auto my-20">
        <div className="flex flex-col w-[100%] lg:w-[70%] bg-white shadow-sm p-6">
          <h2 className="text-2xl font-medium text-slate-800 mb-4">
            Shopping Basket
          </h2>
          <CartItemsTable items={cart} />
        </div>

        <div className="bg-white w-[100%]lg:w-[28%] border-none shadow-sm text-sm p-6 h-fit">
          <CartStats />
          <CheckoutForm cart={cart} />
        </div>
      </div>
    </AppLayout>
  );
};

export default ShoppingCart;
