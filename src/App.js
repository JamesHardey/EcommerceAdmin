// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layouts/Sidebar';
import Header from './components/layouts/Header';
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';

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
                <Route path="/ecommerce/product-list" element={<ProductList />} />
                <Route path="/ecommerce/add-product" element={<AddProduct />} />
                
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
