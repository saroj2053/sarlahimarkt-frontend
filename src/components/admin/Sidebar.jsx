import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const authUser = useSelector(selectUser);
  const [showProductOptions, setShowProductOptions] = useState(true);
  const [showUserOptions, setShowUserOptions] = useState(true);
  const [showOrderOptions, setShowOrderOptions] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleProductOptionsVisibility = () => {
    setShowProductOptions((prevState) => !prevState);
  };

  const toggleUserOptionsVisibility = () => {
    setShowUserOptions((prevState) => !prevState);
  };

  const toggleOrderOptionsVisibility = () => {
    setShowOrderOptions((prevState) => !prevState);
  };

  return (
    <div className="h-full fixed w-72 bg-slate-800 px-6 py-2 text-white">
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-16 h-16 object-cover rounded-full"
          src={authUser?.user.avatar}
          alt="profile avatar"
        />
        <p className="font-medium mt-2">{authUser?.user.email}</p>

        <p className="text-sm uppercase font-semibold bg-green-200 text-green-800 px-4 py-1 rounded-md my-2">
          role: {authUser?.user.role}
        </p>
      </div>
      <ul className="flex flex-col gap-4 font-medium mt-8">
        <li
          className="p-2 uppercase cursor-pointer flex justify-between items-center hover:bg-slate-300 hover:text-slate-800 transition-all duration-500"
          onClick={toggleProductOptionsVisibility}
        >
          Manage Products
          {showProductOptions ? <FaChevronUp /> : <FaChevronDown />}
        </li>

        {showProductOptions && (
          <ul className="flex flex-col gap-4 font-medium transition-all duration-700 ease-in-out">
            <li
              className="px-2 cursor-pointer transition-all duration-500 hover:translate-x-3 ease-in-out"
              onClick={() => navigate("/admin-dashboard/products")}
            >
              <span
                className={` ${
                  location.pathname === "/admin-dashboard/products"
                    ? "bg-orange-200 text-orange-600 px-2 py-1 rounded-md"
                    : "text-slate-50"
                }`}
              >
                Show All Products
              </span>
            </li>
            <li
              className="px-2 cursor-pointer transition-all duration-500 hover:translate-x-3 ease-in-out"
              onClick={() => navigate("/admin-dashboard/add-new-product")}
            >
              <span
                className={` ${
                  location.pathname === "/admin-dashboard/add-new-product"
                    ? "bg-orange-200 text-orange-600 px-2 py-1 rounded-md"
                    : "text-slate-50"
                }`}
              >
                Add new Product
              </span>
            </li>
          </ul>
        )}

        <li
          className="p-2 uppercase cursor-pointer flex justify-between items-center transition-all duration-500"
          onClick={toggleUserOptionsVisibility}
        >
          Manage Users {showUserOptions ? <FaChevronUp /> : <FaChevronDown />}
        </li>

        {showUserOptions && (
          <>
            <li
              className="px-2 cursor-pointer transition-all duration-500 hover:translate-x-3 ease-in-out"
              onClick={() => navigate("/admin-dashboard/users")}
            >
              <span
                className={` ${
                  location.pathname === "/admin-dashboard/users"
                    ? "bg-orange-200 text-orange-600 px-2 py-1 rounded-md"
                    : "text-slate-50"
                }`}
              >
                Show All Users
              </span>
            </li>
          </>
        )}

        <li
          className="p-2 uppercase cursor-pointer flex justify-between items-center transition-all duration-500"
          onClick={toggleOrderOptionsVisibility}
        >
          Manage Orders {showOrderOptions ? <FaChevronUp /> : <FaChevronDown />}
        </li>
        {showOrderOptions && (
          <>
            <li className="px-2 cursor-pointer transition-all duration-500 hover:translate-x-3 ease-in-out">
              Orders History
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
