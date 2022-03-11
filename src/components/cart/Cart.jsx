import { useContext } from "react";
import { CartContext } from "../../context/Context";

export const Cart = () => {
    const value = useContext(CartContext);
    console.log(value)
    return (
        <div>
            Items Total:
            {value.cartCount ?? value.cartCount}
            {
                value.cartItems.map((cartItem, index) =>
                    <div key={index}>
                        <div>Descripción: {cartItem.item.description}</div>
                        <div>Cantidad: {cartItem.totalCount}</div>
                    </div>)
            }
        </div>
    );
}