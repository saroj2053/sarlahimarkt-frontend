import React, { useEffect, useState } from "react";
import useFetchProducts from "../../hooks/useFetchProducts";
import AppLayout from "../../layout/AppLayout";
import { getCharactersToLength } from "../../helpers/helperFunctions";
import DashboardLayout from "../../layout/admin/DashboardLayout";
import { FaPencil } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const { loading, fetchProducts } = useFetchProducts();
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
    <AppLayout>
      <div className="max-w-[90%] mx-auto">
        <DashboardLayout>
          <div className="flex flex-wrap justify-between gap-5">
            {products.map((product, index) => (
              <div
                className="flex flex-col w-80 min-h-60 bg-white py-8 px-8"
                key={product._id}
              >
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 ">
                    <img
                      className="w-full h-full py-0.5 object-contain"
                      src={product.productImages[0]}
                      alt=""
                    />
                  </div>
                  <p className="text-base text-primary-yellow font-bold">
                    {product.brand}
                  </p>
                </div>
                <h2 className="text-base text-slate-700 font-semibold my-2">
                  {getCharactersToLength(product.productName, 40)}
                </h2>
                <div className="flex gap-5 items-center my-3">
                  <p className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary-yellow to-primary-red">
                    € {product.sellingPrice}
                  </p>
                  <p className="line-through text-sm text-slate-700 font-semibold">
                    RRP: €{product.price}
                  </p>
                </div>
                <h2 className="text-base font-semibold text-slate-700 my-3">
                  Stock:
                  <span className="text-lg font-bold pl-1 bg-clip-text text-transparent bg-gradient-to-r from-primary-yellow to-primary-red">
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
    </AppLayout>
  );
};

export default AllProducts;
