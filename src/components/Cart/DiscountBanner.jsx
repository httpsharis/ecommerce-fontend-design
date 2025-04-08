import React from 'react'

function DiscountBanner() {
  return (
    <div className="bg-blue-600 rounded-lg p-8 mb-6 flex justify-between items-center mt-6">
      <div>
        <h2 className="text-white font-medium text-lg mb-1">Super discount on more than 100 USD</h2>
        <p className="text-blue-100 text-sm">Have you ever finally just write dummy info</p>
      </div>
      <button className="bg-[#FF9017] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#FF9017]">
        Shop now
      </button>
    </div>
  )
}

export default DiscountBanner