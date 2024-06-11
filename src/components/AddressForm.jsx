import React from "react";

const AddressForm = () => {
  return (
    <form className="my-8">
      <div className="flex flex-col w-full my-6">
        <label
          htmlFor="firstName"
          className="mb-2 text-slate-700 font-bold text-md"
        >
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          className="bg-slate-100 outline-none py-2 px-4 rounded-full text-slate-600 font-semibold tracking-wide"
        />
      </div>
      <div className="flex flex-col w-full my-6">
        <label
          htmlFor="lastName"
          className="mb-2 text-slate-700 font-bold text-md"
        >
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          className="bg-slate-100 outline-none py-2 px-4 rounded-full text-slate-600 font-semibold tracking-wide"
        />
      </div>
      <div className="flex flex-col w-full my-6">
        <label
          htmlFor="company"
          className="mb-2 text-slate-700 font-bold text-md"
        >
          Company:
        </label>
        <input
          type="text"
          id="company"
          className="bg-slate-100 outline-none py-2 px-4 rounded-full text-slate-600 font-semibold tracking-wide"
        />
      </div>
      <div className="flex flex-col w-full my-6">
        <label
          htmlFor="addressOne"
          className="mb-2 text-slate-700 font-bold text-md"
        >
          Address 1:
        </label>
        <input
          type="text"
          id="addressOne"
          className="bg-slate-100 outline-none py-2 px-4 rounded-full text-slate-600 font-semibold tracking-wide"
        />
      </div>
      <div className="flex flex-col w-full my-6">
        <label
          htmlFor="addressTwo"
          className="mb-2 text-slate-700 font-bold text-md"
        >
          Address 2:
        </label>
        <input
          type="text"
          id="addressTwo"
          className="bg-slate-100 outline-none py-2 px-4 rounded-full text-slate-600 font-semibold tracking-wide"
        />
      </div>
      <div className="flex flex-col w-full my-6">
        <label htmlFor="city" className="mb-2 text-slate-700 font-bold text-md">
          City:
        </label>
        <input
          type="text"
          id="city"
          className="bg-slate-100 outline-none py-2 px-4 rounded-full text-slate-600 font-semibold tracking-wide"
        />
      </div>
      <div className="flex flex-col w-full my-6">
        <label
          htmlFor="country"
          className="mb-2 text-slate-700 font-bold text-md"
        >
          Country:
        </label>
        <input
          type="text"
          id="country"
          className="bg-slate-100 outline-none py-2 px-4 rounded-full text-slate-600 font-semibold tracking-wide"
        />
      </div>
      <div className="flex flex-col w-full my-6">
        <label
          htmlFor="postCode"
          className="mb-2 text-slate-700 font-bold text-md"
        >
          Postal/Zip Code:
        </label>
        <input
          type="text"
          id="postCode"
          className="bg-slate-100 outline-none py-2 px-4 rounded-full text-slate-600 font-semibold tracking-wide"
        />
      </div>
      <div className="flex flex-col w-full my-6">
        <label
          htmlFor="phone"
          className="mb-2 text-slate-700 font-bold text-md"
        >
          Phone:
        </label>
        <input
          type="text"
          id="phone"
          className="bg-slate-100 outline-none py-2 px-4 rounded-full text-slate-600 font-semibold tracking-wide"
        />
      </div>

      <div>
        <button className="text-xl font-semibold border-2 px-4 py-1 rounded-md bg-clip-text text-transparent bg-gradient-to-r from-primary-yellow to-primary-red transition-all duration-500 ease-in-out hover:scale-110">
          Add address
        </button>
      </div>
    </form>
  );
};

export default AddressForm;
