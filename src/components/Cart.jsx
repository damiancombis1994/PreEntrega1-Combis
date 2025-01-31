import styles from "./cart.module.css";
import cartContext from "../context/cartContext";
import { useContext } from "react";
import { createBuyOrder } from "../data/database";
import CartItem from "./CartItem";
function Cart() {
   const {cartItems, getTotalPrice, clearCart} = useContext(cartContext);
  
   async function handleCheckout() {
    const orderData = {
      buyer: {
        name: "Bruno",
        email: "brunitotutor@yahoo",
      },
      items: cartItems,
      total: getTotalPrice(),
      date: new Date(),
    };

    const newOrderID = await createBuyOrder(orderData);

    console.log("Compra realizada", newOrderID);
  }

  
   return (
    <> 
    <div className={styles.cartHeader}>
        <h1>Carrito de Compras</h1>
        <p onClick={clearCart}>Eliminar carrito</p>
    </div>
    
    <div className={styles.viewCartDiv}> 
          {cartItems.map((item) => (<CartItem key={item.id} {...item} />))}
    </div>
    {cartItems.length === 0 ? 
      (<p className={styles.msjEmptyProduct}>Aun no tienes productos en el Carrito</p>) 
      :
      (<div className={styles.checkoutContainer}>          
          <p className={styles.totalPrice}>Total: ${getTotalPrice()}</p>
          <button className={styles.checkoutButton} onClick={handleCheckout}>Finalizar Compra</button>
      </div>)
    }
    </>
   );
}
export default Cart;
