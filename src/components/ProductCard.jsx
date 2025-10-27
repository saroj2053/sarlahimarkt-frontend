import {
  calculateDiscountPercent,
  getCharactersToLength,
} from "../helpers/helperFunctions";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const discountPercentage = calculateDiscountPercent(
    product.price,
    product.sellingPrice
  );

  const handleProductClick = async (id) => {
    navigate(`/product/${id}`);
  };

  const handleAdd = (product) => {
    dispatch(
      addToCart({
        _id: product._id,
        productName: product.productName,
        price: product.price,
        sellingPrice: product.sellingPrice,
        stockCount: product.stock,
        productImage: product.productImages[0],
      })
    );
  };
  return (
    <div className="xl:w-[22%] md:w-[45%] lg:w-[28%] sm:w-[98%] min-h-[400px] bg-white flex flex-col justify-center  rounded-md shadow-md p-5 relative font-inter">
      {/* <span className="absolute top-4 right-4 text-slate-400 text-2xl cursor-pointer">
        <FaHeart />
      </span> */}

      {discountPercentage > 0 ? (
        <span className="absolute top-4 left-0 bg-primary-yellow text-[#faf9f9f] px-4 py-0.5 font-medium text-sm clip-custom">
          {discountPercentage}%
        </span>
      ) : (
        ""
      )}

      <div className="w-full flex justify-center">
        <img
          className="w-32 h-32 object-contain mb-3 transition-all duration-300 ease-in-out hover:scale-125"
          src={product.productImages[0]}
          alt=""
        />
      </div>
      <div>
        <p className=" text-primary-yellow font-medium my-3">{product.brand}</p>
        <h2
          className="text-slate-800 text-sm font-medium hover:text-slate-600 hover:underline cursor-pointer"
          onClick={() => handleProductClick(product._id)}
        >
          {getCharactersToLength(product.productName, 60)}
        </h2>
      </div>
      <div className="mt-2 flex gap-4 items-center">
        {discountPercentage > 0 ? (
          <p className="text-slate-600 text-sm">
            MRP: <span className="line-through">€ {product.price}</span>
          </p>
        ) : (
          <p className="text-slate-600 text-sm">
            MRP: <span>€ {product.price}</span>
          </p>
        )}

        {discountPercentage > 0 && (
          <p className="text-lg font-medium text-primary-red">
            € {product.sellingPrice}
          </p>
        )}
      </div>
      <p
        className="absolute bottom-4 px-4 py-1 border-none  text-orange-600 bg-orange-200 cursor-pointer uppercase font-normal transition-all duration-500 ease-in-out hover:bg-orange-600 hover:text-white rounded-sm"
        onClick={() => handleAdd(product)}
      >
        Add to Cart
      </p>
    </div>
  );
};

export default ProductCard;
