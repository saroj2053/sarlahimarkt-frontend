import { useEffect, useState } from "react";
import useFetchProductByCategory from "../hooks/useFetchProductByCategory";
import Loader from "./Loader";
import { NavLink } from "react-router-dom";
import {
  calculateDiscountPercent,
  scrollTop,
} from "../helpers/helperFunctions";

const CategoryWiseProductDisplay = ({ product, heading }) => {
  const [categoryProducts, setCategoryProducts] = useState([]);

  const { loading, fetchProductsByCategory } = useFetchProductByCategory();

  useEffect(() => {
    async function getProductsByCategory() {
      const retrievedCategoryWiseProducts = await fetchProductsByCategory(
        product?.category
      );

      const relatedProducts = retrievedCategoryWiseProducts.filter(
        (item) => item._id !== product._id
      );
      setCategoryProducts(relatedProducts);
    }

    getProductsByCategory();
  }, []);
  return (
    <div className="my-8">
      <h2 className="text-xl font-medium uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-b from-primary-yellow to-primary-red">
        {heading}
      </h2>
      {loading ? (
        <Loader text="Similar Products" />
      ) : (
        <div>
          {categoryProducts.length === 0 ? (
            <div className="flex justify-center items-center bg-slate-200 my-4 py-8 text-slate-700 uppercase font-medium tracking-widest">
              No related products found
            </div>
          ) : (
            <div className="flex gap-8 flex-wrap my-4">
              {categoryProducts.map((product, index) => (
                <NavLink
                  key={product._id + index}
                  to={"/product/" + product?._id}
                  className="w-[23%] mx-auto bg-white rounded-sm shadow "
                  onClick={scrollTop}
                >
                  <div className="bg-slate-200 h-48 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center relative">
                    <img
                      src={product.productImages[0]}
                      className="object-scale-down h-full hover:scale-105 transition-all duration-300 ease-in-out mix-blend-multiply"
                    />
                    <span className="absolute top-4 left-0 bg-primary-yellow text-[#faf9f9f] px-4 py-0.5 font-bold text-md clip-custom">
                      {calculateDiscountPercent(
                        product?.price,
                        product?.sellingPrice
                      )}
                      %
                    </span>
                  </div>
                  <div className="p-4 grid gap-3">
                    <h2 className="font-medium md:text-base text-ellipsis line-clamp-1 text-slate-800">
                      {product?.productName}
                    </h2>
                    <p className="uppercase text-slate-500 text-xs">
                      {product?.category}
                    </p>
                    <div className="flex flex-row items-center gap-3">
                      <p className="text-primary-red font-medium text-lg">
                        € {product?.sellingPrice}
                      </p>
                      <p className="text-slate-500 line-through text-sm">
                        RRP: € {product?.price}
                      </p>
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryWiseProductDisplay;
