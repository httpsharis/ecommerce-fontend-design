import React from 'react'
import { X } from 'react-feather'

function FilterTags({ selectedFilters, onRemoveFilter }) {
    return (
        <div className="flex flex-wrap gap-2 mb-4 ml-3">
            {selectedFilters.map((filter) => (
                <div 
                    key={`${filter.type}-${filter.value}`}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-blue-600"
                >
                    <span className="text-sm text-gray-600">{filter.value}</span>
                    <button 
                        onClick={() => onRemoveFilter(filter)}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        <X size={14} />
                    </button>
                </div>
            ))}
        </div>
    )
}

export default FilterTags