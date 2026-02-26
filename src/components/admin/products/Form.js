"use client";

import { addProduct, updateProduct } from "@/api/products";
import { FaPlus, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Spinner from "@/components/Spinner";

const ProductForm = ({ product }) => {
  const { register, handleSubmit } = useForm({
    values: {
      name: product?.name ?? "",
      brand: product?.brand ?? "",
      category: product?.category ?? "",
      price: product?.price ?? "",
      stock: product?.stock ?? "",
    },
  });
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const images = acceptedFiles.map((file) => ({
      ...file,
      name: file.name,
      url: URL.createObjectURL(file),
    }));

    setImageFiles(acceptedFiles);
    setSelectedImages(images);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  function removeImage(index) {
    setSelectedImages((prev) => prev.filter((_, i) => i != index));
    setImageFiles((prev) => prev.filter((_, i) => i != index));
  }

  const router = useRouter();

  async function submitForm(data) {
    setLoading(true);

    const formdata = new FormData();

    formdata.append("name", data.name);
    formdata.append("brand", data.brand);
    formdata.append("category", data.category);
    formdata.append("price", data.price);
    formdata.append("stock", data.stock ?? 1);

    if (data.description) formdata.append("description", data.description);

    if (imageFiles.length > 0) {
      imageFiles.map((file) => {
        formdata.append("images", file);
      });
    }

    try {
      if (product) {
        await updateProduct(product._id, formdata);

        toast.success("Product updated successfully");
      } else {
        await addProduct(formdata);

        toast.success("Product created successfully");
      }

      router.back();
      router.refresh();
    } catch (error) {
      toast.error(error.response?.data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="sm:col-span-2">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Name *
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-3 focus:ring-primary/50 outline-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
            placeholder="Type product name"
            required
            {...register("name")}
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="brand"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Brand *
          </label>
          <input
            type="text"
            id="brand"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-3 focus:ring-primary/50 outline-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
            placeholder="Product brand"
            required
            {...register("brand")}
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price *
          </label>
          <input
            type="number"
            id="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-3 focus:ring-primary/50 outline-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
            placeholder="Rs. 10000"
            required
            {...register("price")}
          />
        </div>
        <div>
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category *
          </label>
          <input
            type="text"
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-3 focus:ring-primary/50 outline-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
            placeholder="Product category"
            required
            {...register("category")}
          />
        </div>
        <div>
          <label
            htmlFor="stock"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Stock
          </label>
          <input
            type="number"
            id="stock"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-3 focus:ring-primary/50 outline-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
            placeholder={10}
            {...register("stock")}
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Images
          </label>
          <div className="flex items-center justify-center w-full">
            <div
              className="flex flex-col items-center justify-center rounded-lg w-full bg-neutral-secondary-medium border border-dashed border-gray-300 cursor-pointer dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              {...getRootProps()}
            >
              <div className="flex flex-col items-center justify-center text-body py-10">
                <svg
                  className="w-8 h-8 mb-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs">.png, .jpg, .jpeg (Max 5MB)</p>
              </div>
              <input
                {...getInputProps({
                  accept: ".png,.jpg,.jpeg",
                })}
              />
            </div>
          </div>

          {selectedImages.map((image, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-3 flex items-center gap-4 mt-2"
            >
              <Image
                src={image.url}
                alt=""
                height={100}
                width={100}
                className="h-16 w-16 object-contain"
              />
              <h4 className="flex-1">{image.name}</h4>
              <button
                type="button"
                className="p-2 bg-red-500 rounded text-white cursor-pointer"
                onClick={() => removeImage(index)}
              >
                <FaTimes />
              </button>
            </div>
          ))}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={8}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-3 focus:ring-primary/50 outline-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
            placeholder="Your description here"
            defaultValue={""}
            {...register("description")}
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="disabled:opacity-80 inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-600 cursor-pointer"
      >
        <span className="mr-2">
          {product ? "Update Product" : "Add Product"}
        </span>
        {loading ? <Spinner className="h-5 w-5 fill-primary" /> : <FaPlus />}
      </button>
    </form>
  );
};

export default ProductForm;
