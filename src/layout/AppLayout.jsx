import Header from "../components/Header";
import Footer from "../components/Footer";
import PropTypes from "prop-types";

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="mt-16 bg-slate-50">{children}</div>
      <Footer />
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;
