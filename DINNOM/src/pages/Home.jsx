import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 border-b">
        <div className="text-3xl font-bold tracking-widest text-blue-900">GAP</div>
        <nav className="space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">Women</a>
          <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">Men</a>
          <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">Kids</a>
          <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">Sale</a>
        </nav>
        <div className="space-x-4">
          <button className="text-gray-700 hover:text-blue-900">Sign In</button>
          <button className="text-gray-700 hover:text-blue-900">Cart</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 bg-blue-100">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Summer Sale is Here</h1>
        <p className="text-lg text-blue-800 mb-6">Up to 50% off select styles. Limited time only.</p>
        <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">Shop Now</button>
      </section>

      {/* Featured Categories */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-16">
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
          <img src="https://www.gap.com/Asset_Archive/GPWeb/content/0037/012/3701234.jpg" alt="Women" className="w-full h-56 object-cover"/>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Women</h2>
            <button className="text-blue-900 font-semibold hover:underline">Shop Women</button>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
          <img src="https://www.gap.com/Asset_Archive/GPWeb/content/0037/012/3701235.jpg" alt="Men" className="w-full h-56 object-cover"/>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Men</h2>
            <button className="text-blue-900 font-semibold hover:underline">Shop Men</button>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
          <img src="https://www.gap.com/Asset_Archive/GPWeb/content/0037/012/3701236.jpg" alt="Kids" className="w-full h-56 object-cover"/>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Kids</h2>
            <button className="text-blue-900 font-semibold hover:underline">Shop Kids</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
