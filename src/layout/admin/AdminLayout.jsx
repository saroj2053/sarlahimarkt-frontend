import Header from "../../components/Header";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="mt-16 bg-slate-50">{children}</div>
    </div>
  );
};

export default AdminLayout;
