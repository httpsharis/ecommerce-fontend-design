import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import NavigationBar from '../components/ProductSearch/NavigationBar'
import FilterContainer from '../components/ProductSearch/FiltersContainer'
import SearchInsight from '../components/ProductSearch/SearchInsight'
import FilterTags from '../components/ProductSearch/FilterTags'
import ProductCardGrid from '../components/ProductSearch/ProductCardGrid'
import ProductCardList from '../components/ProductSearch/ProductCardList'
import Paginate from '../components/ProductSearch/Paginate'

// Sample product data
const sampleProducts = [
  {
    id: 1,
    title: 'Car Phone Mount Holder',
    price: 12.99,
    rating: 4.5,
    reviews: 1,
    image: 'https://via.placeholder.com/150',
    description: 'Universal car phone mount holder with suction cup for dashboard or windshield.'
  },
  {
    id: 2,
    title: 'Apple iPhone 15 Pro',
    price: 1099.99,
    rating: 4.8,
    reviews: 1,
    image: 'https://via.placeholder.com/150',
    description: 'Latest iPhone with A17 Pro chip, 48MP camera, and titanium design.'
  },
  // Add more sample products as needed
];

function ProductSearch() {
  const navigate = useNavigate();
  const [products, setProducts] = useState(sampleProducts);
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [viewType, setViewType] = useState('list'); // Default to list view for mobile
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Handle filter changes
  const handleFilterChange = (filter) => {
    const newFilters = [...selectedFilters, filter];
    setSelectedFilters(newFilters);
    // Apply filters to products (simplified)
    setFilteredProducts(products);
  };

  // Remove a filter
  const handleRemoveFilter = (filterToRemove) => {
    const newFilters = selectedFilters.filter(
      filter => filter.type !== filterToRemove.type || filter.value !== filterToRemove.value
    );
    setSelectedFilters(newFilters);
    // Re-apply remaining filters (simplified)
    setFilteredProducts(products);
  };

  // Handle product click - Navigate to product detail page
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Fetch products for the new page
  };

  // Use list view by default on mobile, grid on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setViewType('list');
      }
    };
    
    // Set initial view type
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='w-full font-Inter bg-[#F7FAFC]'>
      <NavigationBar />
      
      <div className='max-w-[1200px] mx-auto px-4'>
        {/* Remove the duplicate breadcrumb section */}
        
        <div className='grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8'>
          {/* Left Sidebar - Filters (desktop only) */}
          <div className='hidden md:block'>
            <FilterContainer onFilterChange={handleFilterChange} />
          </div>

          {/* Mobile Filters - Only visible on mobile */}
          <div className='md:hidden mb-4'>
            <button 
              className='w-full py-2 px-4 bg-white border border-gray-200 rounded-md flex items-center justify-between'
              onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
              <span>Filters</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {showMobileFilters && (
              <div className="mt-2 bg-white border border-gray-200 rounded-md p-4">
                <FilterContainer onFilterChange={handleFilterChange} />
              </div>
            )}
          </div>

          {/* Right Content Area */}
          <div className='space-y-4'>
            <SearchInsight 
              viewType={viewType} 
              onViewChange={setViewType} 
              totalItems={12911}
              category="Mobile accessory"
            />
            
            {/* Filter Tags */}
            {selectedFilters.length > 0 && (
              <FilterTags 
                selectedFilters={selectedFilters} 
                onRemoveFilter={handleRemoveFilter}
              />
            )}

            {/* Products Grid/List */}
            <div className='w-full'>
              {viewType === 'grid' ? (
                <ProductCardGrid 
                  products={filteredProducts} 
                  onProductClick={handleProductClick}
                />
              ) : (
                <ProductCardList 
                  products={filteredProducts}
                  onProductClick={handleProductClick}
                />
              )}
            </div>

            <Paginate 
              currentPage={currentPage}
              totalPages={3}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSearch