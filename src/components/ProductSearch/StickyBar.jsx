import React, { useState } from 'react';

function StickyBar({ product, onAddToCart }) {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (amount) => {
        setQuantity(prev => Math.max(1, prev + amount));
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex justify-between items-center z-50">
            <span className="text-sm font-bold">{product.title.slice(0, 20)}...</span>
            <div className="flex items-center">
                <button onClick={() => handleQuantityChange(-1)} className="px-2">-</button>
                <span className="px-2">{quantity}</span>
                <button onClick={() => handleQuantityChange(1)} className="px-2">+</button>
            </div>
            <button 
                onClick={() => onAddToCart(product, quantity)} 
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                🛒 Add to Cart
            </button>
        </div>
    );
}

export default StickyBar;