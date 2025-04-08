import React from 'react'
import CartProducts from '../components/Cart/CartProducts'
import CartSummary from '../components/Cart/CartSummary'
import CartServices from '../components/Cart/CartServices'
import DiscountBanner from '../components/Cart/DiscountBanner'
import SavedItems from '../components/Cart/SavedItems'

function Cart() {
  return (
    <div className='min-h-screen font-Inter bg-[#F7FAFC] py-8'>
      <div className='max-w-[1100px] mx-auto px-4'>
        <h1 className="text-xl font-semibold mb-2">My cart (3)</h1>
        <div className='grid grid-cols-[1fr_300px] gap-6'>
          <CartProducts />
          <CartSummary />
        </div>
        <CartServices />
        <SavedItems />
        <DiscountBanner />
      </div>
    </div>
  )
}

export default Cart