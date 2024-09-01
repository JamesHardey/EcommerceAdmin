import React, { useState } from 'react';
import { 
    FaHome, FaShoppingCart, FaList, FaCube, FaClipboardList, FaUser, FaUserCog, FaImages, FaChevronDown, FaChevronRight, 
    FaPlus, FaTags, FaBoxOpen, FaTruck, FaUserPlus, FaUserShield 
} from 'react-icons/fa';
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const menuItems = [
    { 
        icon: MdOutlineDashboard, 
        label: 'Dashboard', 
        subItems: ['Home 01'] 
    },
    { 
        icon: FaShoppingCart, 
        label: 'Ecommerce', 
        subItems: ['Add Product', 'Product List'] 
    },
    { 
        icon: FaList, 
        label: 'Category', 
        subItems: ['Category List', 'New Category'] 
    },
    { 
        icon: FaCube, 
        label: 'Attributes', 
        subItems: ['Attributes', 'Add Attributes'] 
    },
    { 
        icon: FaClipboardList, 
        label: 'Order', 
        subItems: ['Order List', 'Order Tracking'] 
    },
    { 
        icon: FaUser, 
        label: 'Users', 
        subItems: ['All Users', 'Add New User'] 
    },
    { 
        icon: FaUserCog, 
        label: 'Roles', 
        subItems: ['All Roles', 'Create Role'] 
    },
    { 
        icon: FaImages, 
        label: 'Gallery' 
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
                                    <div 
                                        key={subIndex} 
                                        className={`py-1 text-sm ${activeItem === `${index}-${subIndex}` ? 'text-blue-500' : 'text-gray-600'} hover:text-blue-500 hover:bg-blue-50 cursor-pointer transition-colors`}
                                        onClick={() => setActiveItem(`${index}-${subIndex}`)}
                                    >
                                        {subItem}
                                    </div>
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
