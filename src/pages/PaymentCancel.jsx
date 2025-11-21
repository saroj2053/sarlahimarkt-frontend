import { useNavigate } from "react-router-dom";
import AppLayout from "../layout/AppLayout";

const PaymentCancel = () => {
  const navigate = useNavigate();
  return (
    <AppLayout>
      <div className="min-h-[90vh] flex flex-col items-center justify-center">
        <div className="w-96 flex flex-col items-center justify-center  bg-white py-8 rounded-md shadow-md px-6">
          <div className="bg-green-600 w-12 h-12 rounded-full mb-4 text-white text-xl flex items-center justify-center">
            €
          </div>
          <h2 className="text-lg  bg-clip-text text-transparent bg-gradient-to-t from-primary-yellow to-primary-red mb-4">
            Payment Cancelled!
          </h2>
          <p className=" text-slate-600 text-sm">
            Your payment has been cancelled.
          </p>

          <button
            className="mt-6 bg-green-600 text-white text-sm rounded-full px-4 py-2  shadow-sm hover:bg-green-700 transition-colors duration-300"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </AppLayout>
  );
};

export default PaymentCancel;
