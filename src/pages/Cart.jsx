import React, { useState, useEffect } from 'react'
import CartProducts from '../components/Cart/CartProducts.jsx'
import CartSummary from '../components/Cart/CartSummary.jsx'
import CartServices from '../components/Cart/CartServices.jsx'
import DiscountBanner from '../components/Cart/DiscountBanner.jsx'
import SavedItems from '../components/Cart/SavedItems.jsx'
import { useGlobal } from "../context/GlobalContext.jsx"
import { products } from '../data/products.js' 

function Cart() {
  const { cartItems, savedItems, addToCart, setCartItems } = useGlobal();

  // Add some default products to cart for demonstration
  useEffect(() => {
    if (cartItems.length === 0) {
      // Add a few sample products to the cart
      const sampleProducts = [
        { ...products[0], quantity: 2 },
        { ...products[1], quantity: 1 },
        { ...products[2], quantity: 2 }
      ];
      setCartItems(sampleProducts);
    }
  }, [cartItems.length, setCartItems]);

  return (
    <div className='min-h-screen font-Inter bg-[#F7FAFC] py-0 sm:py-8'>
      <div className='max-w-[1100px] mx-auto px-0 sm:px-4'>
        {/* Desktop title - hidden on mobile */}
        <h1 className="hidden sm:block text-xl font-semibold mb-4">
          Shopping cart
        </h1>
        
        <div className='grid grid-cols-1 sm:grid-cols-[1fr_300px] gap-4 sm:gap-6'>
          <CartProducts />
          <div>
            <CartSummary />
          </div>
        </div>
        
        {/* Hide services on mobile */}
        <div className="hidden sm:block">
          <CartServices />
        </div>
        
        <SavedItems />
        
        {/* Hide discount banner on mobile */}
        <div className="hidden sm:block">
          <DiscountBanner />
        </div>
      </div>
    </div>
  )
}

export default Cart