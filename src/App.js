import React, { useState } from 'react';
import Sidebar from './components/layouts/Sidebar';
import Header from './components/layouts/Header';
import { CSSTransition } from 'react-transition-group';

function App() {
  const [isOpen, setIsOpen] = useState(true);


  return (
    <div className="flex h-screen bg-gray-100">
      { isOpen && (
        <Sidebar openSidebar={setIsOpen} />
      )}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          isOpen={isOpen}
          openSidebar={setIsOpen}
        />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className='h-full'>

          </div>
        </main>
      </div>
    </div>
  );
}

export default App;