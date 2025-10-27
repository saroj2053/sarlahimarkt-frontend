import { useEffect, useState } from "react";
import AppLayout from "../layout/AppLayout";
import ProfileSidebar from "../components/ProfileSidebar";
import { IoPulse } from "react-icons/io5";
import useFetchAddress from "../hooks/useFetchAddress";
import Loader from "../components/Loader";
import AddressForm from "../components/AddressForm";
import { PiAddressBookFill } from "react-icons/pi";

const UserAddress = () => {
  const { loading, fetchAddress } = useFetchAddress();
  const [address, setAddress] = useState([]);
  const [showAddressForm, setShowAddressForm] = useState(false);

  useEffect(() => {
    async function getAddress() {
      const addressData = await fetchAddress();
      setAddress(addressData);
    }

    getAddress();
  }, []);

  const toggleAddressFormVisibility = () => {
    setShowAddressForm((prevState) => !prevState);
  };

  return (
    <AppLayout>
      <div className="flex shadow-md p-10">
        <ProfileSidebar />
        <div className="flex-1 bg-white py-20">
          <div className="max-w-[70%] mx-auto pb-12 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold uppercase mb-10 tracking-wide bg-clip-text text-transparent bg-gradient-to-t from-primary-yellow to-primary-red">
              Addresses Setup
            </h2>
            <div
              className="cursor-pointer"
              onClick={toggleAddressFormVisibility}
            >
              <h1 className="flex gap-1 justify-center items-center border-2 w-64 rounded-full px-4 py-1  text-slate-800 font-medium">
                <span className="flex">
                  <IoPulse />
                </span>
                Add New Address
              </h1>
            </div>
            {showAddressForm && (
              <div className="w-4/5 px-16 py-8 rounded-md mt-8 ">
                <h2 className="text-xl font-semibold text-slate-700 uppercase">
                  Add a new address
                </h2>
                <AddressForm />
              </div>
            )}

            {loading ? (
              <Loader text="Addresses" />
            ) : (
              <div className="w-[70%] mx-auto min-h-24 mt-8 p-12 flex justify-center items-center rounded-lg">
                {address?.length === 0 ? (
                  <h1 className=" text-slate-700 text-center flex flex-col justify-center items-center font-medium gap-4">
                    <PiAddressBookFill size={40} />
                    No address found
                  </h1>
                ) : (
                  <div className="flex flex-col text-slate-700 font-semibold">
                    {address.map((addr, index) => (
                      <div
                        key={addr._id + index}
                        className="w-[40%] flex flex-col gap-1"
                      >
                        <h2>{addr.firstName + " " + addr.lastName}</h2>
                        <p>{addr.address1}</p>
                        <p>{addr.address2}</p>
                        <p>{addr.postalCode + " " + addr.city}</p>
                        <p>{addr.country}</p>
                        <div className="flex gap-12 mb-6 mt-1">
                          <button className="bg-blue-500 text-white px-4 py-0.5 rounded-sm font-semibold">
                            Edit
                          </button>
                          <button className="bg-red-500 text-white px-4 py-0.5 rounded-sm font-semibold">
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default UserAddress;
