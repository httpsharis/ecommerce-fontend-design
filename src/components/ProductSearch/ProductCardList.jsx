import React from 'react'
import { Star, Heart } from 'react-feather'
import Iphone from './../../assets/iphone.png'
import { GoDotFill } from "react-icons/go"
import { Link } from 'react-router'


const products = [
    {
        id: 1,
        image: Iphone,
        title: 'Canon Camera EOS 2000, Black 10x zoom',
        price: 998.00,
        originalPrice: 1128.00,
        rating: 4.5,
        orders: 154,
    },
]


function ProductCardList() {
    return (
        <div className="flex flex-col gap-1 sm:gap-4 w-full ml-0 sm:ml-3">
            {products.map(product => (
                <Link 
                    key={product.id} 
                    to={`/products/${product.id}`}  
                    className='hover:no-underline'
                >
                    <div className="flex gap-3 sm:gap-6 bg-white p-3 sm:p-3 rounded-none sm:rounded border-b border-gray-100 sm:border sm:border-gray-200 hover:shadow-md transition-shadow">
                        {/* Product Image */}
                        <div className="relative w-[70px] h-[70px] sm:w-[200px] sm:h-[200px] flex-shrink-0">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-contain sm:object-cover rounded"
                            />
                        </div>
                        
                        {/* Product Info */}
                        <div className="flex-1 flex flex-col justify-between py-0 sm:py-1 sm:space-y-3">
                            <div>
                                <h3 className="text-gray-800 text-sm font-medium sm:text-lg mb-1 sm:mb-0 line-clamp-2">
                                    {product.title}
                                </h3>

                                <div className="flex items-center gap-2 mb-1 sm:mb-0">
                                    <span className="text-base font-semibold sm:text-xl">${product.price}</span>
                                    <span className="text-xs text-gray-500 line-through sm:text-sm">${product.originalPrice}</span>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-1 mb-1 sm:mb-0">
                                    <div className="flex items-center text-yellow-400">
                                        <span className="text-xs sm:text-sm">{product.rating}</span>
                                        <Star size={10} fill="currentColor" className="sm:hidden" />
                                        <Star size={14} fill="currentColor" className="hidden sm:block" />
                                    </div>
                                    <span className="text-gray-400 text-xs sm:text-sm">• {product.orders} orders</span>
                                </div>

                                <span className='text-xs text-green-600 font-light sm:text-sm'>Free shipping</span>
                            </div>

                            {/* Description - Only visible on desktop */}
                            <div className="hidden sm:flex sm:flex-col text-sm text-gray-500">
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate velit tenetur cum, aliquid repellat quis beatae?</span> 
                                <span className='mt-2 text-blue-600 hover:underline cursor-pointer'>View details</span>
                            </div>
                        </div>
                        <button className="hidden sm:block absolute top-[-10] right-25 bg-white drop-shadow-sm rounded p-1 hover:drop-shadow-lg">
                            <Heart size={30} className="text-blue-600 p-1" />
                        </button>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ProductCardList