import React from 'react'
import Navbar from '../components/navbar'
import WomenCategories from '../components/Women/women categories'
import Seasonalslides from '../components/Women/SeasonalSliderw'
import WatchandShop from '../components/Women/WatchAndShopSlider'
import Footer from '../components/Footer'

const Women = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-start">
        <WomenCategories />
        <div className="w-full max-w-6xl mx-auto my-8">
          <Seasonalslides />
        </div>
        <div className="w-full max-w-6xl mx-auto my-8">
          <WatchandShop />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Women
