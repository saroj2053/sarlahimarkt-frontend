import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />

      <Toaster
        toastOptions={{
          duration: 4000,
          style: {
            fontSize: "14px",
            fontWeight: "500",
            background: "oklch(95.4% 0.038 75.164)",
            color: "oklch(64.6% 0.222 41.116)",
          },
        }}
      />
    </Provider>
  </React.StrictMode>
);
