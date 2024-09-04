// Sidebar.js
import React, { useState } from 'react';
import { 
    FaHome, FaShoppingCart, FaList, FaCube, FaClipboardList, FaUser, FaUserCog, FaImages, FaChevronDown, FaChevronRight, 
} from 'react-icons/fa';
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from 'react-router-dom';

const menuItems = [
    { 
        icon: MdOutlineDashboard, 
        label: 'Dashboard', 
        subItems: [{ name: 'Home 01', path: '/dashboard' }] 
    },
    { 
        icon: FaShoppingCart, 
        label: 'Ecommerce', 
        subItems: [
            { name: 'Add Product', path: '/ecommerce/add-product' }, 
            { name: 'Product List', path: '/ecommerce/product-list' }
        ] 
    },
    { 
        icon: FaList, 
        label: 'Category', 
        subItems: [
            { name: 'Category List', path: '/category/list' }, 
            { name: 'New Category', path: '/category/new' }
        ] 
    },
    { 
        icon: FaCube, 
        label: 'Attributes', 
        subItems: [
            { name: 'Attributes', path: '/attributes' }, 
            { name: 'Add Attributes', path: '/attributes/add' }
        ] 
    },
    { 
        icon: FaClipboardList, 
        label: 'Order', 
        subItems: [
            { name: 'Order List', path: '/orders/list' }, 
            { name: 'Order Tracking', path: '/orders/tracking' }
        ] 
    },
    { 
        icon: FaUser, 
        label: 'Users', 
        subItems: [
            { name: 'All Users', path: '/users' }, 
            { name: 'Add New User', path: '/users/new' }
        ] 
    },
    { 
        icon: FaUserCog, 
        label: 'Roles', 
        subItems: [
            { name: 'All Roles', path: '/roles' }, 
            { name: 'Create Role', path: '/roles/create' }
        ] 
    },
    { 
        icon: FaImages, 
        label: 'Gallery', 
        subItems: [{ name: 'Gallery', path: '/gallery' }]
    },
];

function Sidebar({ openSidebar }) {
    const [expandedItems, setExpandedItems] = useState({});
    const [activeItem, setActiveItem] = useState(null);

    const toggleItem = (index) => {
        setExpandedItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const toggleView = () => {
        openSidebar(false);
    };

    return (
        <aside className="w-64 bg-white shadow-md">
            <div className="p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">F7Team Admin</h1>
                <button 
                    onClick={toggleView} 
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                    <AiOutlineMenuUnfold size={24} />
                </button>
            </div>
            <nav className="mt-5">
                {menuItems.map((item, index) => (
                    <div key={index} className={`px-4 py-2 hover:bg-gray-100 transition-colors ${activeItem === index ? 'bg-blue-100' : ''}`}>
                        <div 
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => {
                                if (item.subItems) {
                                    toggleItem(index);
                                } else {
                                    setActiveItem(index);
                                }
                            }}
                        >
                            <div className="flex items-center">
                                <item.icon className={`mr-2 ${activeItem === index ? 'text-blue-500' : 'text-gray-500'}`} />
                                <span className={activeItem === index ? 'text-blue-500' : 'text-gray-700'}>{item.label}</span>
                            </div>
                            {item.subItems && (
                                expandedItems[index] ? <FaChevronDown className="text-gray-500" /> : <FaChevronRight className="text-gray-500" />
                            )}
                        </div>
                        {item.subItems && expandedItems[index] && (
                            <div className="ml-6 mt-2">
                                {item.subItems.map((subItem, subIndex) => (
                                    <Link
                                        to={subItem.path} 
                                        key={subIndex} 
                                        className={`block py-1 text-sm ${activeItem === `${index}-${subIndex}` ? 'text-blue-500' : 'text-gray-600'} hover:text-blue-500 hover:bg-blue-50 cursor-pointer transition-colors`}
                                        onClick={() => setActiveItem(`${index}-${subIndex}`)}
                                    >
                                        {subItem.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>
        </aside>
    );
}

export default Sidebar;
