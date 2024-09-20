// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layouts/Sidebar';
import Header from './components/layouts/Header';
import AddProduct from './pages/AddProduct';
import ProductTable from './pages/ProductList';
import AddNewCategory from './pages/AddCategory';
import CategoryListTable from './pages/CategoryList';
import AddAttribute from './pages/AddAttribute';
import AttributeListTable from './pages/AttributeListTable';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        { isOpen && (
          <Sidebar openSidebar={setIsOpen} />
        )}
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header 
            isOpen={isOpen}
            openSidebar={setIsOpen}
          />
          <main className="flex-1 overflow-y-auto bg-gray-200">
            <div className='h-full p-4'>
              <Routes>
                <Route path="/ecommerce/product-list" element={<ProductTable />} />
                <Route path="/ecommerce/add-product" element={<AddProduct />} />
                <Route path="/category/new" element={<AddNewCategory />} />
                <Route path="/category/list" element={<CategoryListTable />} />
                <Route path="/attributes/add" element={<AddAttribute />} />
                <Route path="/attributes" element={<AttributeListTable />} />
                <Route path="/order/order-list" element={<AddProduct />} />
                <Route path="/order/order-tracking" element={<AddProduct />} />
                
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
