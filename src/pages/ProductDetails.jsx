import React from 'react'
import NavigationBar from '../components/ProductSearch/NavigationBar'
import ProductInfo from '../components/ProductDetails/ProductInfo'
import ProductDescription from '../components/ProductDetails/ProductDescription'
import DiscountBanner from '../components/Cart/DiscountBanner'

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