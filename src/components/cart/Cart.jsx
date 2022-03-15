import { useContext } from "react";
import { CartContext } from "../../context/Context";

export const Cart = () => {
    const value = useContext(CartContext);

    return (
        <div className='card' style={{ textAlign: 'center', margin: '5% auto' }}>
            Items Total:
            {value.cartCount ?? value.cartCount}
            {
                value.cartItems.map((cartItem, index) =>
                    <div key={index} className='card'>
                        <div>Descripción: {cartItem.item.description}</div>
                        <div>Cantidad: {cartItem.totalCount}</div>
                    </div>)
            }
        </div>
    );
}