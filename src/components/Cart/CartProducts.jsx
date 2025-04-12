import React from 'react';
import { useNavigate } from 'react-router';
import { useGlobal } from '../../context/GlobalContext';

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

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="space-y-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-5 border-b border-gray-100 pb-6">
            <img
              src={item.image}
              alt={item.title}
              className="w-[80px] h-[80px] object-cover rounded-md border border-gray-200"
            />
            <div className="flex-1">
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

      <div className="flex justify-between mt-6">
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white cursor-pointer text-[14px] flex items-center gap-2 px-3 py-1.5 rounded hover:bg-blue-700"
        >
          <span>←</span> Back to shop
        </button>
        <button
          onClick={() => setCartItems([])}
          className="text-blue-600 text-[14px] border-1 cursor-pointer border-gray-200 rounded p-1"
        >
          Remove all
        </button>
      </div>
    </div>
  );
}

export default CartProducts;
