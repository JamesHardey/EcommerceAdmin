import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Text } from '../components/common/Text';
import FormInput from '../components/common/FormInput';
import Button from '../components/common/Button';


const AddAttribute = () => {
  const [attribute, setAttribute] = useState({ name: '', type: 'text', options: '' });

  const handleChange = (e) => {
    setAttribute({ ...attribute, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle attribute submission
    console.log('Attribute submitted:', attribute);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg w-full h-full">
      <Text as="h1" size="2xl" weight="bold" className="mb-6">
        Add New Attribute
      </Text>
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="Attribute Name"
          name="name"
          value={attribute.name}
          onChange={handleChange}
          placeholder="Enter attribute name"
          required
          className="mb-4"
        />
        <div className="mb-4">
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">Attribute Type</label>
          <select
            id="type"
            name="type"
            value={attribute.type}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="select">Select</option>
          </select>
        </div>
        {attribute.type === 'select' && (
          <FormInput
            label="Options (comma-separated)"
            name="options"
            value={attribute.options}
            onChange={handleChange}
            placeholder="Enter options, e.g. Red, Green, Blue"
            className="mb-4"
          />
        )}
        <Button type="submit" variant="primary" className="w-fit">
          <FiPlus className="inline-block mr-2" />
          Add Attribute
        </Button>
      </form>
    </div>
  );
};

export default AddAttribute;