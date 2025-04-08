import React from 'react'
import Watch from './../../assets/watch.png'
import { HiOutlineShoppingCart } from "react-icons/hi";


function SavedItems() {
    const savedProducts = [
        {
            id: 1,
            name: 'GoPro HERO6 4K Action Camera - Black',
            price: '99.50',
            image: Watch
        },
        {
            id: 2,
            name: 'GoPro HERO6 4K Action Camera - Black',
            price: '99.50',
            image: Watch
        },
        {
            id: 3,
            name: 'GoPro HERO6 4K Action Camera - Black',
            price: '99.50',
            image: Watch
        },
        {
            id: 4,
            name: 'GoPro HERO6 4K Action Camera - Black',
            price: '99.50',
            image: Watch
        }
    ]

    return (
        <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Saved for later</h2>
            <div className="grid grid-cols-4 gap-4">
                {savedProducts.map((product) => (
                    <div key={product.id} className="bg-white p-4 rounded-lg">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-40 object-contain mb-2"
                        />
                        <div className="space-y-2">
                            <span className="font-semibold text-[15px]">${product.price}</span>
                            <p className="text-[14px] text-gray-600 line-clamp-2">{product.name}</p>
                            <button className="text-blue-600 text-sm border border-gray-200 rounded p-2 hover:bg-gray-50 w-full flex items-center justify-center gap-2">
                                <HiOutlineShoppingCart className="text-[16px]" />
                                Move to cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SavedItems