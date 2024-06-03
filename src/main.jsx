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
        position="
        bottom-right"
        toastOptions={{
          style: {
            background: "linear-gradient(to right, #fbbf24, #ef4444)",
            color: "white",
          },
        }}
      />
    </Provider>
  </React.StrictMode>
);
