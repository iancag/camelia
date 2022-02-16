import './CartWidget.css';
import shoppingCart from '../../../assets/common/shopping-cart.svg'

export const ShoppingCartWidget = ({cartCount}) =>
    <>
        <img src={shoppingCart} alt="cart" className="shopping-cart" />
        <div className="cart-count">
            <label>{cartCount}</label>
        </div>
    </>