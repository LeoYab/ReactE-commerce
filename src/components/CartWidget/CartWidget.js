import cart from "./assets/cart.svg";
import "./CartWidget.scss";

const CartWidget = () => {

    return(
        <div className="cart m-2 d-flex order-lg-1 position-relative">
            <img src={cart} alt="Carrito" />
            <p id="onCart" className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-info">0</p>
        </div>
    )
}

export default CartWidget;