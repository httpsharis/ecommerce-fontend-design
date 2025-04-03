import React, { useState } from 'react'
import FilterContainer from '../components/ProductSearch/FiltersContainer.jsx'
import NavigationBar from '../components/ProductSearch/NavigationBar.jsx'
import SearchInsight from '../components/ProductSearch/SearchInsight.jsx'
import ProductCardList from '../components/ProductSearch/ProductCardList.jsx'
import Paginate from '../components/ProductSearch/Paginate.jsx'
import ProductCardGrid from '../components/ProductSearch/ProductCardGrid.jsx'
import FilterTags from '../components/ProductSearch/FilterTags'

function ProductSearch() {
  const [viewType, setViewType] = useState('grid')
  const [selectedFilters, setSelectedFilters] = useState([])

  const handleFilterChange = (filter) => {
    setSelectedFilters(prev => [...prev, filter])
  }

  const handleRemoveFilter = (filterToRemove) => {
    setSelectedFilters(prev => 
      prev.filter(filter => 
        !(filter.type === filterToRemove.type && filter.value === filterToRemove.value)
      )
    )
  }

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
                <ProductCardGrid />
              ) : (
                <ProductCardList />
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