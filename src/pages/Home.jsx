import React, { useEffect, useState } from "react";
import AppLayout from "../layout/AppLayout";
import useFetchProducts from "../hooks/useFetchProducts";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import BannerProduct from "../components/BannerProduct";

const Home = () => {
  const { loading, fetchProducts } = useFetchProducts();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getAllProducts() {
      const retrievedProducts = await fetchProducts();
      setProducts(retrievedProducts);
    }

    getAllProducts();
  }, []);
  return (
    <AppLayout>
      <div className="min-h-[calc(100vh-256px)] max-w-[90%] mx-auto bg-[#f7f7f7]">
        <BannerProduct />
        <div className="mt-12 mb-8 text-center text-2xl uppercase font-bold tracking-wider text-slate-700">
          Our Latest Products
        </div>
        {loading ? (
          <Loader text="products" />
        ) : (
          <div className="flex flex-wrap gap-9 justify-center items-center mb-12">
            {products.length !== 0 &&
              products.map((product, idx) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Home;
