import AppLayout from "../layout/AppLayout";
import CartItemsTable from "../components/CartItemsTable";
import CartStats from "../components/CartStats";

const ShoppingCart = () => {
  return (
    <AppLayout>
      <div className="flex flex-col-reverse lg:flex-row gap-5 justify-between items-start max-w-[90%] mx-auto my-20">
        <div className="flex flex-col w-[100%] lg:w-[70%] bg-white shadow-sm p-6">
          <h2 className="text-2xl font-medium text-slate-800 mb-4">
            Shopping Basket
          </h2>
          <CartItemsTable />
        </div>
        <div className="bg-white w-[100%]lg:w-[28%] border-none shadow-sm text-sm p-6 h-fit">
          <CartStats />

          <button className="bg-orange-200 px-6 py-2 text-orange-600 w-full rounded-full mt-4 hover:bg-orange-600 hover:text-white transition-all duration-500 ease-in-out">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </AppLayout>
  );
};

export default ShoppingCart;
