import { useContext } from 'react';
import './CartWidget.css';
import shoppingCart from '../../../assets/common/shopping-cart.svg';
import { CartContext } from '../../../context/Context';

export const ShoppingCartWidget = () => {
  const value = useContext(CartContext);
  return (<>
    <img src={shoppingCart} alt="cart" className="shopping-cart" />
    <div className="cart-count">
      <label>{value.cartCount}</label>
    </div>
  </>)
};
