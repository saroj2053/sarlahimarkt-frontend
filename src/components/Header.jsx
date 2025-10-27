import { FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import { PiUserCirclePlusBold } from "react-icons/pi";

import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import companyLogo from "../assets/company-logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import useLogout from "../hooks/useLogout";

import SearchContainer from "./SearchContainer";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginSelected = location.pathname.startsWith("/login");
  const isSignupSelected = location.pathname.startsWith("/signup");
  const isWishlistSelected = location.pathname.startsWith("/wishlist");

  const authUser = useSelector(selectUser);

  const items = useSelector((state) => state.cart);

  const { logout } = useLogout();

  const logoutHandler = async () => {
    await logout();
    navigate("/");
  };

  return (
    <>
      <div className="fixed top-0 w-full z-50">
        <div className="shadow-sm bg-slate-800">
          <div className="max-w-[90%] mx-auto flex justify-between items-center h-16">
            <div
              className="flex gap-1 items-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                className="w-10 h-10 cursor-pointer"
                src={companyLogo}
                alt="sarlahimarkt company"
              />
              <h2 className="text-2xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-yellow to-primary-red">
                SarlahiMarkt
              </h2>
            </div>
            <SearchContainer />
            <div>
              <ul className="flex gap-6 items-center">
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
                  <HiOutlineShoppingBag size={30} />
                  <p className="absolute bg-orange-200 text-orange-600 w-5 h-5 flex justify-center items-center text-xs rounded-full -top-1.5 -right-1.5">
                    <span>{items?.length}</span>
                  </p>
                </li>

                {authUser ? (
                  <>
                    <div
                      className="flex flex-col items-center justify-center font-medium text-slate-100 cursor-pointer hover:text-slate-400"
                      onClick={() => navigate("/wishlist")}
                    >
                      <span
                        className={`${
                          isWishlistSelected
                            ? "text-orange-300"
                            : " text-slate-50"
                        }`}
                      >
                        Wishlist
                      </span>
                    </div>
                    <li
                      className="w-12 h-12 cursor-pointer text-white flex"
                      onClick={() => navigate("/user-profile")}
                    >
                      <img
                        className="w-full h-full rounded-full object-cover object-center"
                        src={authUser?.user.avatar}
                        alt="avatar"
                      />
                    </li>
                    <li
                      className="text-slate-50 flex items-center gap-1 cursor-pointer hover:text-slate-400"
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
                      className={`text-lg  px-4 cursor-pointer flex gap-1 items-center ${
                        isLoginSelected ? "text-orange-300" : " text-slate-50"
                      }`}
                      onClick={() => navigate("/login")}
                    >
                      <span>
                        <FaSignInAlt />
                      </span>
                      Login
                    </li>
                    <li
                      className={`text-lg  cursor-pointer flex gap-1 items-center ${
                        isSignupSelected ? "text-orange-300" : "text-slate-50"
                      }`}
                      onClick={() => navigate("/signup")}
                    >
                      <span>
                        <PiUserCirclePlusBold />
                      </span>
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
