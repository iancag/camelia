import './CartWidget.css';
import shoppingCart from '../../../../assets/common/shopping-cart.svg'

export const ShoppingCartWidget = () =>
    <>
        <img src={shoppingCart} alt="cart" className="shopping-cart" />
        <div className="cart-count">
            <label>3</label>
        </div>
    </>