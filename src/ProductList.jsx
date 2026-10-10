import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice.js';

const products = [
  { id: 1, name: 'Monstera Deliciosa', category: 'Statement Plants', price: 24, description: 'Bold split leaves that make any corner feel tropical.', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=85' },
  { id: 2, name: 'Rubber Plant', category: 'Statement Plants', price: 19, description: 'Glossy, deep-green foliage with a sculptural look.', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=85' },
  { id: 3, name: 'Bird of Paradise', category: 'Statement Plants', price: 32, description: 'A dramatic leafy plant for bright rooms.', image: 'https://images.unsplash.com/photo-1597055181300-a8b4be9e5b6f?auto=format&fit=crop&w=800&q=85' },
  { id: 4, name: 'Snake Plant', category: 'Easy Care', price: 16, description: 'Hardy upright leaves and very simple care needs.', image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=85' },
  { id: 5, name: 'ZZ Plant', category: 'Easy Care', price: 18, description: 'A resilient favorite for low-maintenance greenery.', image: 'https://images.unsplash.com/photo-1632207691143-643e2f7e7e31?auto=format&fit=crop&w=800&q=85' },
  { id: 6, name: 'Golden Pothos', category: 'Easy Care', price: 14, description: 'Trailing vines that look lovely on shelves.', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=85' },
  { id: 7, name: 'Peace Lily', category: 'Flowering Plants', price: 21, description: 'Elegant green leaves and graceful white blooms.', image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=85' },
  { id: 8, name: 'Anthurium', category: 'Flowering Plants', price: 23, description: 'Glossy foliage with colorful heart-shaped flowers.', image: 'https://images.unsplash.com/photo-1597055181300-a8b4be9e5b6f?auto=format&fit=crop&w=800&q=85' },
  { id: 9, name: 'Chinese Evergreen', category: 'Flowering Plants', price: 17, description: 'Decorative patterned leaves for a lively room.', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=85' },
];

export default function ProductList({ onCartClick, totalItems }) {
  const dispatch = useDispatch();
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <main className="catalog page-wrap" id="plants">
      <div className="catalog-top">
        <div><p className="eyebrow">THE GREEN COLLECTION</p><h1>Find your happy place.</h1><p className="muted">A little plant love goes a long way.</p></div>
        <button className="cart-nav" onClick={onCartClick} aria-label={`Open cart with ${totalItems} items`}>🛒 Cart <b>{totalItems}</b></button>
      </div>
      {categories.map((category) => (
        <section className="category-section" key={category}>
          <h2>{category}</h2>
          <div className="product-grid">
            {products.filter((product) => product.category === category).map((product) => (
              <article className="product-card" key={product.id}>
                <img src={product.image} alt={product.name} loading="lazy" />
                <div className="product-info">
                  <p className="product-category">{product.category}</p>
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-bottom"><strong>${product.price.toFixed(2)}</strong><button onClick={() => dispatch(addItem(product))}>Add to Cart +</button></div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}