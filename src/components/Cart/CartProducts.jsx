import React from 'react'
import Watch from './../../assets/watch.png'

function CartProducts() {
  const cartItems = [
    {
      id: 1,
      name: 'T-shirts with multiple colors, for men and lady',
      price: '79.99',
      quantity: 9,
      size: 'medium',
      color: 'blue',
      material: 'Plastic',
      seller: 'Arial Market',
      image: Watch,
    },
    {
      id: 2,
      name: 'T-shirts with multiple colors, for men and lady',
      price: '39.00',
      quantity: 3,
      size: 'medium',
      color: 'blue',
      material: 'Plastic',
      seller: 'Best factory LLC',
      image: Watch,
    },
    {
      id: 3,
      name: 'T-shirts with multiple colors, for men and lady',
      price: '170.50',
      quantity: 1,
      size: 'medium',
      color: 'blue',
      material: 'Plastic',
      seller: 'Arial Market',
      image: Watch,
    },
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      
      <div className="space-y-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-5 border-b border-gray-100 pb-6">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-[80px] h-[80px] object-cover rounded-md border border-gray-200"
            />
            
            <div className="flex-1">
              <h3 className="text-[15px] font-medium text-gray-800 mb-1">{item.name}</h3>
              <p className="text-[13px] text-gray-500 mb-0.5">
                Size: {item.size}, Color: {item.color}, Material: {item.material}
              </p>
              <p className="text-[13px] text-gray-500">Seller: {item.seller}</p>
              
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-3">
                  <button className="text-red-500 text-[13px] border border-gray-200 px-3 py-1 rounded hover:bg-gray-50">
                    Remove
                  </button>
                  <button className="text-blue-600 text-[13px] border border-gray-200 px-3 py-1 rounded hover:bg-gray-50">
                    Save for later
                  </button>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-1">
                    <span className="text-[13px] text-gray-500">Qty:</span>
                    <select 
                      value={item.quantity}
                      className="border border-gray-200 rounded px-2 py-1 text-[13px] text-gray-700 w-16"
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                      ))}
                    </select>
                  </div>
                  <span className="font-medium text-[15px]">${item.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <button className="bg-blue-600 text-white text-[14px] flex items-center gap-2 px-3 py-1.5 rounded hover:bg-blue-700">
          <span>←</span> Back to shop
        </button>
        <button className="text-blue-600 text-[14px] border-1 border-gray-200 rounded p-1">Remove all</button>
      </div>
    </div>
  )
}

export default CartProducts