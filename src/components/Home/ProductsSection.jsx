import React from 'react'
import Button from './Button'
import ProductBg from '../../assets/ProductS1.png'
import ProductsCard from './ProductsCard'

function ProductsSection() {
    return (
        <div className="flex gap-0 mt-8 h-[250px]">
            <div 
                className="w-[300px] border border-gray-200 rounded-l-lg"
                style={{ backgroundImage: `url(${ProductBg})`, backgroundSize: 'cover' }}
            >
                <div className="p-7">
                    <div className="flex flex-col">
                        <h2 className="text-[20px] font-semibold">Home and outdoor</h2>

                        {/* button */}
                        <div className="flex gap-2 mt-6">
                            <Button />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Product Cards */}
            <div className='flex-1 cursor-pointer'>
                <ProductsCard />
            </div>
        </div>
    )
}

export default ProductsSection