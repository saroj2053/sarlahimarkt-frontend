import React, { useState } from "react";
import AppLayout from "../../layout/AppLayout";
import DashboardLayout from "../../layout/admin/DashboardLayout";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { userRoles } from "../../helpers/userRoles";
import { formatDate } from "../../helpers/dateFormatter";
import toast from "react-hot-toast";
import useUserRoleUpdate from "../../hooks/useUserRoleUpdate";

const AdminEditUser = () => {
  const params = useParams();
  const location = useLocation();
  const user = location.state;
  const navigate = useNavigate();

  const [role, setRole] = useState(user?.role);
  const { loading, updateUserRole } = useUserRoleUpdate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      if (!role) {
        toast.error("Please select one of the roles");
      } else {
        const response = await updateUserRole(user?._id, role);
        toast.success(response);
        navigate("/admin-dashboard/users");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppLayout>
      <div className="max-w-[90%] mx-auto">
        <DashboardLayout>
          <h2 className="text-3xl font-bold text-center uppercase bg-clip-text text-transparent bg-gradient-to-b from-primary-yellow to-primary-red tracking-wide">
            Edit User {params.id}
          </h2>
          <div className="max-w-[50%] mx-auto my-6 bg-white p-12">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-24 h-24 object-contain"
                  src={user?.avatar}
                  alt=""
                />
                <h2 className="mt-4 mb-12 text-slate-700 font-semibold text-lg">
                  Member Since:{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-yellow to-primary-red text-lg font-bold">
                    {formatDate(user?.createdAt)}
                  </span>
                </h2>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block font-semibold text-lg text-slate-800 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={user?.name}
                  disabled
                  className="bg-[#f2f2f2] w-full text-md px-3 py-3 text-slate-700 y-3 rounded-md outline-none"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block font-semibold text-lg text-slate-800 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={user?.email}
                  disabled
                  className="bg-[#f2f2f2] w-full text-md px-3 py-3 text-slate-700 rounded-md outline-none"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="userRole"
                  className="block font-semibold text-lg text-slate-800 mb-2"
                >
                  Role
                </label>
                <select
                  id="userRole"
                  value={role}
                  onChange={(evt) => setRole(evt.target.value)}
                  className="bg-[#f2f2f2] w-full text-md px-3 py-3 text-slate-700 rounded-md outline-none"
                >
                  <option
                    value=""
                    className="text-slate-700 font-medium text-lg"
                  >
                    Select Role
                  </option>
                  {userRoles.map((usr, idx) => {
                    return (
                      <option
                        value={usr.value}
                        key={usr.value + idx}
                        className="text-slate-700 font-medium text-lg"
                      >
                        {usr.label}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex justify-end mt-12">
                <button
                  disabled={loading}
                  className="border-none outline-none bg-gradient-to-t from-primary-red to-primary-yellow text-white font-semibold text-lg px-8 py-2 rounded-full uppercase transition-all duration-[350ms] hover:-translate-y-1 hover:shadow-md hover:shadow-slate-400"
                  onClick={handleSubmit}
                >
                  Update User
                </button>
              </div>
            </form>
          </div>
        </DashboardLayout>
      </div>
    </AppLayout>
  );
};

export default AdminEditUser;
