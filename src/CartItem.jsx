import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice.js';

export default function CartItem({ onContinueShopping, onHomeClick, totalItems }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="cart-page page-wrap">
      <div className="catalog-top">
        <div><p className="eyebrow">YOUR SELECTION</p><h1>Shopping cart</h1><p className="muted">{totalItems} item{totalItems === 1 ? '' : 's'} in your basket</p></div>
        <button className="text-button" onClick={onHomeClick}>← Home</button>
      </div>
      {items.length === 0 ? (
        <section className="empty-cart"><div className="empty-icon">🪴</div><h2>Your cart is waiting to grow</h2><p className="muted">Choose a plant and bring a little green home.</p><button className="primary-button" onClick={onContinueShopping}>Browse plants</button></section>
      ) : (
        <>
          <div className="cart-list">
            {items.map((item) => (
              <article className="cart-row" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-product"><h3>{item.name}</h3><p className="muted">${item.price.toFixed(2)} each</p><button className="remove-button" onClick={() => dispatch(removeItem(item.id))}>Remove</button></div>
                <div className="quantity-control"><button aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>−</button><span>{item.quantity}</span><button aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button></div>
                <strong className="line-total">${(item.price * item.quantity).toFixed(2)}</strong>
              </article>
            ))}
          </div>
          <aside className="cart-summary"><div><span>Subtotal</span><strong>${total.toFixed(2)}</strong></div><p className="muted">Taxes and delivery are calculated at checkout.</p><button className="primary-button" onClick={() => window.alert('Checkout is coming soon! Thank you for shopping at Paradise Nursery.')}>Checkout · ${total.toFixed(2)}</button><button className="text-button continue-button" onClick={onContinueShopping}>← Continue shopping</button></aside>
        </>
      )}
    </main>
  );
}