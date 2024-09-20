import React from 'react';
import ModernTable from '../components/common/ReusableTable';
import { Text } from '../components/common/Text';

const ProductTable = () => {
  const columns = [
    { field: 'image', headerName: 'Image', type: 'image', align: 'left' },
    { field: 'name', headerName: 'Product Name', align: 'left' },
    { field: 'category', headerName: 'Category', align: 'left' },
    { field: 'price', headerName: 'Price ($)', align: 'right' },
  ];

  const products = [
    { id: 1, name: 'Product 1', category: 'Category 1', price: 100, image: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Product 2', category: 'Category 2', price: 150, image: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Product 3', category: 'Category 3', price: 200, image: 'https://via.placeholder.com/50' },
    { id: 4, name: 'Product 4', category: 'Category 4', price: 120, image: 'https://via.placeholder.com/50' },
    { id: 5, name: 'Product 5', category: 'Category 5', price: 90, image: 'https://via.placeholder.com/50' },
    { id: 6, name: 'Product 6', category: 'Category 6', price: 110, image: 'https://via.placeholder.com/50' },
    { id: 7, name: 'Product 7', category: 'Category 7', price: 80, image: 'https://via.placeholder.com/50' },
    { id: 8, name: 'Product 8', category: 'Category 8', price: 300, image: 'https://via.placeholder.com/50' },
    { id: 9, name: 'Product 9', category: 'Category 9', price: 75, image: 'https://via.placeholder.com/50' },
    { id: 10, name: 'Product 10', category: 'Category 10', price: 250, image: 'https://via.placeholder.com/50' },
  ];

  return (
    <div className='bg-white shadow-md h-full p-4 rounded-md'>
      <Text as="h1" size="2xl" weight="bold" className="mb-6">
        Product List
      </Text>
      <ModernTable
        columns={columns}
        data={products}
        includeSerialNumber={true}
        tableProps={{ size: 'small' }}
        rowsPerPage={6}
      />
    </div>
  );
};

export default ProductTable;
