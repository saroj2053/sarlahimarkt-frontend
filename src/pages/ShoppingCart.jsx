import React from "react";
import AppLayout from "../layout/AppLayout";
import CartItemsTable from "../components/CartItemsTable";
import CartStats from "../components/CartStats";

const ShoppingCart = () => {
  return (
    <AppLayout>
      <div className="max-w-[90%] mx-auto mt-32 min-h-[calc(100vh-328px)]">
        <h2 className="text-2xl uppercase font-bold bg-clip-text text-transparent bg-gradient-to-t from-primary-red to-primary-yellow">
          Shopping Cart
        </h2>
        <div className="flex justify-between items-start my-4">
          <CartItemsTable />
          <div className="w-[25%]">
            <CartStats />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ShoppingCart;
