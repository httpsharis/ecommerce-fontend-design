import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router' 
import { useNavigate } from 'react-router' 
import LogoColored from '../../assets/logo-colored.svg'
import Profile from '../../assets/Profile.svg'
import Cart from '../../assets/Cart.svg'
import Message from '../../assets/Message.svg'
import Order from '../../assets/Orders.svg'
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

    return (
        <div className="w-full top-0 bg-white z-50">
            {/* Main Header */}
            <header className="border-b border-gray-300">
                <div className="max-w-[1100px] mx-auto p-4 flex items-center justify-between">
                    {/* Logo */}
                    <div className="w-32">
                        <Link to="/"> {/* Wrap the logo with Link */}
                            <img src={LogoColored} alt="Logo" className="h-10" />
                        </Link>
                    </div>

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
                        {['Profile', 'Order', 'Message', 'Cart'].map((item) => (
                            <button 
                                key={item} 
                                className="hover:opacity-80 transition-opacity"
                                onClick={() => item === 'Cart' && navigate('/cart')} // Navigate to cart
                            >
                                <img
                                    src={eval(item)}
                                    alt={item}
                                    className="w-9 h-9"
                                />
                            </button>
                        ))}
                    </nav>
                </div>
            </header>

            {/* Category Bar */}
            <div className="border-b border-gray-200 bg-white">
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
                                        {/* Hover Indicator */}
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
        </div>
    )
}

export default Header