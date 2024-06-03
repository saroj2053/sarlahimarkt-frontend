import React, { useState } from "react";
import { FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import companyLogo from "../assets/company-logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import useLogout from "../hooks/useLogout";
import { FaFacebook, FaX, FaYoutube, FaHeart } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";

import SearchContainer from "./SearchContainer";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginSelected = location.pathname.startsWith("/login");

  const authUser = useSelector(selectUser);

  const items = useSelector((state) => state.cart);

  const { loading, logout } = useLogout();

  const logoutHandler = async () => {
    await logout();
    navigate("/");
  };

  return (
    <>
      {/* headline */}
      <div className="fixed top-0 w-full z-50">
        <div className="w-full bg-slate-700 h-8">
          <div className="container mx-auto h-full">
            <div className="h-full flex justify-between items-center">
              <p className="text-sm font-semibold text-slate-300">
                +4915752491735/info@sarlahimarkt.org
              </p>
              <div className="flex gap-4 text-slate-300">
                <FaYoutube />
                <FaX />
                <FaFacebook />
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-sm bg-slate-800">
          <div className="max-w-[90%] mx-auto flex justify-between items-center h-20">
            <div
              className="flex gap-1 items-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                className="w-14 h-14 cursor-pointer"
                src={companyLogo}
                alt="sarlahimarkt company"
              />
              <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-yellow to-primary-red">
                SarlahiMarkt
              </h2>
            </div>
            <SearchContainer />
            <div>
              <ul className="flex gap-8 items-center">
                {/* <div className="flex flex-col items-center justify-center text-slate-100 hover:text-slate-400 text-base font-semibold cursor-pointer">
                  <li className="text-xl">
                    <BiSolidCategoryAlt />
                  </li>
                  <p>Category</p>
                </div> */}

                {authUser?.user.role === "admin" && (
                  <div
                    className="flex flex-col items-center justify-center text-base font-semibold text-slate-100 cursor-pointer hover:text-slate-400"
                    onClick={() => navigate("/admin-dashboard")}
                  >
                    <li className="text-xl">
                      <MdDashboard />
                    </li>
                    <p>Dashboard</p>
                  </div>
                )}
                <li
                  className="text-4xl font-semibold text-slate-100 cursor-pointer relative"
                  onClick={() => navigate("/cart")}
                >
                  <HiOutlineShoppingBag />
                  <p className="absolute bg-primary-red w-6 h-6 flex justify-center items-center  px-0.5 text-sm rounded-full -top-1.5 -right-1.5">
                    <span>{items?.length}</span>
                  </p>
                </li>

                {authUser ? (
                  <>
                    <div
                      className="flex flex-col items-center justify-center font-semibold text-slate-100 cursor-pointer hover:text-slate-400"
                      onClick={() => navigate("/wishlist")}
                    >
                      <li className="text-xl">
                        <FaHeart />
                      </li>
                      <p>WishList</p>
                    </div>
                    <li
                      className="w-12 h-12 cursor-pointer text-white flex"
                      onClick={() => navigate("/user-profile")}
                    >
                      <img
                        className="w-full h-full rounded-full object-cover"
                        src={authUser?.user.avatar}
                        alt="avatar"
                      />
                    </li>
                    <li
                      className="text-lg font-semibold text-slate-50 flex items-center gap-1 cursor-pointer hover:text-slate-400"
                      onClick={logoutHandler}
                    >
                      <span>
                        <FaSignOutAlt />
                      </span>
                      Logout
                    </li>
                  </>
                ) : (
                  <>
                    <li
                      className={`text-lg  px-4 py-1 cursor-pointer flex gap-1 items-center ${
                        isLoginSelected
                          ? "text-slate-300"
                          : "font-semibold text-slate-50"
                      }`}
                      onClick={() => navigate("/login")}
                    >
                      <span>
                        <FaSignInAlt />
                      </span>
                      Login
                    </li>
                    <li
                      className="text-lg font-semibold bg-gradient-to-l from-primary-red to-primary-yellow text-white rounded-lg px-4 py-1 cursor-pointer"
                      onClick={() => navigate("/signup")}
                    >
                      Sign Up
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
