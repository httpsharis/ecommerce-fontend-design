import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { useNavigate } from 'react-router'
import LogoColored from '../../assets/logo-colored.svg'
import ProfileIcon from '../../assets/Profile.svg'
import CartIcon from '../../assets/Cart.svg'
import MessageIcon from '../../assets/Message.svg'
import OrderIcon from '../../assets/Orders.svg'
import Bars from '../../assets/three-bars.svg'

function Header() {

    const navigate = useNavigate();

    // Define categories for the navigation bar
    const categories = [
        { id: 1, name: 'Hot Offers', link: '#' },
        { id: 2, name: 'Gift Boxes', link: '#' },
        { id: 3, name: 'Projects', link: '#' },
        { id: 4, name: 'Menu items', link: '#' },
        { id: 5, name: 'Help', link: '#' }
    ]

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    // Define categories for the dropdown menu
    const dropdownCategories = ['Automobiles', 'Clothes and wear', 'Home interiors', 'Computer and tech', 'tools & equipment', 'Spots and outdoor', ]
    // Define categories for the search dropdown
    const searchCategories = [
        'All Category',
        'Automobiles',
        'Clothes and wear',
        'Home interiors',
        'Computer and tech',
        'Tools, equipments',
        'Sports and outdoor',
        'Animal and pets',
        'Machinery tools'
    ]

    const dropdownRef = useRef(null)

    useEffect(() => {
        // Close the dropdown menu if clicked outside
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    // State for search query and selected category
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all-category')

    // Function to handle search action
    const handleSearch = () => {
        if (!searchQuery.trim()) return
        navigate(`/search?query=${encodeURIComponent(searchQuery)}&category=${selectedCategory}`);
    }

    // Handle Enter key press for search
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    // New state for mobile drawer
    const [drawerOpen, setDrawerOpen] = useState(false);

    // New state for mobile search bar visibility
    const [showMobileSearch, setShowMobileSearch] = useState(false);

    // Function to handle navigation and close drawer
    const handleNavigation = (path) => {
        navigate(path);
        setDrawerOpen(false);
    };

    return (
        <div className="w-full top-0 bg-white z-50">
            {/* Main Header */}
            <header className="border-b border-gray-300">
                <div className="max-w-[1100px] mx-auto p-4 flex items-center justify-between">
                    {/* Logo */}
                    <div className="w-32 flex-shrink-0">
                        <Link to="/">
                            <img src={LogoColored} alt="Logo" className="h-10" />
                        </Link>
                    </div>
                    {/* Hamburger for mobile */}
                    <button
                        className="md:hidden flex items-center gap-2 font-medium hover:text-blue-600 transition-colors group"
                        onClick={() => setDrawerOpen(true)}
                    >
                        <img
                            src={Bars}
                            alt="Menu"
                            className="w-6 h-6 group-hover:opacity-80 cursor-pointer"
                        />
                    </button>
                    {/* Search and nav icons (desktop only) */}
                    <div className="hidden md:flex flex-1 items-center justify-between">
                        {/* Search Section */}
                        <div className="flex-1 max-w-[500px] mx-8">
                            <div className="flex items-center border-2 border-[#0D6EFD] rounded-lg overflow-hidden">
                                <input
                                    type="text"
                                    placeholder="Search for products..."
                                    className="px-4 py-2 w-full outline-none text-gray-700 font-Inter text-sm"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                />
                                <select
                                    className="w-32 px-3 py-2 bg-gray-50 border-l border-[#0D6EFD] font-Inter text-gray-700 text-sm cursor-pointer hover:bg-gray-100"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    {searchCategories.map((category, index) => (
                                        <option key={index} value={category.toLowerCase().replace(/\s+/g, '-')}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                                <button
                                    onClick={handleSearch}
                                    className="px-4 py-2 bg-blue-600 text-white font-Inter text-sm hover:bg-blue-700 transition-colors"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                        {/* Navigation Icons */}
                        <nav className="flex items-center gap-6">
                            <button className="hover:opacity-80 transition-opacity">
                                <img src={ProfileIcon} alt="Profile" className="w-9 h-9" />
                            </button>
                            <button className="hover:opacity-80 transition-opacity">
                                <img src={OrderIcon} alt="Orders" className="w-9 h-9" />
                            </button>
                            <button className="hover:opacity-80 transition-opacity">
                                <img src={MessageIcon} alt="Message" className="w-9 h-9" />
                            </button>
                            <button
                                className="hover:opacity-80 transition-opacity"
                                onClick={() => navigate('/cart')}
                            >
                                <img src={CartIcon} alt="Cart" className="w-9 h-9" />
                            </button>
                        </nav>
                    </div>
                </div>
                {/* Mobile Search Bar (always visible under logo) */}
                <div className="md:hidden px-4 pb-2">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="px-4 py-2 w-full outline-none text-gray-700 font-Inter text-sm border-2 border-[#0D6EFD] rounded-lg"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch();
                            }
                        }}
                    />
                </div>
            </header>

            {/* Category Bar (desktop only) */}
            <div className="border-b border-gray-200 bg-white hidden md:block">
                <div className="max-w-[1100px] mx-auto px-4">
                    <div className="flex items-center justify-between h-12">
                        {/* Left: Categories */}
                        <div className="flex items-center space-x-8 cursor-pointer">
                            {/* All Categories Button with Dropdown */}
                            <div ref={dropdownRef} className="relative cursor-pointer">
                                <button
                                    className="flex items-center gap-2 font-medium hover:text-blue-600 transition-colors group py-3"
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                >
                                    <img
                                        src={Bars}
                                        alt="Categories"
                                        className="w-6 h-6 group-hover:opacity-80 cursor-pointer"
                                    />
                                    <span className='cursor-pointer'>All categories</span>
                                </button>
                                {/* Dropdown Menu */}
                                {isDropdownOpen && (
                                    <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                                        {dropdownCategories.map((category, index) => (
                                            <button
                                                key={index}
                                                className="w-full text-left px-4 py-2 text-gray-600 hover:bg-[#E5F1FF] hover:text-blue-600 
                                                        transition-all cursor-pointer text-[15px]"
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {/* Category Links */}
                            <div className="flex items-center gap-8">
                                {categories.map(({ id, name }) => (
                                    <button
                                        key={id}
                                        className="text-[15px] text-gray-600 hover:text-blue-600 
                                                  transition-colors py-3 relative group cursor-pointer"
                                    >
                                        {name}
                                        <div className="absolute bottom-0 left-0 w-full h-0.5 
                                                      bg-blue-600 scale-x-0 group-hover:scale-x-100 
                                                      transition-transform origin-left"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                        {/* Right: Language and Shipping */}
                        <div className="flex items-center gap-4">
                            <select className="bg-transparent text-sm cursor-pointer">
                                <option>English, USD</option>
                            </select>
                            <select className="bg-transparent text-sm cursor-pointer">
                                <option>Ship to</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer - Updated with transparent background */}
            {drawerOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-20 backdrop-blur-sm flex">
                    <div className="w-64 bg-white h-full shadow-lg flex flex-col">
                        {/* User section */}
                        <div className="p-4 border-b border-gray-200 flex items-center">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div>
                                <button className="text-gray-700 font-medium">Sign in</button>
                                <span className="text-gray-500 mx-1">|</span>
                                <button className="text-gray-700 font-medium">Register</button>
                            </div>
                        </div>
                        
                        {/* Navigation links */}
                        <div className="flex-1 overflow-y-auto">
                            <nav>
                                <button 
                                    className="w-full flex items-center p-4 border-b border-gray-100 text-gray-700"
                                    onClick={() => handleNavigation('/')}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    Home
                                </button>
                                
                                <button 
                                    className="w-full flex items-center p-4 border-b border-gray-100 text-gray-700"
                                    onClick={() => handleNavigation('/categories')}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                    Categories
                                </button>
                                
                                <button 
                                    className="w-full flex items-center p-4 border-b border-gray-100 text-gray-700"
                                    onClick={() => handleNavigation('/favorites')}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    Favorites
                                </button>
                                
                                <button 
                                    className="w-full flex items-center p-4 border-b border-gray-100 text-gray-700"
                                    onClick={() => handleNavigation('/cart')}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                    My orders
                                </button>
                                
                                <button 
                                    className="w-full flex items-center p-4 border-b border-gray-100 text-gray-700"
                                    onClick={() => setDrawerOpen(false)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5" />
                                    </svg>
                                    English | USD
                                </button>
                                
                                <button 
                                    className="w-full flex items-center p-4 border-b border-gray-100 text-gray-700"
                                    onClick={() => handleNavigation('/contact')}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Contact us
                                </button>
                                
                                <button 
                                    className="w-full flex items-center p-4 border-b border-gray-100 text-gray-700"
                                    onClick={() => handleNavigation('/about')}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    About
                                </button>
                            </nav>
                            
                            {/* Footer links */}
                            <div className="p-4 space-y-3">
                                <button 
                                    className="w-full text-left text-gray-700 py-2"
                                    onClick={() => handleNavigation('/user-agreement')}
                                >
                                    User agreement
                                </button>
                                <button 
                                    className="w-full text-left text-gray-700 py-2"
                                    onClick={() => handleNavigation('/partnership')}
                                >
                                    Partnership
                                </button>
                                <button 
                                    className="w-full text-left text-gray-700 py-2"
                                    onClick={() => handleNavigation('/privacy-policy')}
                                >
                                    Privacy policy
                                </button>
                            </div>
                        </div>
                        
                        {/* Close button */}
                        <button 
                            className="absolute top-4 right-4 text-gray-500"
                            onClick={() => setDrawerOpen(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    {/* Click outside to close */}
                    <div className="flex-1" onClick={() => setDrawerOpen(false)} />
                </div>
            )}
        </div>
    )
}

export default Header