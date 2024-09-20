import React, { useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { Text } from '../components/common/Text';
import Button from '../components/common/Button';
import SearchField from '../components/common/SearchField';
import ModernTable from '../components/common/ReusableTable';


const AttributeListTable = () => {
  const [attributes, setAttributes] = useState([
    { id: 1, name: 'Color', type: 'select', options: 'Red, Green, Blue' },
    { id: 2, name: 'Size', type: 'text', options: null },
    { id: 3, name: 'Material', type: 'select', options: 'Cotton, Wool, Polyester' },
    { id: 4, name: 'Brand', type: 'text', options: null },
    { id: 5, name: 'Style', type: 'select', options: 'Casual, Formal, Sport' },
    { id: 6, name: 'Length', type: 'text', options: null },
    { id: 7, name: 'Weight', type: 'text', options: null },
    { id: 8, name: 'Width', type: 'text', options: null },
    { id: 9, name: 'Height', type: 'text', options: null },
    { id: 10, name: 'Pattern', type: 'select', options: 'Striped, Plain, Polka Dot' },
  ]);

  const handleSearch = (searchTerm) => {
    // Implement search logic
  };

  const columns = [
    { field: 'name', headerName: 'Name', align: 'left' },
    { field: 'type', headerName: 'Type', align: 'left' },
    { field: 'options', headerName: 'Options', align: 'left', render: (attribute) => attribute.options || '-' },
    {
      field: 'actions',
      headerName: 'Actions',
      align: 'right',
      render: (attribute) => (
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
    <div className="bg-white shadow-md rounded-lg p-4 w-full h-full">
      <div className="flex justify-between items-center mb-6">
        <Text as="h1" size="2xl" weight="bold">
          Attributes
        </Text>
        <Button variant="primary" onClick={() => {/* Navigate to Add Attribute */}}>
          Add New Attribute
        </Button>
      </div>
      <div className="mb-4">
        <SearchField placeholder="Search attributes..." onSearch={handleSearch} />
      </div>
      <div className="h-full rounded-lg overflow-hidden mt-6">
        <ModernTable
          columns={columns}
          data={attributes}
          includeSerialNumber={true} 
          tableProps={{ size: 'small' }}
          rowsPerPage={6}
        />
      </div>
    </div>
  );
};

export default AttributeListTable;
