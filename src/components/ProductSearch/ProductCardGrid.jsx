import React from 'react'

function ProductCardGrid({ products, onProductClick }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-4 px-1 sm:px-0">
      {products.map(product => (
        <div 
          key={product.id} 
          className="bg-white border border-gray-200 rounded-md overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => onProductClick(product.id)}
        >
          <div className="p-2 sm:p-4">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-28 sm:h-40 object-contain mb-2 sm:mb-3"
            />
            <h3 className="text-xs sm:text-sm font-medium text-gray-900 mb-1 line-clamp-2">{product.title}</h3>
            <p className="text-sm sm:text-lg font-bold text-gray-900">${product.price.toFixed(2)}</p>
            
            {/* Rating stars */}
            <div className="flex items-center mt-1">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-3 h-3 sm:w-4 sm:h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-[10px] sm:text-xs text-gray-500 ml-1">({product.reviews} reviews)</span>
            </div>
            
            {/* Free shipping tag */}
            <p className="text-[10px] sm:text-xs text-green-600 mt-1">Free Shipping</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductCardGrid