import React from 'react'

function Paginate({ currentPage = 1, totalPages = 3, onPageChange }) {
  return (
    <div className="flex justify-center items-center mt-6 mb-8">
      <button 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="flex items-center justify-center w-8 h-8 rounded-md border border-gray-200 bg-white disabled:opacity-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <div className="flex mx-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={`w-8 h-8 mx-1 rounded-md flex items-center justify-center ${
              currentPage === index + 1
                ? 'bg-blue-500 text-white'
                : 'bg-white border border-gray-200 text-gray-700'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      
      <button 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="flex items-center justify-center w-8 h-8 rounded-md border border-gray-200 bg-white disabled:opacity-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

export default Paginate