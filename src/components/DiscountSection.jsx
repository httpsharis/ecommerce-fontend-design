import React from 'react'
import DiscountCard from './DiscountCard'


function DiscountSection() {


    return (
        <div className="flex gap-0 mt-8 h-[250px]">
            {/* Timer Section */}
            <div className="w-[300px] bg-white border border-gray-200 rounded-l-lg">
                <div className="p-7">
                    <div className="flex flex-col">
                        <h2 className="text-[20px] font-semibold">Deals and offers</h2>
                        <p className="text-[16px] text-gray-500 mt-1">Electronics equipment</p>

                        {/* Timer */}
                        <div className="flex gap-2 mt-6">
                            {[
                                { value: '04', label: 'Days' },
                                { value: '13', label: 'Hour' },
                                { value: '34', label: 'Min' },
                                { value: '56', label: 'Sec' }
                            ].map((time, index) => (
                                <div key={index} className="bg-[#606060] px-3 py-1 rounded flex flex-col items-center">
                                    <span className="text-white text-[16px]">{time.value}</span>
                                    <span className="text-white text-[11px]">{time.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Discount Cards */}
            <div className="flex-1">
                <DiscountCard />
            </div>
           
        </div>
    )
}

export default DiscountSection