import React from 'react'
import LogoColored from './../assets/logo-colored.svg'
import Profile from './../assets/Profile.svg'
import Cart from './../assets/Cart.svg'
import Message from './../assets/Message.svg'
import Order from './../assets/Orders.svg'

function Header() {
    return (
        <div className="w-full">
            <header className='sticky top-0 p-4 bg-white border-b border-gray-300 z-50'>
                <div className='max-w-[1100px] mx-auto flex items-center justify-between'>
                    {/* Logo */}
                    <div className='w-32'>
                        <img src={LogoColored} alt="Logo" className='h-10' />
                    </div>

                    {/* Search */}
                    <div className='flex-1 max-w-[500px] mx-8'>
                        <div className='flex items-center border-2 border-[#0D6EFD] rounded-lg overflow-hidden'>
                            <input
                                type="text"
                                placeholder='Search for products...'
                                className='px-4 py-2 w-full outline-none text-gray-700 font-Inter text-sm'
                            />
                            <select
                                className='w-32 px-3 py-2 bg-gray-50 border-l border-[#0D6EFD] font-Inter text-gray-700 text-sm cursor-pointer hover:bg-gray-100'
                            >
                                <option value="">All Category</option>
                            </select>
                            <button className='px-4 py-2 bg-blue-600 text-white font-Inter text-sm hover:bg-blue-700 transition-colors'>
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Navigation Icons */}
                    <nav className='flex items-center gap-6'>
                        <button>
                            <img src={Profile} alt="Profile" className='w-9 h-9' />
                        </button>
                        <button>
                            <img src={Order} alt="Orders" className='w-9 h-9' />
                        </button>
                        <button>
                            <img src={Message} alt="Messages" className='w-9 h-9' />
                        </button>
                        <button>
                            <img src={Cart} alt="Cart" className='w-9 h-9' />
                        </button>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header