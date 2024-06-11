import React from "react";

const Loader = ({ text }) => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center min-h-[20vh]">
      <div className="w-16 h-16 border-4 border-slate-200 border-t-primary-red rounded-full animate-spin"></div>
      <h2 className="text-2xl font-semibold text-slate-800">Loading {text} </h2>
    </div>
  );
};

export default Loader;
