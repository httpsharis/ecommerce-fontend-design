import React, { useState } from 'react'
import RelatedProducts from './RelatedProducts'

function ProductDescription() {
  const [activeTab, setActiveTab] = useState('description')

  const tabData = {
    description: {
      content: (
        <div className="space-y-4 w-full">
          <div className="space-y-2">
            <p className="text-gray-600 text-sm md:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit similique est nemo voluptas expedita minima impedit dolorem rem, unde libero eum ipsa sapiente inventore, excepturi blanditiis ad sint beatae cumque?
            </p>
            <p className="text-gray-600 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ad, quam perferendis facilis, ipsam ut rem minus aperiam dignissimos veritatis iure quibusdam nulla, eius illum dolorum corporis consectetur mollitia voluptatem!
            </p>
          </div>

          <div className="border border-gray-200 pt-1 w-full md:w-[500px] overflow-x-auto">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="text-gray-500 w-[120px] md:w-[160px] text-sm md:text-base">Model</td>
                  <td className="text-gray-700 text-sm md:text-base">#8786867</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="text-gray-500 text-sm md:text-base">Style</td>
                  <td className="text-gray-700 py-1 text-sm md:text-base">Classic style</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="text-gray-500 text-sm md:text-base">Certificate</td>
                  <td className="text-gray-700 py-1 text-sm md:text-base">ISO-898921212</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="text-gray-500 text-sm md:text-base">Size</td>
                  <td className="text-gray-700 py-1 text-sm md:text-base">34mm x 450mm x 19mm</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="text-gray-500 text-sm md:text-base">Memory</td>
                  <td className="text-gray-700 py-1 text-sm md:text-base">36GB RAM</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-2 mt-3">
            <div className="flex items-start gap-2">
              <div className="text-green-500">✓</div>
              <div className="text-sm md:text-base">Some great feature name here</div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-green-500">✓</div>
              <div className="text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur</div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-green-500">✓</div>
              <div className="text-sm md:text-base">Duis aute irure dolor in reprehenderit</div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-green-500">✓</div>
              <div className="text-sm md:text-base">Some great feature name here</div>
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
    <div className="flex flex-col md:flex-row mt-4 md:mt-8 px-4 md:px-0 md:ml-[100px]">
      {/* Main Content Container */}
      <div className="bg-white border border-gray-200 rounded-lg w-full md:max-w-[800px]">
        <div className="w-full">
          {/* Tabs Navigation */}
          <div className="flex overflow-x-auto scrollbar-hide">
            {Object.keys(tabData).map((tab) => (
              <button
                key={tab}
                className={`px-3 md:px-6 py-3 text-xs md:text-sm font-medium whitespace-nowrap ${activeTab === tab
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
          <div className="px-3 md:px-6 py-4">
            {tabData[activeTab].content}
          </div>
        </div>
      </div>

      {/* Related Products Sidebar - Hidden on mobile, shown on desktop */}
      <div className="hidden md:block bg-white border border-gray-200 rounded-lg p-4 ml-4 h-fit">
        <RelatedProducts />
      </div>
    </div>
  )
}

export default ProductDescription