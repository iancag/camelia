import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './CartWidget.css';
import shoppingCart from '../../../assets/common/shopping-cart.svg';
import { CartContext } from '../../../context/Context';

export const ShoppingCartWidget = () => {
  const value = useContext(CartContext);
  
  return (<>
    <Link to="/cart"><img src={shoppingCart} alt="cart" className="shopping-cart" /></Link>
    <div className="cart-count">
      <label>{value.cartCount}</label>
    </div>
  </>)
};
