import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { selectUser } from "./features/user/userSlice";
import UserProfile from "./pages/UserProfile";
import Protected from "./components/Protected";
import ShoppingCart from "./pages/ShoppingCart";
import Dashboard from "./pages/admin/Dashboard";
import { getBearerToken } from "./protocol";
import AllUsers from "./pages/admin/AllUsers";
import AllProducts from "./pages/admin/AllProducts";
import AddProduct from "./pages/admin/AddProduct";
import PageNotFound from "./pages/PageNotFound";
import ProductDetails from "./pages/ProductDetails";
import SearchResults from "./pages/SearchResults";
import AdminEditUser from "./pages/admin/AdminEditUser";
import AdminEditProduct from "./pages/admin/AdminEditProduct";
import Wishlist from "./pages/Wishlist";
import UserAddress from "./pages/UserAddress";

function App() {
  getBearerToken();
  const authUser = useSelector(selectUser);
  console.log("userDetails", authUser?.user);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <Signup />}
          />
          <Route
            path="/user-profile"
            element={
              <Protected>
                <UserProfile />
              </Protected>
            }
          />
          <Route
            path="/user-address"
            element={
              <Protected>
                <UserAddress />
              </Protected>
            }
          />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route
            path="/product/search/:searchKeyword"
            element={<SearchResults />}
          />
          <Route path="/product/:productId" element={<ProductDetails />} />

          {/* Admin routes */}

          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/admin-dashboard/products" element={<AllProducts />} />
          <Route path="/admin-dashboard/users" element={<AllUsers />} />
          <Route
            path="/admin-dashboard/products/:id/edit"
            element={<AdminEditProduct />}
          />
          <Route
            path="/admin-dashboard/users/:id/edit"
            element={<AdminEditUser />}
          />
          <Route
            path="/admin-dashboard/all-products"
            element={<AllProducts />}
          />
          <Route
            path="/admin-dashboard/add-new-product"
            element={<AddProduct />}
          />

          {/* ################### */}

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
