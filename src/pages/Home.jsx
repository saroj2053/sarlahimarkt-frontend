import React, { useEffect, useState } from "react";
import AppLayout from "../layout/AppLayout";
import useFetchProducts from "../hooks/useFetchProducts";
import ProductCard from "../components/ProductCard";
import BannerProduct from "../components/BannerProduct";

const Home = () => {
  const { loading, fetchProducts } = useFetchProducts();

  const [products, setProducts] = useState([]);

  const loadingTest = true;

  const loadingProductsList = new Array(8).fill(null);

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
        <div className="flex flex-wrap gap-9 justify-center items-center mb-12">
          {loading ? (
            loadingProductsList.map((product, index) => {
              return (
                <div className="xl:w-[22%] md:w-[45%] lg:w-[28%] sm:w-[98%] min-h-[450px] flex flex-col justify-center  rounded-md shadow-md p-5 bg-white relative ">
                  <div className="absolute top-4 left-0 bg-slate-200 w-12 h-6 animate-pulse clip-custom"></div>
                  <div className="bg-white h-48 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center">
                    <div className="bg-slate-200 w-32 h-32 animate-pulse"></div>
                  </div>
                  <div className="p-4 flex flex-col gap-3">
                    <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black p-1 py-2 animate-pulse rounded-full bg-slate-200 w-[30%] mb-2"></h2>
                    <p className="capitalize text-slate-500 p-1 animate-pulse rounded-full bg-slate-200  py-2"></p>
                    <p className="capitalize text-slate-500 p-1 animate-pulse rounded-full bg-slate-200  py-2"></p>
                    <p className="capitalize text-slate-500 p-1 animate-pulse rounded-full bg-slate-200  py-2"></p>
                    <div className="flex gap-20 my-2">
                      <p className="text-red-600 font-medium p-1 animate-pulse rounded-full bg-slate-200 w-full  py-2"></p>
                      <p className="text-slate-500 line-through p-1 animate-pulse rounded-full bg-slate-200 w-full  py-2"></p>
                    </div>
                    <button className="text-sm w-[60%] text-white px-4  border-2 border-slate-200 bg-slate-200  py-4 animate-pulse"></button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex flex-wrap gap-9 justify-center items-center mb-12">
              {products.length !== 0 &&
                products.map((product, idx) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default Home;
