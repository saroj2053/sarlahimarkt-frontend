import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("userInfo")) || null,
};

export const userSlice = createSlice({
  name: "user",

  initialState,

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state.user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
