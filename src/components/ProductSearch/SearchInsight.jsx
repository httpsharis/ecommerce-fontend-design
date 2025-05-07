import React from 'react'
import { Grid, List } from 'react-feather'

function SearchInsight({ viewType, onViewChange }) {
  return (
    <div className='w-full border-b border-gray-200 bg-white ml-0 sm:ml-3'>
      <div className='max-w-[1500px] px-3 py-2 sm:px-4 sm:py-1'>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0'>
          <div className='hidden sm:block text-gray-600'>
            <span className='text-[14px]'>12,911 items in </span>
            <span className='text-[15px] font-semibold'>Mobile accessory</span>
          </div>
          <div className='flex flex-row w-full items-center justify-between sm:justify-start gap-2 sm:gap-4 sm:w-auto'>
            <select className='px-3 py-1.5 border border-gray-200 rounded bg-white text-gray-600 text-xs sm:text-sm'>
              <option>Best match</option>
              <option>Lowest price</option>
              <option>Highest price</option>
            </select>
            <div className='flex border border-gray-200 rounded p-0.5 bg-white'>
              <button 
                onClick={() => onViewChange('grid')}
                className={`p-1.5 rounded ${viewType === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}
              >
                <Grid size={16} />
              </button>
              <button 
                onClick={() => onViewChange('list')}
                className={`p-1.5 rounded ${viewType === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchInsight