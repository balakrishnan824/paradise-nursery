import { useState } from 'react';
import { useSelector } from 'react-redux';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';

export default function App() {
  const [view, setView] = useState('home');
  const items = useSelector((state) => state.cart.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app-shell">
      <header className="site-header">
        <button className="brand" onClick={() => setView('home')}><span className="brand-mark">✿</span><span>PARADISE <b>NURSERY</b></span></button>
        <nav><button onClick={() => setView('home')}>Home</button><button onClick={() => setView('plants')}>Plants</button><button onClick={() => setView('cart')}>Cart <span className="nav-count">{totalItems}</span></button></nav>
      </header>
      {view === 'home' && <main>
        <section className="hero">
          <div className="hero-overlay"></div>
          <div className="hero-content"><p className="eyebrow light">GROW SOMETHING BEAUTIFUL</p><h1>Welcome to<br/><em>Paradise Nursery</em></h1><p>Bring home the calm, color, and joy of nature.</p><button className="hero-button" onClick={() => setView('plants')}>Get Started <span>↗</span></button></div>
          <div className="hero-note">A greener home starts here.</div>
        </section>
        <AboutUs />
        <section className="home-cta"><p className="eyebrow">YOUR INDOOR GARDEN AWAITS</p><h2>Make room for a little more green.</h2><button className="primary-button" onClick={() => setView('plants')}>Explore the collection</button></section>
      </main>}
      {view === 'plants' && <ProductList onCartClick={() => setView('cart')} totalItems={totalItems} />}
      {view === 'cart' && <CartItem onContinueShopping={() => setView('plants')} onHomeClick={() => setView('home')} totalItems={totalItems} />}
      <footer className="site-footer"><span>✿ Paradise Nursery</span><span>Grow gently. Live greener.</span><span>© {new Date().getFullYear()} Paradise Nursery</span></footer>
    </div>
  );
}