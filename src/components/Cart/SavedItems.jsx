import React from 'react';

function SavedItems({ savedItems, onMoveToCart }) {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">Saved for later</h2>
      <div className="grid grid-cols-4 gap-4">
        {savedItems.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain mb-2"
            />
            <div className="space-y-2">
              <span className="font-semibold text-[15px]">${product.price}</span>
              <p className="text-[14px] text-gray-600 line-clamp-2">{product.name}</p>
              <button 
                onClick={() => onMoveToCart(product)} // Use handler from props
                className="text-blue-600 text-sm border border-gray-200 rounded p-2 hover:bg-gray-50 w-full flex items-center justify-center gap-2"
              >
                Move to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavedItems;