import React from 'react'
import Cover from '../../assets/hero-cover.png'
import Avatar from '../../assets/avatar.png'

function Hero() {
    return (
        <div>
            {/* Hero Section */}
            <div className="grid grid-cols-5 grid-rows-5 gap-5 border-2 border-gray-200 rounded-lg bg-white">
                
                {/* Categories List */}
                <div className="row-span-5 p-4">
                    {/* Each category is a clickable item */}
                    <span className='flex items-center justify-left py-2 text-[16px] text-gray-600 hover:bg-[#E5F1FF] hover:text-blue-600 hover:font-medium transition-all cursor-pointer rounded-md hover:pl-4'>Automobiles</span>
                    <span className='flex items-center justify-left py-2 text-[16px] text-gray-600 hover:bg-[#E5F1FF] hover:text-blue-600 hover:font-medium transition-all cursor-pointer rounded-md hover:pl-4'>Clothes and wear</span>
                    <span className='flex items-center justify-left py-2 text-[16px] text-gray-600 hover:bg-[#E5F1FF] hover:text-blue-600 hover:font-medium transition-all cursor-pointer rounded-md hover:pl-4'>Home interiors</span>
                    <span className='flex items-center justify-left py-2 text-[16px] text-gray-600 hover:bg-[#E5F1FF] hover:text-blue-600 hover:font-medium transition-all cursor-pointer rounded-md hover:pl-4'>Computer and tech</span>
                    <span className='flex items-center justify-left py-2 text-[16px] text-gray-600 hover:bg-[#E5F1FF] hover:text-blue-600 hover:font-medium transition-all cursor-pointer rounded-md hover:pl-4'>Tools, equipments</span>
                    <span className='flex items-center justify-left py-2 text-[16px] text-gray-600 hover:bg-[#E5F1FF] hover:text-blue-600 hover:font-medium transition-all cursor-pointer rounded-md hover:pl-4'>Sports and outdoor</span>
                    <span className='flex items-center justify-left py-2 text-[16px] text-gray-600 hover:bg-[#E5F1FF] hover:text-blue-600 hover:font-medium transition-all cursor-pointer rounded-md hover:pl-4'>Animal and pets</span>
                    <span className='flex items-center justify-left py-2 text-[16px] text-gray-600 hover:bg-[#E5F1FF] hover:text-blue-600 hover:font-medium transition-all cursor-pointer rounded-md hover:pl-4'>Machinery tools</span>
                    <span className='flex items-center justify-left py-2 text-[16px] text-gray-600 hover:bg-[#E5F1FF] hover:text-blue-600 hover:font-medium transition-all cursor-pointer rounded-md hover:pl-4'>More categories</span>
                </div>

                {/* Cover Photo Section */}
                <div className="col-span-3 row-span-5 cover py-4 relative">
                    <img
                        src={Cover}
                        alt="Hero Cover"
                        className='w-full h-full object-cover'
                    />

                    {/* Overlay Content */}
                    <div className='absolute top-0 left-0 w-full h-full p-10 flex flex-col justify-items-start'>
                        <h2 className='text-[26px]/7 mt-7'>Latest trending</h2>
                        <h2 className='text-[28px] font-bold'>Electronic items</h2>
                        <button className='w-30 h-10 font-semibold justify-center items-center flex flex-start rounded-lg bg-amber-50 cursor-pointer'>
                            Learn more
                        </button>
                    </div>
                </div>

                {/* User Interaction Section */}
                <div className="col-start-5 row-span-5 flex flex-col gap-4 p-4">
                    <div className="flex-1 bg-[#E3F0FF] rounded-lg p-4">
                        {/* Avatar and Greeting */}
                        <div className='flex items-center gap-2 mb-3'>
                            <img
                                src={Avatar}
                                alt="User Avatar"
                                className='w-11 h-11 rounded'
                            />
                            <div className='flex flex-col'>
                                <span className='text-[16px] text-gray-600'>Hi, User</span>
                                <span className='text-[13px] text-gray-500'>let's get started</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className='flex flex-col gap-[6px]'>
                            <button className='w-full py-[6px] text-[13px] font-medium bg-[#0067FF] text-white rounded-lg border border-[#0052CC] shadow hover:bg-[#0052CC] active:translate-y-[1px] transition-all cursor-pointer'>
                                Join now
                            </button>
                            <button className='w-full py-[6px] text-[13px] font-medium text-gray-600 bg-white rounded-lg border border-gray-200 shadow hover:bg-gray-50 active:translate-y-[1px] transition-all cursor-pointer'>
                                Log in
                            </button>
                        </div>
                    </div>

                    {/* Discount Section */}
                    <div className="bg-[#F38332] rounded-lg p-3 cursor-pointer">
                        <p className='text-[16px] text-white'>
                            Get US $10 off with a new supplier
                        </p>
                    </div>

                    {/* Additional Info Section */}
                    <div className="flex-1 bg-[#55BDC3] rounded-lg p-3 cursor-pointer">
                        <p className='text-[16px] text-white'>
                            Send quotes with supplier preferences
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero