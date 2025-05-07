import React from 'react'
import Button from './Button'
import ProductBg from '../../assets/ProductS1.png'
import ProductsCard from './ProductsCard'

function ProductsSection() {
    return (
        <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg overflow-hidden mt-8">
            <div 
                className="w-full md:w-[300px] flex-shrink-0"
                style={{ backgroundImage: `url(${ProductBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="p-6 md:p-7 h-full bg-black/10">
                    <div className="flex flex-col h-full justify-between">
                        <h2 className="text-[20px] font-semibold text-white drop-shadow">Home and outdoor</h2>
                        <div className="flex gap-2 mt-6">
                            <Button />
                        </div>
                    </div>
                </div>
            </div>
            {/* Product Cards */}
            <div className="flex-1 w-full">
                <div>
                    <ProductsCard />
                </div>
            </div>
        </div>
    )
}

export default ProductsSection