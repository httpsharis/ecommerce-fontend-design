import React from 'react'
import NavigationBar from '../components/ProductSearch/NavigationBar'
import ProductInfo from '../components/ProductDetails/ProductInfo'

function ProductDetails() {
  return (
    <div className='items-center font-Inter bg-[#F7FAFC]'>
      <NavigationBar />
      <div>
        <ProductInfo />
      </div>
    </div>
  )
}

export default ProductDetails