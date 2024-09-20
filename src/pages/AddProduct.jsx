import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Text } from "../components/common/Text";
import FormInput from "../components/common/FormInput";
import Button from "../components/common/Button";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Product name is required")
    .min(3, "Product name must be at least 3 characters"),
  description: yup
    .string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters"),
  price: yup
    .number()
    .required("Price is required")
    .positive("Price must be positive")
    .min(0.01, "Minimum price is 0.01"),
  category: yup.string().required("Category is required"),
  stock: yup
    .number()
    .required("Stock is required")
    .integer("Stock must be an integer")
    .min(0, "Stock cannot be negative"),
  image: yup.mixed().required("Product image is required"),
});

const categories = [
  "Electronics",
  "Clothing",
  "Home & Garden",
  "Sports & Outdoors",
  "Books",
  "Toys & Games",
  "Health & Beauty",
  "Automotive",
  "Food & Beverages",
];

const AddProduct = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      category: "",
      stock: "",
      image: null,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the data to your backend
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full h-full p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <Text
        as="h1"
        size="3xl"
        weight="bold"
        className="mb-8 text-center text-gray-800 dark:text-white"
      >
        Add New Product
      </Text>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <FormInput
                  label="Product Name"
                  {...field}
                  errorMessage={errors.name?.message}
                  className="mb-4"
                  inputClassName="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              )}
            />

            <Controller
              name="price"
              control={control}
              render={({ field }) => (
                <FormInput
                  label="Price"
                  {...field}
                  type="number"
                  step="0.01"
                  errorMessage={errors.price?.message}
                  inputClassName="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              )}
            />

            <Controller
              name="stock"
              control={control}
              render={({ field }) => (
                <FormInput
                  label="Stock"
                  {...field}
                  type="number"
                  errorMessage={errors.stock?.message}
                  inputClassName="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              )}
            />

            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <label
                    htmlFor="category"
                    className="block font-semibold font-poppins text-gray-700 dark:text-gray-200 mb-1"
                  >
                    Category
                  </label>
                  <select
                    {...field}
                    id="category"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.category.message}
                    </p>
                  )}
                </div>
              )}
            />

            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-gray-700 dark:text-gray-200 mb-1 font-poppins font-semibold"
                  >
                    Description
                  </label>
                  <textarea
                    {...field}
                    id="description"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  ></textarea>
                  {errors.description && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.description.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          <div className="space-y-6">
            <Controller
              name="image"
              control={control}
              render={({ field: { onChange, value, ...field } }) => (
                <div className="mb-4">
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
                  >
                    Product Image
                  </label>
                  <input
                    {...field}
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      onChange(e.target.files[0]);
                      handleImageChange(e);
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  {errors.image && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.image.message}
                    </p>
                  )}
                </div>
              )}
            />

            {previewImage && (
              <div className="mt-4">
                <Text as="h3" size="lg" weight="semibold" className="mb-2">
                  Image Preview
                </Text>
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-40 rounded-lg shadow-md p-3"
                />
              </div>
            )}
          </div>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="medium"
          className="mt-8"
        >
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
