import React from 'react'
import { Star, Heart } from 'react-feather'
import Iphone from './../../assets/iphone.png'
import { GoDotFill } from "react-icons/go"
import { Link } from 'react-router'

// Sample product data - you can move this to a separate file later
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
    // Add more products...
]


function ProductCardList() {
    return (
        <div className="flex flex-col gap-4 w-full ml-3">
            {products.map(product => (
                <Link 
                    key={product.id} 
                    to={`/products/${product.id}`}  // Change from /product to /products
                    className='hover:no-underline'
                >
                    <div className="flex gap-6 bg-white p-3 rounded border border-gray-200 hover:shadow-md transition-shadow">
                        {/* Product Image */}
                        <div className="relative w-[200px] flex-shrink-0">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-[200px] object-cover rounded"
                            />
                        </div>
                        

                        {/* Product Info */}
                        <div className="flex-1 space-y-3">
                            <h3 className="text-gray-800 text-lg font-medium">
                                {product.title}
                            </h3>

                            <div className="flex items-center gap-2">
                                <span className="text-xl font-semibold">${product.price}</span>
                                <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-1">
                                <div className="flex items-center text-yellow-400">
                                    <Star size={14} fill="currentColor" />
                                    <Star size={14} fill="currentColor" />
                                    <Star size={14} fill="currentColor" />
                                    <Star size={14} fill="currentColor" />
                                    <span className="text-sm ml-1">{product.rating}</span>
                                    <GoDotFill size={10} fill='gray' className='ml-1' />
                                </div>
                                <span className="text-gray-400 text-sm">({product.orders}) orders</span>
                                <GoDotFill size={10} fill='gray' className='ml-1' />
                                <span className='text-sm ml-1 text-green-600 font-light'>Free shipping</span>
                            </div>

                            {/* Shipping & Location */}
                            <div className="flex flex-col text-sm text-gray-500 ">
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate velit tenetur cum, aliquid repellat quis beatae?</span> 
                                <span className='mt-2 text-blue-600 hover:underline cursor-pointer'>View details</span>
                            </div>
                        </div>
                        <button className="absolute top-[-10] right-25 bg-white drop-shadow-sm rounded p-1 hover:drop-shadow-lg">
                            <Heart size={30} className="text-blue-600 p-1" />
                        </button>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ProductCardList