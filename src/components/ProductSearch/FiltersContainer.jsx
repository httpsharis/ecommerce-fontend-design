import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Star } from 'react-feather'

// Data arrays
const categories = [
  { name: 'Mobile accessory' },
  { name: 'Electronics' },
  { name: 'Smartphones' },
  { name: 'Modern tech' }
]

const brands = [
  { name: 'Samsung' },
  { name: 'Apple' },
  { name: 'Huawei' },
  { name: 'Pocco' },
  { name: 'Lenovo' }
]

const conditions = [
  { name: 'Any' },
  { name: 'Refurbished' },
  { name: 'Brand new' },
  { name: 'Old items' }
]

const ratings = [
  { stars: 5 },
  { stars: 4 },
  { stars: 3 },
  { stars: 2 },
  { stars: 1 }
]

function FilterContainer({ onFilterChange }) {
  // State for expanded sections
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    brands: true,
    condition: true,
    rating: true
  })

  // Update the price range state
  const [priceRange, setPriceRange] = useState({
    min: 250,  // starting position for left thumb
    max: 750   // starting position for right thumb
  })

  // More precise range handler
  const handleRangeChange = (type) => (e) => {
    const value = parseInt(e.target.value)
    setPriceRange(prev => {
      if (type === 'min') {
        return { ...prev, min: Math.min(value, prev.max - 50) }
      }
      if (type === 'max') {
        return { ...prev, max: Math.max(value, prev.min + 50) }
      }
      return prev
    })
  }

  // Toggle section expansion
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleCheckboxChange = (type, value, checked) => {
    if (checked) {
      onFilterChange({ type, value })
    }
  }

  return (
    <div className="w-[200px] border-t-1 border-gray-200 ml-17 mt-1">
      {/* Category Section */}
      <div className="py-4 border-b border-gray-200">
        <div
          className="flex justify-between items-center cursor-pointer mb-5"
          onClick={() => toggleSection('category')}
        >
          <h3 className="text-[14px] font-bold text-gray-900">Category</h3>
          {expandedSections.category ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>

        {expandedSections.category && (
          <div className="space-y-2">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-[14px] hover:text-blue-600 cursor-pointer"
              >
                <input
                  type="checkbox"
                  onChange={(e) => handleCheckboxChange('category', category.name, e.target.checked)}
                  className="rounded"
                />
                <span className="text-gray-600">{category.name}</span>
              </div>
            ))}
            <button className="text-blue-600 text-[13px] mt-2 hover:underline">
              See all
            </button>
          </div>
        )}
      </div>

      {/* Brands Section */}
      <div className="border-b border-gray-200 py-4">
        <div className="flex justify-between items-center cursor-pointer mb-3">
          <h3 className="text-[15px] font-bold text-gray-900">Brands</h3>
          {expandedSections.brands ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>

        {expandedSections.brands && (
          <div className="space-y-2">
            {brands.map((brand, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`brand-${index}`}
                  className="rounded"
                  onChange={(e) => handleCheckboxChange('brand', brand.name, e.target.checked)}
                />
                <label htmlFor={`brand-${index}`} className="flex justify-between w-full text-[13px] text-gray-600">
                  {brand.name}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Price Range Section */}
      <div className="border-b border-gray-200 py-4">
        <div
          className="flex justify-between items-center cursor-pointer mb-3"
          onClick={() => toggleSection('price')}
        >
          <h3 className="text-[16px] text-gray-900">Price range</h3>
          {expandedSections.price ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>

        {expandedSections.price && (
          <div className="space-y-4 px-2">
            <div className="relative h-[30px]">
              {/* Base track with more precise height */}
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[3px] bg-gray-200 rounded">
                {/* Blue active track */}
                <div
                  className="absolute h-full bg-blue-600 rounded"
                  style={{
                    left: `${(priceRange.min / 1000) * 100}%`,
                    right: `${100 - (priceRange.max / 1000) * 100}%`
                  }}
                />
              </div>

              {/* Left thumb */}
              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={priceRange.min}
                onChange={handleRangeChange('min')}
                className="absolute w-full z-20 pointer-events-none appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[16px] [&::-webkit-slider-thumb]:w-[16px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-blue-600 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:mt-[-6px] [&::-webkit-slider-thumb]:hover:border-blue-700 [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:h-[16px] [&::-moz-range-thumb]:w-[16px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-blue-600 [&::-moz-range-thumb]:shadow-md"
              />

              {/* Right thumb */}
              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={priceRange.max}
                onChange={handleRangeChange('max')}
                className="absolute w-full z-20 pointer-events-none appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[16px] [&::-webkit-slider-thumb]:w-[16px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-blue-600 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:mt-[-6px] [&::-webkit-slider-thumb]:hover:border-blue-700 [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:h-[16px] [&::-moz-range-thumb]:w-[16px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-blue-600 [&::-moz-range-thumb]:shadow-md"
              />
            </div>

            {/* Input boxes with more precise styling */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Min"
                value={priceRange.min}
                onChange={handleRangeChange('min')}
                className="w-full p-2 text-sm border border-gray-200 rounded focus:outline-none focus:border-blue-600"
              />
              <input
                type="number"
                placeholder="Max"
                value={priceRange.max}
                onChange={handleRangeChange('max')}
                className="w-full p-2 text-sm border border-gray-200 rounded focus:outline-none focus:border-blue-600"
              />
            </div>

            <button className="w-full py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors">
              Apply
            </button>
          </div>
        )}
      </div>

      {/* Condition Section */}
      <div className="border-b border-gray-200 py-4">
        <div className="flex justify-between items-center cursor-pointer mb-3">
          <h3 className="text-[16px] text-gray-900">Condition</h3>
          {expandedSections.condition ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>

        {expandedSections.condition && (
          <div className="space-y-2">
            {conditions.map((condition, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`condition-${index}`}
                  className="rounded"
                  onChange={(e) => handleCheckboxChange('condition', condition.name, e.target.checked)}
                />
                <label htmlFor={`condition-${index}`} className="flex justify-between w-full text-[14px] text-gray-600">
                  {condition.name}
                  <span className="text-gray-400">{condition.count}</span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Ratings Section */}
      <div className="py-4">
        <div className="flex justify-between items-center cursor-pointer mb-3">
          <h3 className="text-[16px] text-gray-900">Ratings</h3>
          {expandedSections.rating ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>

        {expandedSections.rating && (
          <div className="space-y-2">
            {ratings.map((rating, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`rating-${index}`}
                  className="rounded"
                  onChange={(e) => handleCheckboxChange('rating', rating.stars, e.target.checked)}
                />
                <label htmlFor={`rating-${index}`} className="flex justify-between w-full text-[14px] text-gray-600">
                  <div className="flex items-center gap-1">
                    {[...Array(rating.stars)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-400">{rating.count}</span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default FilterContainer