import React, { useState } from 'react'
import RelatedProducts from './RelatedProducts' // Import the new component

function ProductDescription() {
  const [activeTab, setActiveTab] = useState('description')

  const tabData = {
    description: {
      content: (
        <div className="space-y-4 w-full">
          <div className="space-y-2">
            <p className="text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit similique est nemo voluptas expedita minima impedit dolorem rem, unde libero eum ipsa sapiente inventore, excepturi blanditiis ad sint beatae cumque?
            </p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ad, quam perferendis facilis, ipsam ut rem minus aperiam dignissimos veritatis iure quibusdam nulla, eius illum dolorum corporis consectetur mollitia voluptatem!
            </p>
          </div>

          <div className="border border-gray-200 pt-1 w-[500px]">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="text-gray-500 w-[160px]">Model</td>
                  <td className="text-gray-700 ">#8786867</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="text-gray-500 ">Style</td>
                  <td className="text-gray-700 py-1">Classic style</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="text-gray-500 ">Certificate</td>
                  <td className="text-gray-700 py-1">ISO-898921212</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="text-gray-500">Size</td>
                  <td className="text-gray-700 py-1">34mm x 450mm x 19mm</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="text-gray-500 ">Memory</td>
                  <td className="text-gray-700 py-1">36GB RAM</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-2 mt-3">
            <div className="flex items-start gap-2">
              <div className="text-green-500">✓</div>
              <div>Some great feature name here</div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-green-500">✓</div>
              <div>Lorem ipsum dolor sit amet, consectetur</div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-green-500">✓</div>
              <div>Duis aute irure dolor in reprehenderit</div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-green-500">✓</div>
              <div>Some great feature name here</div>
            </div>
          </div>
        </div>
      )
    },
    reviews: {
      content: <div className="py-4">Reviews content will go here</div>
    },
    shipping: {
      content: <div className="py-4">Shipping information will go here</div>
    },
    seller: {
      content: <div className="py-4">Seller information will go here</div>
    }
  }

  return (
    <div className="flex mt-8 ml-[100px]">
      {/* Main Content Container */}
      <div className="bg-white border border-gray-200 rounded-lg max-w-[800px]">
        <div className="w-full">
          {/* Tabs Navigation */}
          <div className="flex">
            {Object.keys(tabData).map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="px-6 py-4">
            {tabData[activeTab].content}
          </div>
        </div>
      </div>

      {/* Related Products Sidebar */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 ml-4 h-fit">
        <RelatedProducts />
      </div>
    </div>
  )
}

export default ProductDescription