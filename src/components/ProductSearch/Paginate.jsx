import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'

function Paginate() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 100 // This should come from your data/props

  const pages = Array.from({ length: 5 }, (_, i) => {
    const pageNum = currentPage + i - 2
    return pageNum > 0 && pageNum <= totalPages ? pageNum : null
  }).filter(Boolean)

  return (
    <div className='flex items-center justify-center gap-2 mb-3 max-w-[240px] ml-[660px] bg-white p-2 rounded-lg shadow-sm'>
      {/* Previous button */}
      <button 
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        className='p-1.5 rounded-md hover:bg-gray-100'
      >
        <ChevronLeft size={18} className="text-gray-600" />
      </button>

      {/* Page numbers */}
      {pages.map(pageNum => (
        <button
          key={pageNum}
          onClick={() => setCurrentPage(pageNum)}
          className={`w-8 h-8 rounded-md text-sm font-medium ${
            currentPage === pageNum 
              ? 'bg-blue-600 text-white' 
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          {pageNum}
        </button>
      ))}

      {/* Next button */}
      <button 
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
        className='p-1.5 rounded-md hover:bg-gray-100'
      >
        <ChevronRight size={18} className="text-gray-600" />
      </button>
    </div>
  )
}

export default Paginate