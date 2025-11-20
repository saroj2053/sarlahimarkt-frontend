import AppLayout from "../layout/AppLayout";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <AppLayout>
      <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center">
        <h2 className="text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-t from-primary-yellow to-primary-red mb-4">
          404 - Not Found
        </h2>
        <p className="text-lg text-slate-600 mt-1">
          Oops! something went wrong.{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-yellow to-primary-red">
            The page you are requesting for does not exist.
          </span>
        </p>
        <button
          className="bg-gradient-to-r  from-primary-yellow to-primary-red px-8 py-2 mt-8 rounded-md text-slate-50 text-lg"
          onClick={() => navigate(-1)}
        >
          Go back
        </button>
      </div>
    </AppLayout>
  );
};

export default PageNotFound;
