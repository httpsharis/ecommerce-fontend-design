import React from 'react';
import { useNavigate } from 'react-router';
import { useGlobal } from '../../context/GlobalContext';
import { MoreVertical } from 'react-feather';

function CartProducts() {
  const navigate = useNavigate();
  const { cartItems, setCartItems, saveForLater } = useGlobal();

  // Save item for later and remove from cart
  const handleSaveForLater = (item) => {
    saveForLater(item);
    setCartItems((prev) => prev.filter((cartItem) => cartItem.id !== item.id));
  };

  // Delete item from cart
  const handleDeleteItem = (id) => {
    setCartItems((prev) => prev.filter((cartItem) => cartItem.id !== id));
  };

  // Update item quantity
  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prev) => 
      prev.map((item) => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
      {/* Mobile header - only visible on small screens */}
      <div className="flex items-center mb-4 sm:hidden">
        <button onClick={() => navigate('/')} className="mr-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2 className="text-lg font-medium">Shopping cart</h2>
      </div>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex flex-col sm:flex-row sm:gap-5 border-b border-gray-100 pb-4 sm:pb-6">
            {/* Mobile view */}
            <div className="sm:hidden flex justify-between items-start mb-3">
              <div className="flex gap-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain rounded-md border border-gray-200"
                />
                <div>
                  <h3 className="text-sm font-medium text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500">
                    Seller: {item.seller || 'Artel Market'}
                  </p>
                  <p className="text-xs text-gray-500">
                    Color: {item.color || 'blue'}, Size: {item.size || 'medium'}
                  </p>
                </div>
              </div>
              <button className="text-gray-400">
                <MoreVertical size={18} />
              </button>
            </div>

            {/* Mobile quantity controls */}
            <div className="sm:hidden flex justify-between items-center">
              <div className="flex items-center border border-gray-300 rounded">
                <button 
                  onClick={() => handleQuantityChange(item.id, Math.max(1, (item.quantity || 1) - 1))}
                  className="px-3 py-1 text-gray-500"
                >
                  −
                </button>
                <span className="px-3 py-1">{item.quantity || 1}</span>
                <button 
                  onClick={() => handleQuantityChange(item.id, (item.quantity || 1) + 1)}
                  className="px-3 py-1 text-gray-500"
                >
                  +
                </button>
              </div>
              <span className="font-medium">${item.price.toFixed(2)}</span>
            </div>

            {/* Desktop view - hidden on mobile */}
            <div className="hidden sm:block">
              <img
                src={item.image}
                alt={item.title}
                className="w-[80px] h-[80px] object-cover rounded-md border border-gray-200"
              />
            </div>
            <div className="hidden sm:block flex-1">
              <h3 className="text-[15px] font-medium text-gray-800 mb-1">{item.title}</h3>
              <p className="text-[13px] text-gray-500 mb-0.5">
                Brand: {item.brand} | Category: {item.category}
              </p>
              <p className="text-[13px] text-gray-500">Condition: {item.condition}</p>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleSaveForLater(item)}
                    className="text-blue-600 text-[13px] border border-gray-200 px-3 py-1 rounded hover:bg-gray-50"
                  >
                    Save for later
                  </button>
                  <button
                    onClick={() => handleDeleteItem(item.id)}
                    className="text-red-500 text-[13px] border border-gray-200 px-3 py-1 rounded hover:bg-gray-50"
                  >
                    Remove
                  </button>
                </div>
                <span className="font-medium text-[15px]">${item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop action buttons - hidden on mobile */}
      <div className="hidden sm:flex justify-between mt-6">
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white cursor-pointer text-[14px] flex items-center gap-2 px-3 py-1.5 rounded hover:bg-blue-700"
        >
          <span>←</span> Back to shop
        </button>
        <button
          onClick={() => setCartItems([])}
          className="text-blue-600 text-[14px] border border-gray-200 rounded p-1.5 hover:bg-gray-50"
        >
          Remove all
        </button>
      </div>
    </div>
  );
}

export default CartProducts;
