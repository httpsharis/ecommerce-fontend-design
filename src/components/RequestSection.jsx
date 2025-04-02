import React from 'react'
import RequestBG from './../assets/requestbg.png'

function RequestSection() {
  return (
    <div 
      className="w-full h-[400px] mt-8 rounded-lg flex bg-gradient-to-r from-blue-500/10"
      style={{
        backgroundImage: `url(${RequestBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Left Side */}
      <div className="flex flex-col gap-4 p-12 w-1/2">
        <h2 className="text-[32px] font-semibold text-white leading-tight">
          An easy way to send requests to all suppliers
        </h2>
        <p className="text-[16px] text-white max-w-[440px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
        </p>
      </div>

      {/* Right Side */}
      <div className="w-1/2 p-8">
        <form className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-[20px] font-semibold mb-3">Send quote to suppliers</h3>
          <input 
            type="text" 
            placeholder="What item you need?" 
            className="w-full p-2.5 border border-gray-200 rounded-lg mb-2.5"
          />
          <textarea 
            placeholder="Type more details" 
            className="w-full p-2.5 border border-gray-200 rounded-lg mb-2.5 h-20"
          />
          <div className="grid grid-cols-2 gap-2.5 mb-2.5">
            <input 
              type="number" 
              placeholder="Quantity" 
              className="w-full p-2.5 border border-gray-200 rounded-lg"
            />
            <select className="w-full p-2.5 border border-gray-200 rounded-lg text-gray-500">
              <option>Pcs</option>
              <option>Box</option>
              <option>Pair</option>
            </select>
          </div>
          <button className="w-full bg-[#0D6EFD] text-white py-2.5 rounded-lg font-medium hover:bg-blue-600">
            Send inquiry
          </button>
        </form>
      </div>
    </div>
  )
}

export default RequestSection