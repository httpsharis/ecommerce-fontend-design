import React from 'react'
import RequestBG from '../../assets/requestBg.png'

function RequestSection() {
  return (
    <div 
      className="w-full mt-8 rounded-lg flex flex-col md:flex-row bg-gradient-to-r from-blue-500/10 overflow-hidden
                  md:max-w-[1200px] md:mx-auto px-0"
      style={{
        backgroundImage: `url(${RequestBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 p-6 md:p-12 justify-center bg-blue-900/40">
        <h2 className="text-[22px] md:text-[32px] font-semibold text-white leading-tight">
          An easy way to send requests to all suppliers
        </h2>
        <p className="text-[15px] md:text-[16px] text-white max-w-[440px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
        </p>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 p-4 md:p-8 flex items-center justify-center">
        <form className="bg-white p-4 md:p-5 rounded-lg shadow-md w-full max-w-[400px]">
          <h3 className="text-[18px] md:text-[20px] font-semibold mb-3">Send quote to suppliers</h3>
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