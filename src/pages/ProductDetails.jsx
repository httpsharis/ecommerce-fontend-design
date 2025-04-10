import React from 'react'
import NavigationBar from '../components/ProductSearch/NavigationBar.jsx'
import ProductInfo from '../components/ProductDetails/ProductInfo.jsx'
import ProductDescription from '../components/ProductDetails/ProductDescription.jsx'
import DiscountBanner from '../components/Cart/DiscountBanner.jsx'

function ProductDetails() {
  return (
    <div className='items-center font-Inter bg-[#F7FAFC]'>
      <NavigationBar />
      <div>
        <ProductInfo />
      </div>
      <ProductDescription />
      <div className='max-w-[1100px] mx-auto px-4'>
        <DiscountBanner />
      </div>
    </div>
  )
}

export default ProductDetails