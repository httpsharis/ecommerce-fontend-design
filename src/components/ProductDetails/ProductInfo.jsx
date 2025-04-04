import React from 'react'
import { Star, Heart, Share2 } from 'react-feather'
import { GoDotFill } from "react-icons/go"
import Iphone from './../../assets/iphone.png'

function ProductInfo() {
  return (
    <div className="grid grid-cols-[300px_500px_1fr] gap-8 bg-white p-6 rounded-lg border border-gray-200 max-w-[1200px] mx-auto">
      {/* Left Section - Product Images */}
      <div className="space-y-4">
        {/* Main Image */}
        <div className="border border-gray-200 rounded-lg p-4">
          <img 
            src={Iphone} 
            alt="Product Image" 
            className="w-full h-[300px] object-contain"
          />
        </div>
        
        {/* Thumbnail Images */}
        <div className="grid grid-cols-5 gap-2">
          {[1,2,3,4,5].map((_, index) => (
            <button 
              key={index}
              className="border border-gray-200 rounded p-2 hover:border-blue-500"
            >
              <img 
                src={Iphone} 
                alt={`Thumbnail ${index + 1}`} 
                className="w-full h-12 object-contain"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Middle Section - Product Details */}
      <div className="space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-sm">Hot</span>
            <span className="text-blue-600 text-sm">In stock</span>
          </div>
          <h1 className="text-xl font-medium text-gray-800">
            Canon Camera EOS 2000, Black 10x zoom
          </h1>
        </div>

        {/* Rating Section */}
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center">
            <div className="flex text-yellow-400">
              {[1,2,3,4,5].map((_, index) => (
                <Star key={index} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="ml-1 text-yellow-600">4.5</span>
          </div>
          <GoDotFill size={8} className="text-gray-300" />
          <span className="text-gray-500">154 orders</span>
          <GoDotFill size={8} className="text-gray-300" />
          <span className="text-green-600">Free shipping</span>
        </div>

        {/* Price Section */}
        <div className="pt-4 border-t">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold">$998.00</span>
            <span className="text-gray-500 line-through">$1128.00</span>
            <span className="text-sm text-red-600">-25%</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-6">
          <button className="px-10 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Buy now
          </button>
          <button className="px-10 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
            Add to cart
          </button>
          <button className="p-2 border border-gray-200 rounded-md hover:bg-gray-50">
            <Heart size={20} className="text-gray-600" />
          </button>
          <button className="p-2 border border-gray-200 rounded-md hover:bg-gray-50">
            <Share2 size={20} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="border-l border-gray-200 pl-8 space-y-6">
        {/* Seller Info */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://via.placeholder.com/40" 
                alt="Seller" 
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-medium">Shoptech Store</h3>
                <span className="text-sm text-gray-500">Member since 2021</span>
              </div>
            </div>
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
              Visit Store
            </button>
          </div>

          {/* Seller Stats */}
          <div className="grid grid-cols-3 gap-4 py-4 border-t border-b">
            <div className="text-center">
              <div className="text-lg font-medium">96%</div>
              <div className="text-sm text-gray-500">Positive Seller Ratings</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-medium">85%</div>
              <div className="text-sm text-gray-500">Ship on Time</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-medium">89%</div>
              <div className="text-sm text-gray-500">Chat Response Rate</div>
            </div>
          </div>
        </div>

        {/* Shipping Info */}
        <div className="space-y-4">
          <h3 className="font-medium">Delivery & Shipping</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-gray-50 rounded">
                🚚
              </div>
              <div>
                <div className="font-medium">Free Shipping</div>
                <div className="text-sm text-gray-500">Estimated delivery: 3-5 days</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-gray-50 rounded">
                📦
              </div>
              <div>
                <div className="font-medium">Secure Packaging</div>
                <div className="text-sm text-gray-500">Safe & reliable packaging</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-gray-50 rounded">
                ✨
              </div>
              <div>
                <div className="font-medium">30 Days Return</div>
                <div className="text-sm text-gray-500">Money back guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo