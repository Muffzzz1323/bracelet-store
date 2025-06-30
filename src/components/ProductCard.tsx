import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { state, dispatch } = useApp();

  const handleAddToCart = () => {
    if (!state.user) {
      dispatch({ type: 'SET_VIEW', payload: 'auth' });
      return;
    }
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const handleAddToWishlist = () => {
    if (!state.user) {
      dispatch({ type: 'SET_VIEW', payload: 'auth' });
      return;
    }
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
  };

  const handleViewProduct = () => {
    dispatch({ type: 'SET_SELECTED_PRODUCT', payload: product });
    dispatch({ type: 'SET_VIEW', payload: 'product' });
  };

  const isInWishlist = state.wishlist.some(item => item.id === product.id);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
      <div className="relative overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
          onClick={handleViewProduct}
        />
        
        {product.isOnSale && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
            Sale
          </div>
        )}

        <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleAddToWishlist}
            className={`p-2 rounded-full ₹{isInWishlist ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:text-red-500'} shadow-md transition-colors`}
          >
            <Heart className="w-4 h-4" fill={isInWishlist ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={handleViewProduct}
            className="p-2 bg-white text-gray-600 hover:text-blue-600 rounded-full shadow-md transition-colors"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 cursor-pointer hover:text-blue-600 transition-colors" onClick={handleViewProduct}>
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-blue-600">
              ₹{product.price.toLocaleString('en-IN')}

            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                <p>₹{product.price.toLocaleString('en-IN')}</p>

              </span>
            )}
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}