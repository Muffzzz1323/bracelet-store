import { ShoppingCart, Heart, User, Gem, Search } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Header() {
  const { state, dispatch } = useApp();

  const handleAuthAction = () => {
    if (state.user) {
      dispatch({ type: 'SET_USER', payload: null });
    } else {
      dispatch({ type: 'SET_VIEW', payload: 'auth' });
    }
  };

  const cartItemsCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white shadow-md sticky top-0 z-40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => dispatch({ type: 'SET_VIEW', payload: 'home' })}
          >
            <Gem className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">Pearl and Perfect</span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for pearl bracelets..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => dispatch({ type: 'SET_VIEW', payload: 'home' })}
              className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Heart className="w-6 h-6" />
              {state.wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {state.wishlist.length}
                </span>
              )}
            </button>

            <button
              onClick={() => dispatch({ type: 'SET_VIEW', payload: 'cart' })}
              className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>

            <button
              onClick={handleAuthAction}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">
                {state.user ? state.user.name : 'Sign In'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}