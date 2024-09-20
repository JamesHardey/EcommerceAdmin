import React, { useState } from 'react';
import { FiPackage, FiTruck, FiCheck } from 'react-icons/fi';
import { Text } from './Text';

const OrderTracking = ({ orderId = '12345' }) => {
  const [trackingSteps, setTrackingSteps] = useState([
    { id: 1, title: 'Order Placed', date: '2023-05-15', completed: true },
    { id: 2, title: 'Processing', date: '2023-05-16', completed: true },
    { id: 3, title: 'Shipped', date: '2023-05-17', completed: true },
    { id: 4, title: 'Out for Delivery', date: '2023-05-18', completed: false },
    { id: 5, title: 'Delivered', date: '', completed: false },
  ]);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <Text as="h1" size="2xl" weight="bold" className="mb-6">
        Order Tracking - #{orderId}
      </Text>
      <div className="relative">
        {trackingSteps.map((step, index) => (
          <div key={step.id} className="flex items-center mb-8 last:mb-0">
            <div className={`flex items-center justify-center w-12 h-12 rounded-full ${
              step.completed ? 'bg-green-500' : 'bg-gray-300'
            }`}>
              {step.id === 1 && <FiPackage className="w-6 h-6 text-white" />}
              {step.id === 3 && <FiTruck className="w-6 h-6 text-white" />}
              {step.id === 5 && <FiCheck className="w-6 h-6 text-white" />}
              {(step.id === 2 || step.id === 4) && (
                <div className="w-4 h-4 bg-white rounded-full"></div>
              )}
            </div>
            <div className="ml-4 flex-grow">
              <Text weight="semibold" size="lg">{step.title}</Text>
              <Text size="sm" intent="secondary">{step.date || 'Pending'}</Text>
            </div>
            {index < trackingSteps.length - 1 && (
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-300 -z-10"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTracking;