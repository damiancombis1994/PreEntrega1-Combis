import styles from "./cartcontainer.module.css";
import cartContext from "../context/cartContext";
import { useContext } from "react";
import { createBuyOrder } from "../data/database";
function CartContainer() {
   const {cartItems, removeItem, getTotalPrice} = useContext(cartContext);

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
    <h1>Carrito</h1>
    <div className={styles.viewCartDiv}> 
    {cartItems.map((item) => {
        return (
            <div className={styles.viewCartItems} key={item.id}>
                <figure>
                    <img src={item.pictureUrl} alt="product img"/>
                </figure>
                <h2>{item.title}</h2>
                <p>Precio: ${item.price}</p>
                <p>Cantidad: {item.count}</p>
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
        );
    })
    }
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
export default CartContainer;
