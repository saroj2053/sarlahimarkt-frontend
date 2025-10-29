import { useEffect, useState } from "react";
import DashboardLayout from "../../layout/admin/DashboardLayout";
import useFetchAllUsers from "../../hooks/useFetchAllUsers";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../helpers/dateFormatter";
import AdminLayout from "../../layout/admin/AdminLayout";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const { loading, fetchAllUsers } = useFetchAllUsers();

  const navigate = useNavigate();
  useEffect(() => {
    async function getAllUsers() {
      const usersData = await fetchAllUsers();
      setUsers(usersData);
    }
    getAllUsers();
  }, []);

  const handleEditUser = (userId, user) => {
    navigate(`/admin-dashboard/users/${userId}/edit`, { state: user });
  };
  return (
    <AdminLayout>
      <div className="max-w-[100%] mx-auto">
        <DashboardLayout>
          {loading ? (
            <Loader text="users" />
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-slate-300 shadow-md">
                <thead>
                  <tr className="bg-white border-b">
                    <th className="p-3 text-left text-slate-700 border-r border-slate-300 text-sm">
                      Profile Image
                    </th>
                    <th className="p-3 text-left text-slate-700 border-r border-slate-300 text-sm">
                      Name
                    </th>
                    <th className="p-3 text-left text-slate-700 border-r border-slate-300 text-sm">
                      Email
                    </th>
                    <th className="p-3 text-left text-slate-700 border-r border-slate-300 text-sm">
                      Role
                    </th>
                    <th className="p-3 text-left text-slate-700 border-r border-slate-300 text-sm">
                      Member Since
                    </th>
                    <th className="p-3 text-left text-slate-700 border-r border-slate-300 text-sm">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user._id + index} className="bg-white border-b">
                      <td className="p-4 border-r border-slate-300">
                        <div className="flex items-center">
                          <img
                            className="w-14 h-14 rounded-full"
                            src={user.avatar}
                            alt=""
                          />
                        </div>
                      </td>
                      <td className="p-4 border-r border-slate-300 text-sm ">
                        {user.name}
                      </td>
                      <td className="p-4 border-r border-slate-300 text-sm">
                        {user.email}
                      </td>
                      <td className="p-4 border-r border-slate-300 text-sm">
                        {user.role}
                      </td>
                      <td className="p-4 border-r border-slate-300 text-sm">
                        {formatDate(user?.createdAt)}
                      </td>
                      <td className="p-4">
                        <button
                          className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary-yellow to-primary-red border-2 rounded-full px-4 py-0.5"
                          onClick={() => handleEditUser(user._id, user)}
                        >
                          Change Role
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </DashboardLayout>
      </div>
    </AdminLayout>
  );
};

export default AllUsers;
