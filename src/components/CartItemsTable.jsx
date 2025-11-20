import { useDispatch } from "react-redux";
import { getCharactersToLength } from "../helpers/helperFunctions";
import { FaTrash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { removeFromCart, updateItemQty } from "../features/cart/cartSlice";

const CartItemsTable = ({ items }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const incQty = (item) => {
    dispatch(updateItemQty({ _id: item._id, qty: item.qty + 1 }));
  };

  const decQty = (item) => {
    if (item.qty > 1) {
      dispatch(updateItemQty({ _id: item._id, qty: item.qty - 1 }));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item._id));
  };

  //   console.log(Array.isArray(items));

  return (
    <>
      {items.length === 0 && (
        <p className="text-sm">
          Your cart is empty. Continue Shopping on the{" "}
          <a
            className="hover:underline text-orange-500 transition-all duration-300 ease-in-out"
            href="/"
          >
            SarlahiMarkt.app
          </a>
        </p>
      )}
      {items.map((item, index) => (
        <div
          key={item.productName + index}
          className={`flex justify-between items-start py-5 ${
            index === items.length - 1 ? "" : "border-b"
          }`}
        >
          <div className="flex gap-4 w-[85%]">
            <div className="flex">
              <div className="w-32 h-32 mx-auto">
                <img
                  className="w-full h-full object-contain cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
                  src={item.productImage}
                  alt=""
                />
              </div>
            </div>
            <div>
              <h2
                className="text-slate-700 font-medium text-sm cursor-pointer hover:underline"
                onClick={() => navigate(`/product/${item._id}`)}
              >
                {getCharactersToLength(item.productName, 150)}
              </h2>
              <p
                className={`text-xs my-2 ${
                  item.stockCount > 0 ? "text-green-600" : "text-orange-600"
                }`}
              >
                {item.stockCount > 0 ? "In Stock" : "Out of Stock"}
              </p>

              <div className="flex gap-4 items-center my-4">
                <div className="flex gap-4 items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-primary-yellow to-primary-red text-lg font-medium border-2 border-slate-500  py-1 px-6  rounded-full">
                  <button onClick={() => decQty(item)}>-</button>
                  <p>{item.qty}</p>
                  <button onClick={() => incQty(item)}>+</button>
                </div>
                <button
                  className="bg-red-500 text-white w-8 h-8 rounded-full "
                  onClick={() => handleRemove(item)}
                >
                  <span className="text-sm font-bold flex justify-center items-center">
                    <FaTrash />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="py-2 px-4 text-slate-800 font-medium">
              € {item.sellingPrice}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItemsTable;
