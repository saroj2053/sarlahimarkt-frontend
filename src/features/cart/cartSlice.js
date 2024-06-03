import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cartItems");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return [];
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cartItems", serializedState);
  } catch (error) {
    console.log(error);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadState(),
  reducers: {
    addToCart(state, action) {
      const checkIfItemExists = state.find(
        (item) => item._id === action.payload._id
      );

      if (!checkIfItemExists) {
        state.push({ ...action.payload, qty: action.payload.qty || 1 });
        saveState(state);
        toast.success("Item added to cart");
      } else {
        checkIfItemExists.qty += action.payload.qty || 1;
        saveState(state);
        toast.success("Item added to Cart");
        // toast.error("Item already exists in the cart");
      }
    },
    removeFromCart(state, action) {
      const newState = state.filter((item) => item._id !== action.payload);
      saveState(newState);
      return newState;
    },
    updateItemQty(state, action) {
      const { _id, qty } = action.payload;
      const item = state.find((item) => item._id === _id);
      if (item) {
        item.qty = qty;
        saveState(state);
      }
    },
  },
});

export const selectTotalAmount = (state) => {
  return state.cart.reduce((total, item) => {
    return total + item.qty * item.sellingPrice;
  }, 0);
};

export const selectGSTAmount = (state) => {
  const grossAmount = selectTotalAmount(state);
  return (18 / 100) * grossAmount;
};

export const selectTotalItemsInCart = (state) => {
  return state.cart.reduce((itemsCount, item) => {
    return itemsCount + item.qty;
  }, 0);
};

export const { addToCart, removeFromCart, updateItemQty } = cartSlice.actions;
export default cartSlice.reducer;
