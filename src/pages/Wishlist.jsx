import React, { useEffect, useState } from "react";
import AppLayout from "../layout/AppLayout";
import useFetchWishlistItems from "../hooks/useFetchWishlistItems";
import WishlistCard from "../components/WishlistCard";
import Loader from "../components/Loader";

const Wishlist = () => {
  const [wishlistedProducts, setWishlistedProducts] = useState([]);
  const { loading, fetchWishlists } = useFetchWishlistItems();

  const getWishlistProducts = async () => {
    const response = await fetchWishlists();
    setWishlistedProducts(response);
  };
  useEffect(() => {
    getWishlistProducts();
  }, []);

  return (
    <AppLayout>
      <div className="max-w-[90%] mx-auto mt-40 min-h-[calc(100vh-328px)]">
        <h2 className="text-center text-3xl underline font-bold mb-8 text-slate-700">
          My Wishlist Items
        </h2>
        {loading ? (
          <Loader text="wishlisted products" />
        ) : (
          <div className="flex flex-wrap gap-9 justify-center items-center mb-12">
            {wishlistedProducts?.length !== 0 &&
              wishlistedProducts?.map((wishlistedProduct, idx) => (
                <WishlistCard
                  key={wishlistedProduct._id}
                  product={wishlistedProduct}
                  refreshWishlist={getWishlistProducts}
                />
              ))}
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Wishlist;
