import React from 'react'
import { Star, Heart } from 'react-feather'
import { GoDotFill } from "react-icons/go"
import { Link } from 'react-router'  

function ProductCardGrid({ products }) {
    return (
        <div className="grid grid-cols-3 gap-4 ml-3">
            {products.map(product => (
                <Link 
                    key={product.id} 
                    to={`/products/${product.id}`}
                    className='hover:no-underline'
                >
                    <div className="bg-white p-4 rounded border border-gray-200 hover:shadow-md transition-shadow">
                        {/* Product Image */}
                        <div className="relative mb-4">
                            <img 
                                src={product.image} 
                                alt={product.title}
                                className="w-full h-48 object-contain"
                            />
                            <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full hover:bg-gray-100 shadow-sm">
                                <Heart size={16} className="text-blue-600" />
                            </button>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-2">
                            {/* Price */}
                            <div className="flex gap-2 items-center">
                                <span className="text-xl font-semibold">${product.price}</span>
                                <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                            </div>

                            {/* Title */}
                            <h3 className="text-gray-800 text-sm line-clamp-2">
                                {product.title}
                            </h3>

                            {/* Rating & Orders */}
                            <div className="flex items-center gap-1">
                                <div className="flex items-center text-yellow-400">
                                    <Star size={14} fill="currentColor" />
                                    <span className="text-sm ml-1">{product.rating}</span>
                                </div>
                                <GoDotFill size={10} fill='gray' className='ml-1' />
                                <span className="text-gray-400 text-sm">({product.orders})</span>
                            </div>

                            {/* Shipping & Location */}
                            <div className="flex items-center text-sm gap-1">
                                <span className="text-green-600">{product.shipping}</span>
                                <GoDotFill size={10} fill='gray' />
                                <span className="text-gray-500">From {product.location}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ProductCardGrid