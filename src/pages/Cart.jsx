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
  const [localSavedItems, setLocalSavedItems] = useState(savedItems);

  // Add some default products to cart for demonstration
  useEffect(() => {
    if (cartItems.length === 0) {
      // Add a few sample products to the cart
      const sampleProducts = [
        { ...products[0], quantity: 1 },
        { ...products[1], quantity: 2 },
        { ...products[2], quantity: 1 },
        { ...products[3], quantity: 1 },
        { ...products[4], quantity: 1 },
        { ...products[5], quantity: 1 },
        { ...products[6], quantity: 1 },
        { ...products[7], quantity: 1 },
        { ...products[9], quantity: 1 },
        { ...products[12], quantity: 3 },
        { ...products[15], quantity: 1 }
      ];
      setCartItems(sampleProducts);
    }
  }, []);

  useEffect(() => {
    setLocalSavedItems(savedItems);
  }, [savedItems]);

  useEffect(() => {
    localStorage.setItem('savedItems', JSON.stringify(localSavedItems));
  }, [localSavedItems]);

  const handleMoveToCart = (item) => {
    addToCart(item);
    setLocalSavedItems(prevSaved => prevSaved.filter(savedItem => savedItem.id !== item.id));
  };

  return (
    <div className='min-h-screen font-Inter bg-[#F7FAFC] py-8'>
      <div className='max-w-[1100px] mx-auto px-4'>
        <h1 className="text-xl font-semibold mb-2">
          My cart ({cartItems ? cartItems.length : 0})
        </h1>
        <div className='grid grid-cols-[1fr_300px] gap-6'>
          <CartProducts
            cartItems={cartItems}
            onRemoveItem={handleMoveToCart}
          />
          <CartSummary />
        </div>
        <CartServices />
        <SavedItems
          savedItems={localSavedItems}
          onMoveToCart={handleMoveToCart}
        />
        <DiscountBanner />
      </div>
    </div>
  )
}

export default Cart