import React from "react";
import AppLayout from "../layout/AppLayout";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <AppLayout>
      <div className="h-[calc(100vh-256px)] flex flex-col items-center justify-center">
        <h2 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-yellow to-primary-red">
          404 - Not Found
        </h2>
        <p className="text-xl font-semibold text-slate-600 mt-1">
          Oops! something went wrong.{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-yellow to-primary-red">
            the page you are requesting for doesn't exist.
          </span>
        </p>
        <button
          className="bg-gradient-to-r  from-primary-yellow to-primary-red px-12 py-2 mt-4 rounded-md text-slate-50 font-semibold text-xl"
          onClick={() => navigate(-1)}
        >
          Go back
        </button>
      </div>
    </AppLayout>
  );
};

export default PageNotFound;
