import React from 'react'
import NavigationBar from '../components/ProductSearch/NavigationBar.jsx'
import ProductInfo from '../components/ProductDetails/ProductInfo.jsx'
import ProductDescription from '../components/ProductDetails/ProductDescription.jsx'
import DiscountBanner from '../components/Cart/DiscountBanner.jsx'
import { Heart } from 'react-feather'
import { useGlobal } from "./../context/GlobalContext.jsx";
import { products } from './../data/products.js'; 

function ProductDetails({ productId }) { 
  const { addToCart, saveForLater } = useGlobal(); 

  // Find the product by ID
  const product = products.find(p => p.id === productId);

  const handleAddToCart = () => {
    if (product) {
      console.log('Adding product to cart:', product); 
      addToCart({ ...product, quantity: 1 }); 
    } else {
      console.error('Product not found'); 
    }
  };

  const handleSaveForLater = () => {
    if (product) {
      console.log('Saving product for later:', product); 
      saveForLater(product); 
    } else {
      console.error('Product not found'); 
    }
  };

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

      {/* Sticky Button */}
      <div className="fixed font-Inter bottom-5 right-5 flex gap-4 z-50">
        <button 
          className="bg-blue-600 text-white rounded-full px-5 py-4 shadow-lg hover:bg-blue-800"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        <button 
          className="bg-gray-800 text-white rounded-full p-5 shadow-lg hover:bg-gray-700"
          onClick={handleSaveForLater}
        >
          <Heart size={18} />
        </button>
      </div>
    </div>
  )
}

export default ProductDetails