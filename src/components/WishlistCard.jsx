import React from "react";
import { getCharactersToLength } from "../helpers/helperFunctions";
import { useNavigate } from "react-router-dom";
import { MdDelete, MdShoppingBasket } from "react-icons/md";
import useRemoveFromWishlist from "../hooks/useRemoveFromWishlist";

const WishlistCard = ({ product, refreshWishlist }) => {
  const navigate = useNavigate();

  const { loading, removeFromWishlist } = useRemoveFromWishlist();

  const handleProductClick = async (id) => {
    navigate(`/product/${id}`);
  };

  const handleWishlistDeletion = async (prodId) => {
    await removeFromWishlist(prodId);
    refreshWishlist();
  };

  return (
    <>
      <div className="xl:w-[30%] lg:w-[45%] md:w-[45%]  sm:w-[98%] min-h-[350px] bg-white rounded-md shadow-md p-8">
        <div className="flex gap-8 items-center">
          <div className="flex flex-col items-center">
            <img
              className="w-32 h-32 object-contain mb-4 transition-all duration-300 ease-in-out hover:scale-110"
              src={product.productImages[0]}
              alt=""
            />
            <p className=" text-primary-yellow text-lg font-semibold">
              {product.brand}
            </p>
          </div>
          <div className="flex flex-col">
            <h2
              className="text-slate-700 cursor-pointer font-bold text-md hover:underline"
              onClick={() => handleProductClick(product._id)}
            >
              {getCharactersToLength(product.productName, 50)}
            </h2>
            <div className="mt-4 flex gap-8 items-center">
              <p className="text-slate-700 font-bold">
                RRP: <span className="line-through">€ {product.price}</span>
              </p>
              <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-yellow to-primary-red">
                € {product.sellingPrice}
              </p>
            </div>
          </div>
        </div>
        <div className=" mt-6 flex justify-between items-center">
          <button className="text-xl rounded-full px-4 py-4 bg-gradient-to-r from-primary-yellow to-primary-red text-white flex gap-2 items-center">
            <MdShoppingBasket />
          </button>

          <button
            className="text-xl rounded-full px-4 py-4 bg-gradient-to-r from-primary-yellow to-primary-red text-white flex gap-2 items-center"
            onClick={() => handleWishlistDeletion(product._id)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </>
  );
};

export default WishlistCard;
