import React, { useState } from 'react'
import FilterContainer from '../components/ProductSearch/FiltersContainer.jsx'
import NavigationBar from '../components/ProductSearch/NavigationBar.jsx'
import SearchInsight from '../components/ProductSearch/SearchInsight.jsx'
import ProductCardList from '../components/ProductSearch/ProductCardList.jsx'
import Paginate from '../components/ProductSearch/Paginate.jsx'
import ProductCardGrid from '../components/ProductSearch/ProductCardGrid.jsx'
import FilterTags from '../components/ProductSearch/FilterTags'
import StickyBar from '../components/ProductSearch/StickyBar';

// Add this import at the top
import { products } from '../data/products'

function ProductSearch() {
  const [viewType, setViewType] = useState('grid')
  const [selectedFilters, setSelectedFilters] = useState([])

  const searchParams = new URLSearchParams(window.location.search)
  // In your ProductSearch component's URL parameter handling:
  const searchQuery = (searchParams.get('query') || '').toLowerCase()
  const searchCategory = searchParams.get('category') || 'all-category'

  // Remove this duplicate array
  // const [products] = useState([...])
  
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

  const handleAddToCart = (product, quantity) => {
      // Logic to add the product to the cart
      console.log(`Added ${quantity} of ${product.title} to the cart.`);
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
                <ProductCardGrid products={filteredProducts} />
              ) : (
                <ProductCardList products={filteredProducts}/>
              )}
            </div>

            <Paginate />

            {/* Ensure StickyBar is rendered only if there are products */}
            {filteredProducts.length > 0 && (
              <StickyBar product={filteredProducts[0]} onAddToCart={handleAddToCart} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSearch