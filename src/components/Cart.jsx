import styles from "./cart.module.css";
import cartContext from "../context/cartContext";
import { useContext } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
function Cart() {
   const {cartItems, getTotalPrice, clearCart} = useContext(cartContext);
   return (
    <> 
    <div className={styles.cartHeader}>
        <h1>Carrito de Compras</h1>
        {
            cartItems.length > 0 && <p onClick={clearCart}>Eliminar carrito</p>
        }
    </div>
    
    <div className={styles.viewCartDiv}> 
          {cartItems.map((item) => (<CartItem key={item.id} {...item} />))}
    </div>
    {cartItems.length === 0 ? 
      (<p className={styles.msjEmptyProduct}>Aun no tienes productos en el Carrito</p>) 
      :
      (<div className={styles.checkoutContainer}>          
          <p className={styles.totalPrice}>Total: ${getTotalPrice()}</p>
          <Link to="/CheckoutForm"><button className={styles.checkoutButton} >Finalizar Compra</button></Link>
      </div>)
    }
    </>
   );
}
export default Cart;
