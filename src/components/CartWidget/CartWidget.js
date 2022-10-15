import cart from "./assets/cart.svg";
import "./CartWidget.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext"

const CartWidget = () => {

const { quantity } = useContext(CartContext)


    return(
        <div className="cart m-2 d-flex order-lg-1 position-relative">
            <img src={cart} alt="Carrito" />
            <p id="onCart" className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-info">{quantity}</p>
        </div>
    )
}

export default CartWidget;