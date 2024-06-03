import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="mt-28">{children}</div>
      <Footer />
    </>
  );
};

export default AppLayout;
