import React from 'react'
import LogoColored from '../../assets/logo-colored.svg'
import facebook from '../../assets/social/facebook3.svg'
import instagram from '../../assets/social/instagram3.svg'
import linkedin from '../../assets/social/linkedin3.svg'
import twitter from '../../assets/social/twitter3.svg'
import youtube from '../../assets/social/youtube3.svg'
import PlaystoreBtn from '../../assets/playstorebtn.svg'
import AppStoreBtn from '../../assets/appstorebtn.svg'

function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 font-Inter">
      <div className="max-w-[1130px] mx-auto py-8 px-4">
        <div className="flex flex-wrap">
          {/* Brand Section */}
          <div className="w-full lg:w-[260px] mb-8 lg:mb-0">
            <img src={LogoColored} alt="Logo" className="h-8 md:h-10" />
            <p className="mt-4 text-[13px] leading-5 text-[#505050]">
              Best information about the company goes here but now lorem ipsum is
            </p>
            {/* Social Media Links */}
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={facebook} alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={twitter} alt="Twitter" className="w-8 h-8" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={instagram} alt="Instagram" className="w-8 h-8" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={youtube} alt="YouTube" className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Links Container - Reduced gap and justified space-between */}
          <div className="flex flex-1 justify-between flex-wrap gap-y-8 pl-0 lg:pl-8">
            {/* About Section */}
            <div className="w-[140px]">
              <h3 className="text-[16px] font-medium mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#8B96A5] text-[14px] hover:text-blue-600">About Us</a></li>
                <li><a href="#" className="text-[#8B96A5] text-[14px] hover:text-blue-600">Find store</a></li>
                <li><a href="#" className="text-[#8B96A5] text-[14px] hover:text-blue-600">Categories</a></li>
                <li><a href="#" className="text-[#8B96A5] text-[14px] hover:text-blue-600">Blogs</a></li>
              </ul>
            </div>

            {/* Partnership Section */}
            <div className="hidden md:block w-[140px]">
              <h3 className="text-[16px] font-medium mb-4">Partnership</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#8B96A5] text-[14px] hover:text-blue-600">About Us</a></li>
                <li><a href="#" className="text-[#8B96A5] text-[14px] hover:text-blue-600">Find store</a></li>
                <li><a href="#" className="text-[#8B96A5] text-[14px] hover:text-blue-600">Categories</a></li>
                <li><a href="#" className="text-[#8B96A5] text-[14px] hover:text-blue-600">Blogs</a></li>
              </ul>
            </div>

            {/* For Users Section */}
            <div className="w-[140px]">
              <h3 className="text-[16px] font-medium mb-4">For users</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#8B96A5] text-[14px] hover:text-blue-600">Login</a></li>
                <li><a href="#" className="text-[#8B96A5] text-[14px] hover:text-blue-600">Register</a></li>
                <li><a href="#" className="text-[#8B96A5] text-[14px] hover:text-blue-600">My Orders</a></li>
                <li><a href="#" className="text-[#8B96A5] text-[14px] hover:text-blue-600">My Profile</a></li>
              </ul>
            </div>

            {/* Information Section */}
            <div className="w-[140px]">
              <h3 className="text-[16px] font-medium mb-4">Information</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#8B96A5] text-[14px] hover:text-blue-600">Help Center</a></li>
                <li><a href="#" className="text-[#8B96A5] text-[14px] hover:text-blue-600">Money Refund</a></li>
                <li><a href="#" className="text-[#8B96A5] text-[14px] hover:text-blue-600">Shipping</a></li>
                <li><a href="#" className="text-[#8B96A5] text-[14px] hover:text-blue-600">Contact us</a></li>
              </ul>
            </div>

            {/* App Section */}
            <div className="w-[140px]">
              <h3 className="text-[16px] font-medium mb-4">App</h3>
              <div className="flex flex-col space-y-2">
                <img 
                  src={AppStoreBtn} 
                  alt="Download on App Store" 
                  className="w-[124px] cursor-pointer hover:opacity-90 transition-opacity"
                />
                <img 
                  src={PlaystoreBtn} 
                  alt="Get it on Google Play" 
                  className="w-[124px] cursor-pointer hover:opacity-90 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - stack on mobile */}
        <div className="border-t border-[#E3E8EE] mt-8 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[#606060] text-sm text-center md:text-left">© 2024 Ecommerce.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <a href="#" className="text-[#606060] text-sm hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="text-[#606060] text-sm hover:text-blue-600">Terms of use</a>
            <a href="#" className="text-[#606060] text-sm hover:text-blue-600">Sales and Refunds</a>
            <a href="#" className="text-[#606060] text-sm hover:text-blue-600">Legal</a>
            <a href="#" className="text-[#606060] text-sm hover:text-blue-600">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer