import { useEffect, useState } from "react";
import useFetchProducts from "../../hooks/useFetchProducts";

import { getCharactersToLength } from "../../helpers/helperFunctions";
import DashboardLayout from "../../layout/admin/DashboardLayout";
import { FaPencil } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../layout/admin/AdminLayout";

const AllProducts = () => {
  const { fetchProducts } = useFetchProducts();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function getProductsData() {
      const response = await fetchProducts();
      setProducts(response);
    }

    getProductsData();
  }, []);

  const handleEditProduct = (id, product) => {
    navigate(`/admin-dashboard/products/${id}/edit`, { state: product });
  };

  return (
    <AdminLayout>
      <div className="max-w-[100%] mx-auto">
        <DashboardLayout>
          <div className="flex flex-wrap justify-between gap-5">
            {products.map((product, index) => (
              <div
                className="flex flex-col w-64 min-h-48 bg-white p-6 shadow-sm rounded-md"
                key={product._id + index}
              >
                <div className="flex flex-col items-center">
                  <div className="w-28 h-28 ">
                    <img
                      className="w-full h-full py-0.5 object-contain"
                      src={product.productImages[0]}
                      alt=""
                    />
                  </div>
                  <p className=" text-primary-yellow font-medium text-sm mt-2">
                    {product.brand}
                  </p>
                </div>
                <h2 className="text-slate-700 my-4 text-sm">
                  {getCharactersToLength(product.productName, 50)}
                </h2>
                <div className="flex gap-5 items-center my-2">
                  <p className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary-yellow to-primary-red">
                    € {product.sellingPrice}
                  </p>
                  <p className="line-through text-sm text-slate-700 font-medium">
                    RRP: €{product.price}
                  </p>
                </div>
                <h2 className=" text-slate-700 my-2 text-sm">
                  Stock:
                  <span className=" font-medium pl-1 bg-clip-text text-transparent bg-gradient-to-r from-primary-yellow to-primary-red">
                    {product.stock}
                  </span>
                </h2>
                <div className="flex justify-end">
                  <div
                    className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-primary-yellow to-primary-red rounded-full text-white cursor-pointer"
                    onClick={() => handleEditProduct(product._id, product)}
                  >
                    <FaPencil />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </DashboardLayout>
      </div>
    </AdminLayout>
  );
};

export default AllProducts;
