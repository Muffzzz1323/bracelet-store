
import { AppProvider, useApp } from './context/AppContext';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Homepage from './components/Homepage';
import ProductDetail from './components/ProductDetail';
import Auth from './components/Auth';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function AppContent() {
  const { state } = useApp();

  if (state.isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {state.currentView !== 'loading' && <Header />}
      
      {state.currentView === 'home' && <Homepage />}
      {state.currentView === 'product' && <ProductDetail />}
      {state.currentView === 'auth' && <Auth />}
      {state.currentView === 'cart' && <Cart />}
      {state.currentView === 'checkout' && <Checkout />}
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;