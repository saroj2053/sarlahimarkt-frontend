import { useState } from "react";
import DashboardLayout from "../../layout/admin/DashboardLayout";
import { productCategory } from "../../helpers/productCategory";
import { MdDelete } from "react-icons/md";
import useProductCreate from "../../hooks/useProductCreate";
import AdminLayout from "../../layout/admin/AdminLayout";

const AddProduct = () => {
  const [productData, setProductData] = useState({
    productName: "",
    brand: "",
    description: "",
    category: "",
    stock: "",
    price: "",
    sellingPrice: "",
  });

  const { createProduct } = useProductCreate();

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [filePreviews, setFilePreviews] = useState([]);
  const handleFileUploadChange = (evt) => {
    const addedFiles = Array.from(evt.target.files);
    setSelectedFiles([...selectedFiles, ...addedFiles]);

    addedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreviews((prevPreviews) => [...prevPreviews, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeFile = (idx) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== idx));
    setFilePreviews(filePreviews.filter((_, i) => i !== idx));
  };

  const handleProductCreation = async (evt) => {
    evt.preventDefault();
    const formData = new FormData();

    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("files", selectedFiles[i]);
    }
    formData.append("productName", productData.productName);
    formData.append("brand", productData.brand);
    formData.append("description", productData.description);
    formData.append("category", productData.category);
    formData.append("stock", productData.stock);
    formData.append("price", productData.price);
    formData.append("sellingPrice", productData.sellingPrice);

    await createProduct(formData);
  };

  return (
    <AdminLayout>
      <div className="max-w-[100%] mx-auto">
        <DashboardLayout>
          <div className="w-[60%] mx-auto bg-white px-10 py-8">
            <h2 className="text-2xl font-medium uppercase mb-10 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-primary-yellow to-primary-red">
              Create new product
            </h2>
            <form onSubmit={handleProductCreation}>
              <div className="mb-6">
                <label
                  htmlFor="productName"
                  className="block text-slate-800 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="productName"
                  value={productData.productName}
                  onChange={(evt) =>
                    setProductData({
                      ...productData,
                      productName: evt.target.value,
                    })
                  }
                  className="bg-[#f2f2f2] p-3 w-full text-slate-800 rounded-md  outline-none border-none"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="productBrand"
                  className="block text-slate-800 mb-2"
                >
                  Brand
                </label>
                <input
                  type="text"
                  id="productBrand"
                  value={productData.brand}
                  onChange={(evt) =>
                    setProductData({ ...productData, brand: evt.target.value })
                  }
                  className="bg-[#f2f2f2] p-3 w-full text-slate-800 rounded-md outline-none border-none"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="productDesc"
                  className="block text-slate-800 mb-2"
                >
                  Description
                </label>
                <textarea
                  type="text"
                  id="productDesc"
                  value={productData.description}
                  onChange={(evt) =>
                    setProductData({
                      ...productData,
                      description: evt.target.value,
                    })
                  }
                  rows={3}
                  className=" bg-[#f2f2f2] p-3 w-full text-slate-800 rounded-md outline-none border-none"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="productCategory"
                  className="block text-slate-800 mb-2"
                >
                  Category
                </label>
                <select
                  id="productCategory"
                  value={productData.category}
                  onChange={(evt) =>
                    setProductData({
                      ...productData,
                      category: evt.target.value,
                    })
                  }
                  className="bg-[#f2f2f2] w-full text-md p-3 text-slate-700 rounded-md outline-none"
                >
                  <option value="" className="text-slate-700 font-medium">
                    Select the product category
                  </option>
                  {productCategory.map((prd, idx) => {
                    return (
                      <option
                        value={prd.value}
                        key={prd.value + idx}
                        className="text-slate-700 font-medium"
                      >
                        {prd.label}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="productImg" className="text-slate-800">
                  Product Image
                </label>
              </div>
              <div className="flex items-center justify-center w-full mb-6">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 "
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-medium">Click to upload</span> or
                      drag and drop
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    multiple
                    className="hidden"
                    onChange={handleFileUploadChange}
                  />
                </label>
              </div>
              <div className="bg-slate-50 min-h-24 border p-5 rounded my-8 flex gap-3">
                {filePreviews.map((preview, idx) => (
                  <div key={idx} className="relative">
                    <img
                      className="rounded"
                      src={preview}
                      alt=""
                      width={120}
                      height={120}
                    />
                    <button
                      type="button"
                      className="absolute top-0 right-0 bg-red-600 text-white rounded-full p-1"
                      onClick={() => removeFile(idx)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <label htmlFor="stock" className="block text-slate-800 mb-2">
                  Stock
                </label>
                <input
                  type="number"
                  id="stock"
                  value={productData.stock}
                  onChange={(evt) =>
                    setProductData({ ...productData, stock: evt.target.value })
                  }
                  min={1}
                  max={9999}
                  className="bg-[#f2f2f2] p-3 w-full text-slate-800 rounded-md outline-none border-none"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="price" className="block text-slate-800 mb-2">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  value={productData.price}
                  onChange={(evt) =>
                    setProductData({ ...productData, price: evt.target.value })
                  }
                  className="bg-[#f2f2f2] p-3 w-full text-slate-800 rounded-md outline-none border-none"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="sellingPrice"
                  className="block text-slate-800 mb-2"
                >
                  Selling Price
                </label>
                <input
                  type="number"
                  id="sellingPrice"
                  value={productData.sellingPrice}
                  onChange={(evt) =>
                    setProductData({
                      ...productData,
                      sellingPrice: evt.target.value,
                    })
                  }
                  className="bg-[#f2f2f2] p-3 w-full text-slate-800 rounded-md outline-none border-none"
                />
              </div>
              <div className="flex justify-end mt-12">
                <button
                  className="border-none outline-none bg-gradient-to-t from-primary-red to-primary-yellow text-white font-medium  px-8 py-2 rounded-full uppercase transition-all duration-[350ms] hover:-translate-y-0.5 hover:shadow-sm hover:shadow-slate-300"
                  onClick={handleProductCreation}
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </DashboardLayout>
      </div>
    </AdminLayout>
  );
};

export default AddProduct;
