import React from 'react'
import Hero from '../components/Hero'
import DiscountSection from '../components/DiscountSection'
import ProductsSection from '../components/ProductsSection'
import GedgetSection from '../components/GedgetSection'
import RequestSection from '../components/RequestSection'


function Home() {
    return (

        <div className=' flex flex-col justify-center items-center p-[24px] px-[5.5rem] font-Inter bg-[#F7FAFC]'>
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