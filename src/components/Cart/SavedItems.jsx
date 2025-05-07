import React from 'react';
import { useGlobal } from '../../context/GlobalContext';

function SavedItems() {
  const { savedItems, addToCart, setSavedItems } = useGlobal();

  const handleMoveToCart = (item) => {
    addToCart(item);
    setSavedItems(prev => prev.filter(savedItem => savedItem.id !== item.id));
  };

  const handleRemove = (id) => {
    setSavedItems(prev => prev.filter(item => item.id !== id));
  };

  if (!savedItems || savedItems.length === 0) return null;

  return (
    <div className="mt-6 sm:mt-8">
      <h2 className="text-lg font-medium mb-4">Saved for later</h2>
      
      {/* Mobile saved items */}
      <div className="sm:hidden space-y-4">
        {savedItems.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-sm font-medium">{item.title}</h3>
                <p className="text-sm font-medium">${item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => handleMoveToCart(item)}
                className="text-blue-600 text-xs px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 flex-1"
              >
                Move to cart
              </button>
              <button 
                onClick={() => handleRemove(item.id)}
                className="text-red-500 text-xs px-3 py-1 border border-gray-200 rounded hover:bg-gray-50"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Desktop saved items */}
      <div className="hidden sm:grid grid-cols-3 gap-4">
        {savedItems.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-sm font-medium">{item.title}</h3>
                <p className="text-sm font-medium">${item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex mt-auto pt-2 gap-2">
              <button 
                onClick={() => handleMoveToCart(item)}
                className="text-blue-600 text-xs px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 flex-1"
              >
                Move to cart
              </button>
              <button 
                onClick={() => handleRemove(item.id)}
                className="text-red-500 text-xs px-3 py-1 border border-gray-200 rounded hover:bg-gray-50"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavedItems;