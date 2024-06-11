import React from "react";
import { MdOutlineSettings, MdStarOutline } from "react-icons/md";
import { BiSolidPackage } from "react-icons/bi";
import { FaRegAddressCard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProfileSidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[250px] min-h-[80vh] bg-gradient-to-r from-primary-yellow to-primary-red px-5 py-20 ">
      <ul className="flex flex-col gap-8 text-white font-semibold">
        <li
          className="uppercase text-base flex gap-2 items-center cursor-pointer transition-all duraton-[400ms] hover:translate-x-3 ease-in-out"
          onClick={() => navigate("/user-profile")}
        >
          <span className="text-3xl flex">
            <MdOutlineSettings />
          </span>
          Settings
        </li>
        <li className="uppercase text-base flex gap-2 items-center cursor-pointer transition-all duraton-[400ms] hover:translate-x-3 ease-in-out">
          <span className="text-3xl flex">
            <BiSolidPackage />
          </span>
          My Orders
        </li>
        <li className="uppercase text-base flex gap-2 items-center cursor-pointer transition-all duraton-[400ms] hover:translate-x-3 ease-in-out">
          <span className="text-3xl">
            <MdStarOutline />
          </span>
          My Reviews
        </li>
        <li
          className="uppercase text-base flex gap-2 items-center cursor-pointer transition-all duraton-[400ms] hover:translate-x-3 ease-in-out"
          onClick={() => navigate("/user-address")}
        >
          <span className="text-3xl">
            <FaRegAddressCard />
          </span>
          My Address
        </li>
      </ul>
    </div>
  );
};

export default ProfileSidebar;
