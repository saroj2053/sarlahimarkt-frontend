import React from "react";

const Loader = ({ text }) => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center min-h-[calc(100vh-200px)]">
      <div className="w-16 h-16 border-4 border-slate-200 border-t-primary-red rounded-full animate-spin"></div>
      <h2 className="text-2xl font-semibold">Loading {text} </h2>
    </div>
  );
};

export default Loader;
