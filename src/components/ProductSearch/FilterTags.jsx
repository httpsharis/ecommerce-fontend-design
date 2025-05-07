import React from 'react'

function FilterTags({ selectedFilters, onRemoveFilter }) {
  return (
    <div className="flex flex-wrap gap-2">
      {selectedFilters.map((filter, index) => (
        <div 
          key={index} 
          className="flex items-center bg-white border border-gray-200 rounded-md py-1 px-2 text-sm"
        >
          <span>{filter.label || `${filter.type}: ${filter.value}`}</span>
          <button 
            onClick={() => onRemoveFilter(filter)}
            className="ml-2 text-gray-400 hover:text-gray-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  )
}

export default FilterTags