import React, { useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import Button from '../components/common/Button';
import { Text } from '../components/common/Text';
import SearchField from '../components/common/SearchField';
import ModernTable from '../components/common/ReusableTable';


const CategoryListTable = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Electronics', description: 'Electronic devices and accessories' },
    { id: 2, name: 'Clothing', description: 'Apparel and fashion items' },
    // Add more categories as needed
  ]);

  const handleSearch = (searchTerm) => {
    // Implement search logic
  };

  const columns = [
    { field: 'name', headerName: 'Name', align: 'left' },
    { field: 'description', headerName: 'Description', align: 'left' },
    {
      field: 'actions',
      headerName: 'Actions',
      align: 'right',
      render: (category) => (
        <div>
          <Button variant="secondary" size="small" className="mr-2">
            <FiEdit className="inline-block" />
          </Button>
          <Button variant="danger" size="small">
            <FiTrash2 className="inline-block" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full p-4 bg-white  shadow-md rounded-lg h-full">
      <div className="flex justify-between items-center mb-6">
        <Text as="h1" size="2xl" weight="bold">
          Categories
        </Text>
        <Button variant="primary" onClick={() => {/* Navigate to Add Category */}}>
          Add New Category
        </Button>
      </div>
      <div className="mb-4">
        <SearchField placeholder="Search categories..." onSearch={handleSearch} />
      </div>
      <div className="bg-white overflow-hidden">
        <ModernTable
          columns={columns}
          data={categories}
          includeSerialNumber={true} // Optionally include serial numbers
          tableProps={{ size: 'small' }}
          containerProps={{ style: { maxHeight: '400px' } }}
        />
      </div>
    </div>
  );
};

export default CategoryListTable;
