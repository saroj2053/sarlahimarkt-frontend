import { MdOutlineSettings, MdStarOutline } from "react-icons/md";
import { BiSolidPackage } from "react-icons/bi";
import { FaRegAddressCard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProfileSidebar = () => {
  const navigate = useNavigate();

  const isUserProfilePage = window.location.pathname === "/user-profile";
  const isUserAddressPage = window.location.pathname === "/user-address";
  return (
    <div className="w-[250px] min-h-[80vh] bg-slate-800 px-5 py-10 ">
      <ul className="flex flex-col gap-6 text-white font-medium text-sm">
        <li
          className={`uppercase flex gap-2 items-center cursor-pointer transition-all duraton-[400ms] ease-in-out hover:bg-slate-600 px-3 py-2 rounded-md ${
            isUserProfilePage ? "bg-slate-600" : ""
          }`}
          onClick={() => navigate("/user-profile")}
        >
          <span className="text-2xl flex">
            <MdOutlineSettings />
          </span>
          Settings
        </li>
        <li className="uppercase flex gap-2 items-center cursor-pointer transition-all duraton-[400ms] ease-in-out hover:bg-slate-600 px-3 py-2 rounded-md">
          <span className="text-2xl flex">
            <BiSolidPackage />
          </span>
          My Orders
        </li>
        <li className="uppercase flex gap-2 items-center cursor-pointer transition-all duraton-[400ms] ease-in-out hover:bg-slate-600 px-3 py-2 rounded-md">
          <span className="text-2xl flex">
            <MdStarOutline />
          </span>
          My Reviews
        </li>
        <li
          className={`uppercase flex gap-2 items-center cursor-pointer transition-all duraton-[400ms] ease-in-out hover:bg-slate-600 px-3 py-2 rounded-md ${
            isUserAddressPage ? "bg-slate-600" : ""
          }`}
          onClick={() => navigate("/user-address")}
        >
          <span className="text-2xl flex">
            <FaRegAddressCard />
          </span>
          My Address
        </li>
      </ul>
    </div>
  );
};

export default ProfileSidebar;
