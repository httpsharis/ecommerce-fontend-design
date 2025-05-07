import React from 'react'
import Watch from '../../assets/Watch.png'
import Laptop from '../../assets/Laptop.png'
import Headphones from '../../assets/Headphones.png'
import Camera from '../../assets/Camera.png'
import SmartPhones from '../../assets/Phone.png'

function DiscountCard() {

    // Product data
    const products = [
        { name: 'Smart watches', discount: '-25%', image: Watch },
        { name: 'Laptop', discount: '-25%', image: Laptop },
        { name: 'GoPro camera', discount: '-25%', image: Headphones },
        { name: 'Headphones', discount: '-25%', image: Camera },
        { name: 'Smart phones', discount: '-25%', image: SmartPhones },
    ]

    return (
        <div className="flex-1 bg-white h-full p-3 cursor-pointer">
            {/* Use flex with overflow-x-auto and min-w on mobile, grid on md+ */}
            <div className="flex gap-2 overflow-x-auto min-w-[600px] scrollbar-hide md:min-w-0 md:w-full md:grid md:grid-cols-5 md:gap-0 h-full">
                {products.map((product, index) => (
                    <div 
                        key={index} 
                        className={`flex-shrink-0 w-[180px] md:w-auto flex flex-col items-center justify-center p-4 
                                  ${index !== products.length - 1 ? 'md:border-r md:border-gray-200' : ''}`}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-[120px] h-[120px] object-contain"
                        />
                        <h3 className="text-[16px] text-gray-600 mt-3">{product.name}</h3>
                        <span className="inline-block px-3 py-1 bg-[#FFE3E3] text-[#EB001B] 
                                     text-[13px] rounded-xl mt-2">
                            {product.discount}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DiscountCard