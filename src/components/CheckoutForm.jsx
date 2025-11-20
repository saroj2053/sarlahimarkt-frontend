import { useState } from "react";
import { api } from "../protocol";

const CheckoutForm = ({ cart }) => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(null);

    const body = { products: cart };
    const headers = { "Content-Type": "application/json" };

    setLoading(true);
    try {
      const res = await fetch(`${api}/payment/create-checkout-session`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });

      const { url, error } = await res.json();

      if (error || !url) {
        setErrorMsg(error || "Failed to create checkout session.");
        setLoading(false);
        return;
      }

      window.location.replace(url);
    } catch {
      setErrorMsg("Unexpected error.");
    } finally {
      // Loading is not set to false here, as the user is redirected away.
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
      {errorMsg && <div className="text-red-600 text-sm">{errorMsg}</div>}
      <button
        type="submit"
        disabled={loading}
        className="bg-orange-200 px-6 py-2 text-orange-600 w-full rounded-full hover:bg-orange-600 hover:text-white transition disabled:opacity-50"
      >
        {loading ? "Redirecting..." : "Proceed to Checkout"}
      </button>
    </form>
  );
};

export default CheckoutForm;
