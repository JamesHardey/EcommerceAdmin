// src/components/layouts/Sidebar.js

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    FaShoppingCart, FaList, FaCube, FaClipboardList, FaUser, FaUserCog, FaImages, FaChevronDown, FaChevronRight
} from 'react-icons/fa';
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const menuItems = [
    { 
        icon: MdOutlineDashboard, 
        label: 'Dashboard', 
        subItems: [
            { label: 'Home 01', path: '/dashboard/home-01' }
        ]
    },
    { 
        icon: FaShoppingCart, 
        label: 'Ecommerce', 
        subItems: [
            { label: 'Add Product', path: '/ecommerce/add-product' },
            { label: 'Product List', path: '/ecommerce/product-list' }
        ]
    },
    { 
        icon: FaList, 
        label: 'Category', 
        subItems: [
            { label: 'Category List', path: '/category/category-list' },
            { label: 'New Category', path: '/category/new-category' }
        ]
    },
    { 
        icon: FaCube, 
        label: 'Attributes', 
        subItems: [
            { label: 'Attributes', path: '/attributes/attributes' },
            { label: 'Add Attributes', path: '/attributes/add-attributes' }
        ]
    },
    { 
        icon: FaClipboardList, 
        label: 'Order', 
        subItems: [
            { label: 'Order List', path: '/order/order-list' },
            { label: 'Order Tracking', path: '/order/order-tracking' }
        ]
    },
    { 
        icon: FaUser, 
        label: 'Users', 
        subItems: [
            { label: 'All Users', path: '/users/all-users' },
            { label: 'Add New User', path: '/users/add-new-user' }
        ]
    },
    { 
        icon: FaUserCog, 
        label: 'Roles', 
        subItems: [
            { label: 'All Roles', path: '/roles/all-roles' },
            { label: 'Create Role', path: '/roles/create-role' }
        ]
    },
    { 
        icon: FaImages, 
        label: 'Gallery',
        path: '/gallery' // Assuming Gallery doesn't have subItems
    },
];

export default menuItems;
