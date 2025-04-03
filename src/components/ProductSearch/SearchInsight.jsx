import React from 'react'
import { Grid, List } from 'react-feather'

function SearchInsight({ viewType, onViewChange }) {
  return (
    <div className='w-full border-b border-gray-200 bg-white ml-3'>
      <div className='max-w-[1500px] px-4 py-1'>
        <div className='flex justify-between items-center'>
          {/* Left side - Product count */}
          <div className='text-gray-600'>
            <span className='text-[14px]'>12,911 items in </span>
            <span className='text-[15px] font-semibold'>Mobile accessory</span>
          </div>

          {/* Right side - View toggles and sort */}
          <div className='flex items-center gap-4'>
            {/* Verified Checkbox */}
            <div>
              
            </div>
            {/* View toggle buttons */}
            <div className='flex border border-gray-200 rounded p-1 bg-white'>
              <button 
                onClick={() => onViewChange('grid')}
                className={`p-1.5 rounded ${viewType === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}
              >
                <Grid size={18} />
              </button>
              <button 
                onClick={() => onViewChange('list')}
                className={`p-1.5 rounded ${viewType === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}
              >
                <List size={18} />
              </button>
            </div>

            {/* Sort dropdown */}
            <select className='px-2.5 py-1.5 border border-gray-200 rounded bg-white text-gray-600 text-sm'>
              <option>Best match</option>
              <option>Lowest price</option>
              <option>Highest price</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchInsight