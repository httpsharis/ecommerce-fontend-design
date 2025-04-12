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
        <div className="flex-1 bg-white border border-gray-200 border-l-0 h-full p-3 cursor-pointer">
            <div className="grid grid-cols-5 h-full">
                {products.map((product, index) => (
                    <div 
                        key={index} 
                        className={`flex flex-col items-center justify-center p-4 
                                  ${index !== products.length - 1 ? 'border-r border-gray-200' : ''}`}
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