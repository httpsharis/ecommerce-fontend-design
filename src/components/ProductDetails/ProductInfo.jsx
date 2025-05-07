import React from 'react'
import { Star, Heart } from 'react-feather'
import { GoDotFill } from "react-icons/go"
import Iphone from './../../assets/iphone.png'
import { MdOutlineMessage } from "react-icons/md";
import { LuSailboat } from "react-icons/lu";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";




function ProductInfo({ onSaveForLater }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr_1.5fr] gap-4 md:gap-8 bg-white p-4 md:p-6 rounded-lg border border-gray-200 max-w-[1070px] mx-auto">
      {/* Left Section - Product Images */}
      <div className="space-y-4">
        {/* Main Image */}
        <div className="border border-blue-400 rounded-lg p-2 md:p-4">
          <img
            src={Iphone}
            alt="Product Image"
            className="w-full h-[200px] md:h-[300px] object-contain"
          />
        </div>

        {/* Thumbnail Images */}
        <div className="grid grid-cols-6 gap-1 md:gap-2">
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <button
              key={index}
              className={`border ${index === 0 ? 'border-gray-400' : 'border-gray-200'} rounded p-1 hover:border-blue-500`}
            >
              <img
                src={Iphone}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-8 md:h-10 object-contain"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Middle Section - Product Details */}
      <div className="space-y-2 md:space-y-3 col-span-1 md:col-span-1">
        {/* Header */}
        <div className="space-y-1 md:space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-green-600 text-xs md:text-sm flex items-center"><span className="text-green-500 mr-1">✓</span> In stock</span>
          </div>
          <h1 className="text-lg md:text-xl font-medium text-gray-800">
            Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
          </h1>
        </div>

        {/* Rating Section */}
        <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm flex-wrap">
          <div className="flex items-center">
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4].map((_, index) => (
                <Star key={index} size={14} className="md:w-4 md:h-4" fill="currentColor" stroke="none" />
              ))}
              <Star size={14} className="md:w-4 md:h-4" fill="none" stroke="currentColor" />
            </div>
            <span className="ml-1 text-yellow-600 font-medium">9.3</span>
          </div>
          <GoDotFill size={6} className="text-gray-300 hidden md:block" />
          <div className="flex items-center gap-1">
            <MdOutlineMessage size={13} className="text-gray-600 md:w-4 md:h-4" />
            <span className="text-gray-500">32 reviews</span>
          </div>
          <GoDotFill size={6} className="text-gray-300 hidden md:block" />
          <div className="flex items-center gap-1">
            <LuSailboat size={13} className='text-gray-600 md:w-4 md:h-4' />
            <span className="text-gray-500">154 sold</span>
          </div>
        </div>

        {/* Price Section */}
        <div className="rounded-lg">
          <div className="flex items-center gap-2 bg-orange-50 p-2 md:p-3 rounded-md overflow-x-auto">
            <div className="flex flex-col border-r-1 border-gray-400 pr-3 md:pr-6 min-w-[80px]">
              <span className="text-red-500 text-lg md:text-2xl font-semibold">$98.00</span>
              <span className="text-[10px] md:text-xs text-gray-500">50-100 pcs</span>
            </div>
            <div className="flex flex-col border-r-1 pr-3 md:pr-6 border-gray-400 min-w-[80px]">
              <span className="text-lg md:text-2xl font-semibold">$90.00</span>
              <span className="text-[10px] md:text-xs text-gray-500">100-700 pcs</span>
            </div>
            <div className="flex flex-col min-w-[80px]">
              <span className="text-lg md:text-2xl font-semibold">$78.00</span>
              <span className="text-[10px] md:text-xs text-gray-500">700+ pcs</span>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-2 md:space-y-3">
          <div className="flex border-b text-[13px] md:text-[15px] border-gray-300 pb-1 md:pb-2">
            <span className="w-24 md:w-32 text-gray-400">Price:</span>
            <span className='text-[#505050]'>Negotiable</span>
          </div>
          <div className="flex text-[13px] md:text-[15px]">
            <span className="w-24 md:w-32 text-gray-400">Type:</span>
            <span className='text-[#505050]'>Classic shoes</span>
          </div>
          <div className="flex text-[13px] md:text-[15px]">
            <span className="w-24 md:w-32 text-gray-400">Material:</span>
            <span className='text-[#505050]'>Plastic material</span>
          </div>
          <div className="flex border-b border-gray-300 pb-1 md:pb-2 text-[13px] md:text-[15px]">
            <span className="w-24 md:w-32 text-gray-400">Design:</span>
            <span className='text-[#505050]'>Modern nice</span>
          </div>
          <div className="flex text-[13px] md:text-[15px]">
            <span className="w-24 md:w-32 text-gray-400">Customization:</span>
            <span className='text-[#505050] flex-1'>Customized logo and design custom packages</span>
          </div>
          <div className="flex text-[13px] md:text-[15px]">
            <span className="w-24 md:w-32 text-gray-500">Protection:</span>
            <span className='text-[#505050]'>Refund Policy</span>
          </div>
          <div className="flex border-b border-gray-300 pb-1 md:pb-2 text-[13px] md:text-[15px]">
            <span className="w-24 md:w-32 text-gray-500">Warranty:</span>
            <span className='text-[#505050]'>2 years full warranty</span>
          </div>
        </div>
      </div>

      {/* Right Section - Supplier Info (hidden on mobile, shown as a separate section) */}
      <div className="flex flex-col gap-4 min-w-[260px] mt-4 md:mt-0">
        {/* Supplier Card */}
        <div className="p-4 border rounded-lg border-gray-200 shadow-sm space-y-4">
          <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
            <div className="w-10 h-10 rounded bg-teal-100 flex items-center justify-center text-teal-600 font-semibold">
              R
            </div>
            <div>
              <div className="text-sm text-gray-500">Supplier</div>
              <div className="font-medium">Guanjoi Trading LLC</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <img src="https://flagcdn.com/w20/de.png" alt="Germany" className="w-4 h-3" />
              Germany, Berlin
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MdOutlineVerifiedUser size={16} />
              Verified Seller
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <IoIosGlobe size={16} />
              Worldwide shipping
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium">
              Send inquiry
            </button>
            <button className="w-full text-center text-sm text-blue-600 border-2 border-gray-300 rounded py-2">
              Seller's profile
            </button>
          </div>
        </div>

        {/* Save for Later */}
        <div
          className="flex items-center justify-center gap-2 text-sm p-2 cursor-pointer"
          onClick={() => onSaveForLater({ id: 1, name: 'Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle', image: Iphone })}
        >
          <Heart size={18} className="text-blue-600" />
          <span className="text-blue-600">Save for later</span>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo