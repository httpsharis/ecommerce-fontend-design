import React from 'react'
import Visa from './../../assets/visa.svg'
import Mastercard from './../../assets/mastercard.svg'
import ApplePay from './../../assets/applepay.svg'
import Paypal from './../../assets/paypal.svg'
import AmericanExpress from './../../assets/americanexpress.svg'

function CartSummary() {
  return (
    <div className="space-y-4">
      {/* Coupon Section */}
      <div className="bg-white p-4 rounded-lg shadow-sm w-[300px]">
        <h3 className="text-[14px] text-gray-600 mb-2.5">Have a coupon?</h3>
        <div className="flex w-full">
          <input 
            type="text" 
            placeholder="Add coupon" 
            className="border-2 border-r-0 border-gray-200 rounded-l py-2 px-3 w-[200px] text-[13px] focus:outline-none focus:border-gray-300 placeholder-gray-400"
          />
          <button className="text-blue-600 font-medium text-[13px] px-4 py-2 border-2 border-gray-200 rounded-r hover:bg-gray-50">
            Apply
          </button>
        </div>
      </div>

      {/* Checkout Summary Section */}
      <div className="bg-white p-4 rounded-lg shadow-sm w-[300px]">
        <div className="space-y-2">
          <div className="flex justify-between text-[14px]">
            <span className="text-gray-600">Subtotal:</span>
            <span className="font-medium">$1403.97</span>
          </div>
          <div className="flex justify-between text-[14px]">
            <span className="text-gray-600">Discount:</span>
            <span className="text-red-500">-$60.00</span>
          </div>
          <div className="flex justify-between text-[14px]">
            <span className="text-gray-600">Tax:</span>
            <span className="text-green-500">+$14.00</span>
          </div>
          <div className="flex justify-between font-semibold text-[16px] pt-3 border-t border-gray-200">
            <span>Total:</span>
            <span>$1357.97</span>
          </div>

          <button className="w-full bg-green-500 text-white py-2.5 rounded-md text-[14px] font-medium hover:bg-green-600 mt-4">
            Checkout
          </button>

          <div className="flex justify-center items-center gap-3 mt-2">
            <img src={Visa} alt="visa" className="h-6 opacity-75" />
            <img src={Mastercard} alt="mastercard" className="h-6 opacity-75" />
            <img src={Paypal} alt="paypal" className="h-6 opacity-75" />
            <img src={ApplePay} alt="apple pay" className="h-6 opacity-75" />
            <img src={AmericanExpress} alt="american express" className="h-6 opacity-75" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartSummary