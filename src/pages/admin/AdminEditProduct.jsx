import React, { useState } from "react";
import AppLayout from "../../layout/AppLayout";
import DashboardLayout from "../../layout/admin/DashboardLayout";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { productCategory } from "../../helpers/productCategory";
import useProductUpdate from "../../hooks/useProductUpdate";
import toast from "react-hot-toast";

const AdminEditProduct = () => {
  const params = useParams();
  const location = useLocation();
  const product = location.state;
  console.log(product);
  const navigate = useNavigate();

  const { loading, updateProduct } = useProductUpdate();

  const [formData, setFormData] = useState({
    productName: product?.productName,
    brand: product?.brand,
    category: product?.category,
    description: product?.description,
    stock: product?.stock,
    price: product?.price,
    sellingPrice: product?.sellingPrice,
  });

  const productUpdateHandler = async (evt) => {
    evt.preventDefault();
    try {
      if (!formData.category) {
        toast.error("Please select one of the category");
      } else {
        const response = await updateProduct(product?._id, formData);
        toast.success(response);
        navigate("/admin-dashboard/products");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppLayout>
      <div className="max-w-[90%] mx-auto">
        <DashboardLayout>
          <h2 className="text-3xl font-bold text-center uppercase bg-clip-text text-transparent bg-gradient-to-b from-primary-yellow to-primary-red tracking-wide">
            Edit Product {params.id}
          </h2>
          <div className="max-w-[50%] mx-auto my-8">
            <form onSubmit={productUpdateHandler}>
              <div className="mb-6">
                <label
                  htmlFor="productName"
                  className="block font-semibold text-lg text-slate-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="productName"
                  value={formData.productName}
                  onChange={(evt) =>
                    setFormData({
                      ...formData,
                      productName: evt.target.value,
                    })
                  }
                  className="bg-[#f2f2f2] px-3 py-3 w-full text-md text-slate-800 rounded-md  outline-none border-none"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="productBrand"
                  className="block font-semibold text-lg text-slate-700 mb-2"
                >
                  Brand
                </label>
                <input
                  type="text"
                  id="productBrand"
                  value={formData.brand}
                  onChange={(evt) =>
                    setFormData({ ...formData, brand: evt.target.value })
                  }
                  className="bg-[#f2f2f2] px-3 py-3 w-full text-md text-slate-700 rounded-md outline-none border-none"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="productDesc"
                  className="block font-semibold text-lg text-slate-800 mb-2"
                >
                  Description
                </label>
                <textarea
                  type="text"
                  id="productDesc"
                  value={formData.description}
                  onChange={(evt) =>
                    setFormData({
                      ...formData,
                      description: evt.target.value,
                    })
                  }
                  rows={10}
                  className="bg-[#f2f2f2] px-3 py-3 w-full text-md text-slate-700 rounded-md outline-none border-none"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="productCategory"
                  className="block font-semibold text-lg text-slate-800 mb-2"
                >
                  Category
                </label>
                <select
                  id="productCategory"
                  value={formData.category}
                  onChange={(evt) =>
                    setFormData({ ...formData, category: evt.target.value })
                  }
                  className="bg-[#f2f2f2] w-full text-md px-3 py-3 text-slate-700 rounded-md outline-none"
                >
                  <option
                    value=""
                    className="text-slate-700 font-medium text-lg"
                  >
                    Select the product category
                  </option>
                  {productCategory.map((prd, idx) => {
                    return (
                      <option
                        value={prd.value}
                        key={prd.value + idx}
                        className="text-slate-700 font-medium text-lg"
                      >
                        {prd.label}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="stock"
                  className="block font-semibold text-lg text-slate-700 mb-2"
                >
                  Stock
                </label>
                <input
                  type="number"
                  id="stock"
                  value={formData.stock}
                  onChange={(evt) =>
                    setFormData({ ...formData, stock: evt.target.value })
                  }
                  min={1}
                  max={9999}
                  className="bg-[#f2f2f2] px-3 py-3 w-full text-md text-slate-700 rounded-md outline-none border-none"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="price"
                  className="block font-semibold text-lg text-slate-700 mb-2"
                >
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  value={formData.price}
                  onChange={(evt) =>
                    setFormData({ ...formData, price: evt.target.value })
                  }
                  className="bg-[#f2f2f2] px-3 py-3 w-full text-md text-slate-700 rounded-md outline-none border-none"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="sellingPrice"
                  className="block font-semibold text-lg text-slate-700 mb-2"
                >
                  Selling Price
                </label>
                <input
                  type="number"
                  id="sellingPrice"
                  value={formData.sellingPrice}
                  onChange={(evt) =>
                    setFormData({ sellingPrice: evt.target.value })
                  }
                  className="bg-[#f2f2f2] px-3 py-3 w-full text-md text-slate-700 rounded-md outline-none border-none"
                />
              </div>
              <div className="flex justify-end mt-12">
                <button
                  className="border-none outline-none bg-gradient-to-t from-primary-red to-primary-yellow text-white font-semibold text-lg px-8 py-2 rounded-full uppercase transition-all duration-[350ms] hover:-translate-y-1 hover:shadow-md hover:shadow-slate-400"
                  onClick={productUpdateHandler}
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </DashboardLayout>
      </div>
    </AppLayout>
  );
};

export default AdminEditProduct;
