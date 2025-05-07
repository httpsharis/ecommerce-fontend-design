import React from 'react'
import { Link } from 'react-router'

function NavigationBar() {
  return (
    <div className='w-full bg-[#F7FAFC] py-5 hidden sm:block'>
      <div className='max-w-[1240px] mx-auto px-4 sm:px-[5.5rem]'>
        <nav className='flex items-center gap-2 text-[14px] text-gray-600'>
          <Link to="/" className='hover:text-blue-600'>
            Home
          </Link>
          <span>/</span>
          <Link to="/products" className='hover:text-blue-600'>
            All Products
          </Link>
          <span>/</span>
          <span className='text-gray-400'>Mobile Accessories</span>
        </nav>
      </div>
    </div>
  )
}

export default NavigationBar