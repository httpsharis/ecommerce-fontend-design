import React from 'react'
import Hero from '../components/Home/Hero'
import DiscountSection from '../components/Home/DiscountSection'
import ProductsSection from '../components/Home/ProductsSection'
import GedgetSection from '../components/Home/GedgetSection'
import RequestSection from '../components/Home/RequestSection'


function Home() {
    return (

        <div className='flex flex-col w-full max-w-[1100px] mx-auto py-[24px] px-4 font-Inter bg-[#F7FAFC]'>
            {/* Hero Section */}
            <Hero />

            {/* Offer Section */}
            <DiscountSection />

            {/* Products Sections 1 */}
            <ProductsSection />

            {/* Gedget Section */}
            <GedgetSection />

            {/* Request Section */}
            <RequestSection />

        </div>

    )
}

export default Home