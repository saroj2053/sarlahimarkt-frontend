import Header from "../components/Header";
import Footer from "../components/Footer";

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="mt-16 bg-slate-50">{children}</div>
      <Footer />
    </>
  );
};

export default AppLayout;
