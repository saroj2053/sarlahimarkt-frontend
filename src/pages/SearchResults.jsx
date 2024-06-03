import React, { useEffect, useState } from "react";
import AppLayout from "../layout/AppLayout";
import { useParams } from "react-router-dom";
import useProductSearch from "../hooks/useProductSearch";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";

const SearchResults = () => {
  const params = useParams();
  const [searchProducts, setSearchProducts] = useState([]);

  const { loading, searchProduct } = useProductSearch();

  useEffect(() => {
    async function fetchSearchedProducts() {
      try {
        const result = await searchProduct(params.searchKeyword);
        setSearchProducts(result);
      } catch (error) {
        console.log(`Error fetching ${params.searchKeyword} products`);
      }
    }

    fetchSearchedProducts();
  }, [params.searchKeyword]);

  console.log(searchProducts);
  return (
    <AppLayout>
      <div className="max-w-[90%] mx-auto mt-32 min-h-[calc(100vh-300px)]">
        <h2 className="text-2xl font-bold text-slate-800">
          Search Results for:{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-yellow to-primary-red">
            {params?.searchKeyword}
          </span>
        </h2>
        {loading ? (
          <Loader text={`${params?.searchKeyword} products`} />
        ) : (
          <div className="flex flex-wrap gap-9 justify-center items-center my-12">
            {searchProducts.map((product, idx) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default SearchResults;
