import HeroSection from '@/components/hero-section/HeroSection'
import ProductsContent from '@/components/products/product-content/ProductsContent'
import Products from '@/components/products/Products'
import React from 'react'

function Home() {
  return (
    <div>
      <HeroSection />
      <Products>
        <ProductsContent />
      </Products>
    </div>
  )
}

export default Home