import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import FormInput from "../components/common/FormInput";
import Button from "../components/common/Button";
import { Text } from "../components/common/Text";

const AddNewCategory = () => {
  const [category, setCategory] = useState({ name: "", description: "" });

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Category submitted:", category);
  };

  return (
    <div className="w-full h-full p-6 bg-white rounded-lg shadow-lg">
      <Text as="h1" size="2xl" weight="bold" className="mb-6">
        Add New Category
      </Text>
      <div className="w-full">
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput
            label="Category Name"
            name="name"
            value={category.name}
            onChange={handleChange}
            placeholder="Enter category name"
            required
            className="mb-4"
          />
          <FormInput
            label="Description"
            name="description"
            value={category.description}
            onChange={handleChange}
            placeholder="Enter category description"
            className="mb-4"
          />
          <Button type="submit" variant="primary" className="w-fit flex items-center">
            <FiPlus className="inline-block mr-2" size={20} />
            Add Category
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddNewCategory;
