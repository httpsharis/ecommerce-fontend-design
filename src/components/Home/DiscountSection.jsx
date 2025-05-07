import React from 'react'
import DiscountCard from './DiscountCard'


function DiscountSection() {


    return (
        <div className="w-full max-w-[1200px] mx-auto mt-8">
            <div className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg overflow-hidden">
                {/* Timer Section */}
                <div className="w-full md:w-[300px] border-b md:border-b-0 md:border-r border-gray-200 flex-shrink-0">
                    <div className="p-6 md:p-7">
                        {/* Heading and Timer in a row */}
                        <div className="flex flex-row md:flex-col gap-2">
                            <div>
                                <h2 className="text-[18px] font-semibold">Deals and offers</h2>
                                <p className="text-[14px] text-gray-500 mt-1">Electronics equipment</p>
                            </div>
                            {/* Timer */}
                            <div className="flex gap-3 mt-2 ml-2 md:ml-0">
                                {[
                                    { value: '13', label: 'Hour' },
                                    { value: '34', label: 'Min' },
                                    { value: '56', label: 'Sec' }
                                ].map((time, index) => (
                                    <div key={index} className="bg-[#606060] px-3 py-1.5 rounded flex flex-col items-center min-w-[54px]">
                                        <span className="text-white text-[16px] font-semibold leading-tight">{time.value}</span>
                                        <span className="text-white text-[12px] leading-tight">{time.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Discount Cards - Slider on mobile */}
                <div className="w-full md:flex-1">
                    <div>
                        <DiscountCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscountSection