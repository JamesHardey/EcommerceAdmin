import React from 'react';

function Avatar({ name, src, size = 7 }) {
    // Get the initial from the first name
    const initial = name ? name.charAt(0).toUpperCase() : '';

    // Dynamically calculate the width and height using Tailwind
    const sizeClass = `w-${size} h-${size}`;

    return (
        <div
            className={`flex justify-center items-center rounded-full
                 bg-blue-500 text-white font-bold 
                 uppercase overflow-hidden ${sizeClass}`}
            style={{ fontSize: size * 0.3 }}
        >
            {src ? (
                <img
                    src={src}
                    alt={name}
                    className="w-full h-full object-cover rounded-full"
                />
            ) : (
                <div className='w-[40px] h-[40px] flex justify-center items-center'>
                    <p className='text-[18px]'>{initial}</p>
                </div>
            )}
        </div>
    );
}

export default Avatar;
