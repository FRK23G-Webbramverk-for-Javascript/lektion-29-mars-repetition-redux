import './Cart.css';
import { useSelector } from 'react-redux';

function Cart() {
  const cart = useSelector((state) => {
    return state.cart;
  });
  console.log(cart);

  return (
    <section className='cart'>
      <a href='#'>Cart</a>
      <p className='cart__amount'>{cart.length}</p>
    </section>
  );
}

export default Cart;
