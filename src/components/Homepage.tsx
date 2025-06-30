import { Star, TrendingUp, Gift } from 'lucide-react';
import ProductCard from './ProductCard';
import { products, todaysDeals, featuredProducts } from '../data/products';

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
              Discover Timeless Elegance
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Premium pearl bracelets crafted for the discerning woman
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              Shop Collection
            </button>
          </div>
        </div>
      </section>

      {/* Today's Deals */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <TrendingUp className="w-8 h-8 text-red-500 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Today's Hot Deals</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {todaysDeals.map((product) => (
              <div key={product.id} className="relative">
                <div className="absolute -top-4 -right-4 z-10">
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    Limited Time!
                  </div>
                </div>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <Star className="w-8 h-8 text-yellow-500 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Featured Collection</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <Gift className="w-8 h-8 text-blue-500 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Complete Collection</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">Get notified about new arrivals and exclusive offers</p>
          <div className="flex flex-col sm:flex-row justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg sm:rounded-r-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 px-6 py-3 rounded-r-lg sm:rounded-l-none hover:bg-blue-700 transition-colors font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}