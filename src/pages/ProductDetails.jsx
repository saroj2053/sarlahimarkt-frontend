import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchProductDetails from "../hooks/useFetchProductDetails";
import AppLayout from "../layout/AppLayout";
import {
  calculateDiscountPercent,
  getArrayFromDescription,
} from "../helpers/helperFunctions";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

import CategoryWiseProductDisplay from "../components/CategoryWiseProductDisplay";
import { addToCart } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import useAddToWishlist from "../hooks/useAddToWishlist";
import { selectUser } from "../features/user/userSlice";

const ProductDetails = () => {
  const { productId } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  console.log(user);

  const [product, setProduct] = useState(null);
  const productImageListSkeleton = new Array(4).fill(null);
  const [activeProductImage, setActiveProductImage] = useState("");
  const [cartCount, setCartCount] = useState(1);

  const { loading, fetchProductDetails } = useFetchProductDetails();
  const { addToWishlist } = useAddToWishlist();

  useEffect(() => {
    async function getProductDetails() {
      const response = await fetchProductDetails(productId);
      setProduct(response?.data?.product);
      setActiveProductImage(response?.data?.product?.productImages[0]);
    }

    getProductDetails();
  }, [productId]);

  const handleMouseEnterProduct = (imageURL) => {
    setActiveProductImage(imageURL);
  };

  const incQuantity = () => {
    if (cartCount < product?.stock) setCartCount((prevCount) => prevCount + 1);
    if (cartCount === product?.stock) {
      toast.error(`Only ${product?.stock} products are available`);
    }
  };

  const decQuantity = () => {
    if (cartCount > 1) {
      setCartCount((prevCount) => prevCount - 1);
    }
  };

  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        _id: product._id,
        productName: product.productName,
        stockCount: product.stock,
        price: product.price,
        sellingPrice: product.sellingPrice,
        productImage: product.productImages[0],
        qty: cartCount,
      })
    );
    navigate("/cart");
  };

  const handleAddToWishlist = async (id) => {
    if (!user) {
      return toast.error("You need to login first");
    }
    const success = await addToWishlist(id);
    if (success) {
      navigate("/wishlist");
    }
  };

  return (
    <AppLayout>
      <div className="min-h-[calc(100vh-240px)] max-w-[90%] mx-auto bg-[#f7f7f7] ">
        {loading ? (
          <Loader text="Product Details" />
        ) : (
          <div className="flex gap-8 items-start mt-26 pt-4 pb-8 border-b border-slate-300">
            <div>
              <div className="h-[500px] flex flex-col lg:flex-row-reverse gap-4">
                <div className="h-[500px] w-[500px]  bg-slate-200 relative p-2">
                  <img
                    src={activeProductImage}
                    className="h-full w-full object-scale-down mix-blend-multiply"
                  />
                </div>
                <div className="h-full">
                  {loading ? (
                    <div className="flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full">
                      {productImageListSkeleton.map((el, index) => {
                        return (
                          <div
                            className="h-20 w-20 bg-slate-200 rounded animate-pulse"
                            key={"loadingImage" + index}
                          ></div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full">
                      {product?.productImages?.map((imgURL, index) => {
                        return (
                          <div
                            className="h-20 w-20 bg-slate-200 rounded p-1"
                            key={imgURL + index}
                          >
                            <img
                              src={imgURL}
                              className="w-full h-full object-scale-down mix-blend-multiply cursor-pointer"
                              onMouseEnter={() =>
                                handleMouseEnterProduct(imgURL)
                              }
                              onClick={() => handleMouseEnterProduct(imgURL)}
                            />
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {loading === false && (
              <div>
                {product && (
                  <span className="bg-orange-300 text-orange-600 px-4 py-1 rounded-sm text-white text-sm ">
                    {product?.brand}
                  </span>
                )}
                <h2 className="text-lg font-semibold text-justify mt-2">
                  {product?.productName}
                </h2>
                <span className="text-slate-500 text-xs uppercase block mt-2">
                  {product?.category}
                </span>

                <div className="my-4 flex items-end gap-4">
                  <p className="text-lg text-primary-red">
                    -
                    {calculateDiscountPercent(
                      product?.price,
                      product?.sellingPrice
                    )}
                    %
                  </p>
                  <p className="text-2xl font-semibold text-slate-800">
                    €{product?.sellingPrice}
                  </p>
                </div>
                <p className="text-sm text-slate-700 my-4">
                  RRP: <span className="line-through">€{product?.price}</span>
                </p>

                <p className="text-slate-700 font-medium my-3">
                  Status :
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-yellow to-primary-red font-normal border border-slate-200 px-4 py-0.5 ml-2 rounded-full">
                    In Stock
                  </span>
                </p>

                <div className="flex gap-8 items-center my-2">
                  <h2 className="text-slate-700 font-medium">
                    Select Quantity
                  </h2>
                  <div className="my-4 flex items-center">
                    <button
                      className="border-2 border-primary-yellow px-4 rounded-l-full py-0.5 text-xl font-medium text-slate-700"
                      onClick={decQuantity}
                    >
                      -
                    </button>

                    <p className="w-[80px] text-center text-slate-700 font-medium text-lg py-0.5 outline-none border-2 border-x-0 border-y-primary-yellow">
                      {cartCount}
                    </p>
                    <button
                      className="border-2 border-primary-yellow px-4 py-0.5 rounded-r-full text-xl font-medium text-slate-700"
                      onClick={incQuantity}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex gap-8 mb-4">
                  <button
                    className="border-2 border-primary-yellow bg-yellow-100 px-4 py-1 rounded-full text-black font-medium hover:bg-primary-yellow transition-all duration-500 ease-in-out"
                    onClick={() => handleAddToWishlist(product._id)}
                  >
                    Add to Wishlist
                  </button>
                  <button
                    className="bg-gradient-to-r from-primary-yellow to-primary-red text-white font-normal px-4 py-1 rounded-full"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
                <hr />
                <ul
                  role="list"
                  className="list-disc selection:bg-primary-yellow selection:text-fuchsia-900"
                >
                  {product?.description &&
                    getArrayFromDescription(product?.description).map(
                      (spec, idx) => (
                        <li
                          key={idx}
                          className="list-item text-slate-700 font-normal text-sm text-justify mt-4 marker:text-primary-yellow "
                        >
                          {spec}
                        </li>
                      )
                    )}
                </ul>
              </div>
            )}
          </div>
        )}

        {product?.category && (
          <CategoryWiseProductDisplay
            product={product}
            heading={"Related Products"}
          />
        )}
      </div>
    </AppLayout>
  );
};

export default ProductDetails;
