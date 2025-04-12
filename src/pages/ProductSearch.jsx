import React, { useState } from 'react'
import FilterContainer from '../components/ProductSearch/FiltersContainer.jsx'
import NavigationBar from '../components/ProductSearch/NavigationBar.jsx'
import SearchInsight from '../components/ProductSearch/SearchInsight.jsx'
import ProductCardList from '../components/ProductSearch/ProductCardList.jsx'
import Paginate from '../components/ProductSearch/Paginate.jsx'
import ProductCardGrid from '../components/ProductSearch/ProductCardGrid.jsx'
import FilterTags from '../components/ProductSearch/FilterTags'
import { useNavigate } from 'react-router'
import { products } from '../data/products'

function ProductSearch() {
  const [viewType, setViewType] = useState('grid')
  const [selectedFilters, setSelectedFilters] = useState([])
  const navigate = useNavigate()

  const searchParams = new URLSearchParams(window.location.search)
  const searchQuery = (searchParams.get('query') || '').toLowerCase()
  const searchCategory = searchParams.get('category') || 'all-category'
  
  // Use the imported products directly
  const filteredProducts = products.filter(product => {
      const productTitle = product.title?.toLowerCase() || ''
      const matchesSearch = productTitle.includes(searchQuery)
      const matchesCategory = searchCategory === 'all-category' || 
                           product.category.toLowerCase().replace(/\s+/g, '-') === searchCategory

      const matchesFilters = selectedFilters.every(filter => {
        switch(filter.type) {
          case 'price':
            const [min, max] = filter.value.split('-').map(Number)
            return product.price >= min && product.price <= max
          case 'brand':
            return product.brand.toLowerCase() === filter.value.toLowerCase()
          case 'category':
            return product.category.toLowerCase() === filter.value.toLowerCase()
          case 'rating':
            return product.rating >= Number(filter.value)
          case 'condition':
            return product.condition.toLowerCase() === filter.value.toLowerCase()
          default:
            return true
        }
      })

      return matchesSearch && matchesCategory && matchesFilters
  })

  const handleFilterChange = (filter) => {
    if (filter.type === 'remove') {
      setSelectedFilters(prev => 
        prev.filter(f => !(f.type === filter.filterType && f.value === filter.value))
      )
    } else {
      setSelectedFilters(prev => [...prev, filter])
    }
  }

  const handleRemoveFilter = (filterToRemove) => {
    setSelectedFilters(prev => 
      prev.filter(filter => 
        !(filter.type === filterToRemove.type && filter.value === filterToRemove.value)
      )
    )
  }

  // Add a function to handle product click
  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className='w-full items-center font-Inter bg-[#F7FAFC]'>
      <NavigationBar />
      
      <div className='max-w-[1200px] px-7'>
        <div className='grid grid-cols-[240px_1fr] gap-8'>
          {/* Left Sidebar - Filters */}
          <div className='sticky top-0'>
            <FilterContainer onFilterChange={handleFilterChange} />
          </div>

          {/* Right Content Area */}
          <div className='space-y-6'>
            <SearchInsight viewType={viewType} onViewChange={setViewType} />
            
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

            <Paginate />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSearch