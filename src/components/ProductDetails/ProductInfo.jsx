import React from 'react'
import { Star, Heart, Share2 } from 'react-feather'
import { GoDotFill } from "react-icons/go"
import Iphone from './../../assets/iphone.png'
import { MdOutlineMessage } from "react-icons/md";
import { LuSailboat } from "react-icons/lu";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";




function ProductInfo({ onSaveForLater }) {
  return (
    <div className="grid grid-cols-[1.5fr_3fr_1.5fr] gap-8 bg-white p-6 rounded-lg border border-gray-200 max-w-[1070px] mx-auto">
      {/* Left Section - Product Images */}
      <div className="space-y-4">
        {/* Main Image */}
        <div className="border border-blue-400 rounded-lg p-4">
          <img
            src={Iphone}
            alt="Product Image"
            className="w-full h-[300px] object-contain"
          />
        </div>

        {/* Thumbnail Images */}
        <div className="grid grid-cols-6 gap-2">
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <button
              key={index}
              className={`border ${index === 0 ? 'border-gray-400' : 'border-gray-200'} rounded p-1 hover:border-blue-500`}
            >
              <img
                src={Iphone}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-10 object-contain"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Middle Section - Product Details */}
      <div className="space-y-3">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-green-600 text-sm flex items-center"><span className="text-green-500 mr-1">✓</span> In stock</span>
          </div>
          <h1 className="text-xl font-medium text-gray-800">
            Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
          </h1>
        </div>

        {/* Rating Section */}
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center">
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4].map((_, index) => (
                <Star key={index} size={16} fill="currentColor" stroke="none" />
              ))}
              <Star size={16} fill="none" stroke="currentColor" />
            </div>
            <span className="ml-1 text-yellow-600 font-medium">9.3</span>
          </div>
          <GoDotFill size={8} className="text-gray-300" />
          <div className="flex items-center gap-1">
            <MdOutlineMessage size={15} className="text-gray-600" />
            <span className="text-gray-500">32 reviews</span>
          </div>
          <GoDotFill size={8} className="text-gray-300" />
          <div className="flex items-center gap-1">
            <LuSailboat size={15} className='text-gray-600' />
            <span className="text-gray-500">154 sold</span>
          </div>
        </div>

        {/* Price Section */}
        <div className=" rounded-lg">
          <div className="flex items-center gap-2 bg-orange-50 p-3 rounded-md">
            <div className="flex flex-col border-r-1 border-gray-400 pr-6">
              <span className="text-red-500 text-2xl font-semibold">$98.00</span>
              <span className="text-xs text-gray-500">50-100 pcs</span>
            </div>
            <div className="flex flex-col border-r-1 pr-6 border-gray-400">
              <span className="text-2xl font-semibold">$90.00</span>
              <span className="text-xs text-gray-500">100-700 pcs</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-semibold">$78.00</span>
              <span className="text-xs text-gray-500">700+ pcs</span>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-3">
          <div className="flex border-b text-[15px] border-gray-300 pb-2">
            <span className="w-32 text-gray-400">Price:</span>
            <span className='text-[#505050]'>Negotiable</span>
          </div>
          <div className="flex text-[15px]">
            <span className="w-32 text-gray-400">Type:</span>
            <span className='text-[#505050]'>Classic shoes</span>
          </div>
          <div className="flex text-[15px]">
            <span className="w-32 text-gray-400">Material:</span>
            <span className='text-[#505050]'>Plastic material</span>
          </div>
          <div className="flex border-b border-gray-300 pb-2 text-[15px]">
            <span className="w-32 text-gray-400">Design:</span>
            <span className='text-[#505050]'>Modern nice</span>
          </div>
          <div className="flex text-[15px]">
            <span className="w-32 text-gray-400">Customization:</span>
            <span className='text-[#505050]'>Customized logo and design custom packages</span>
          </div>
          <div className="flex text-[15px]">
            <span className="w-32 text-gray-500">Protection:</span>
            <span className='text-[#505050]'>Refund Policy</span>
          </div>
          <div className="flex border-b border-gray-300 pb-2 text-[15px]">
            <span className="w-32 text-gray-500">Warranty:</span>
            <span className='text-[#505050]'>2 years full warranty</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-4 min-w-[260px]">
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