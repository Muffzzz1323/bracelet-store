import { useState } from 'react';
import { ArrowLeft, Heart, ShoppingCart, Star, Shield, Truck, RotateCcw } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function ProductDetail() {
  const { state, dispatch } = useApp();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!state.selectedProduct) return null;

  const product = state.selectedProduct;
  const isInWishlist = state.wishlist.some(item => item.id === product.id);

  const handleAddToCart = () => {
    if (!state.user) {
      dispatch({ type: 'SET_VIEW', payload: 'auth' });
      return;
    }
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }
  };

  const handleAddToWishlist = () => {
    if (!state.user) {
      dispatch({ type: 'SET_VIEW', payload: 'auth' });
      return;
    }
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
  };

  const handleBuyNow = () => {
    if (!state.user) {
      dispatch({ type: 'SET_VIEW', payload: 'auth' });
      return;
    }
    handleAddToCart();
    dispatch({ type: 'SET_VIEW', payload: 'checkout' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => dispatch({ type: 'SET_VIEW', payload: 'home' })}
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Collection</span>
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      currentImageIndex === index ? 'border-blue-500' : 'border-gray-200'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600">(128 reviews)</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-blue-600"><p>₹{product.price.toLocaleString('en-IN')}</p>
</span>
                {product.originalPrice?.toLocaleString('en-IN') && (
                  <span className="text-xl text-gray-500 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                )}
                {product.isOnSale && (
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-semibold">
                    Save ₹{(product.originalPrice! - product.price).toFixed(2)}
                  </span>
                )}
              </div>

              <p className="text-gray-600 leading-relaxed">{product.description}</p>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <span className="font-semibold">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
                <button
                  onClick={handleBuyNow}
                  className="flex-1 bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors"
                >
                  Buy Now
                </button>
                <button
                  onClick={handleAddToWishlist}
                  className={`p-3 border rounded-lg transition-colors ${
                    isInWishlist
                      ? 'bg-red-50 border-red-300 text-red-600'
                      : 'border-gray-300 text-gray-600 hover:border-red-300 hover:text-red-600'
                  }`}
                >
                  <Heart className="w-5 h-5" fill={isInWishlist ? 'currentColor' : 'none'} />
                </button>
              </div>

              {/* Features */}
              <div className="border-t pt-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Lifetime warranty on pearls</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Truck className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Free shipping on orders over $75</span>
                </div>
                <div className="flex items-center space-x-3">
                  <RotateCcw className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">30-day return policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}