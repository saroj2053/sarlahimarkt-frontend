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
          style: {
            fontSize: "1rem",
            fontWeight: "bold",
            color: "rgba(0, 0, 0, 0.8)",
          },
        }}
      />
    </Provider>
  </React.StrictMode>
);
