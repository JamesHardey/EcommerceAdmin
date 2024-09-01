import React, { useState } from 'react';
import { FaSearch, FaBell, FaShoppingCart, FaMoon, FaSun } from 'react-icons/fa';
import { AiOutlineMenuFold } from "react-icons/ai";
import Avatar from '../common/Avatar';

function Header({ isOpen, openSidebar }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleView = () => {
        openSidebar(true);
    }

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <header className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md`}>
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {!isOpen &&
                        <button
                            className="text-gray-400 hover:text-gray-600 mr-4"
                            onClick={toggleView}
                        >
                            <AiOutlineMenuFold size={24} />
                        </button>
                    }
                    <div className="flex items-center flex-1">
                        <div className="relative">
                            <input
                                className={`rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-gray-400 w-[600px] ${
                                    isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
                                }`}
                                type="text"
                                placeholder="Search here..."
                            />
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button onClick={toggleTheme} className="mr-4">
                            {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-400" />}
                        </button>
                        <FaBell className="mx-4 text-gray-400" />
                        <FaShoppingCart className="mx-4 text-gray-400" />
                        <div className="flex items-center ml-4">
                            <Avatar name={'James'} />
                            <span className="ml-2">Kristin Watson</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;