import { useContext, useState } from "react";
import cartContext from "../context/cartContext";
import { createBuyOrder } from "../data/database";
import { Link } from "react-router-dom";
import ItemForm from "./ItemForm";
import styles from "./checkoutform.module.css";

function CheckoutForm() {
  const {cartItems, getTotalPrice, clearCart} = useContext(cartContext);
  const [formDisplay, setFormDisplay] = useState(true); 
  const [orderID, setOrderID] = useState(null);	
  
  const [userData, setUserData] = useState({
    username: "",
    surname: "",
    email: "",
  });

  function onInputChange(evt) {
    const newUserData = { ...userData };
    const inputName = evt.target.name;
    newUserData[inputName] = evt.target.value;
    setUserData(newUserData);
  }

  async function handleCheckout(evt) {
    evt.preventDefault();

    const orderData = {
      buyer: {
        username: userData.username,
        surname: userData.surname,
        email: userData.email,
      },
      items: cartItems,
      total: getTotalPrice(),
      date: new Date(),
    };

    const newOrderID = await createBuyOrder(orderData);

    if (newOrderID) {
      setOrderID(newOrderID);
      setFormDisplay(false);
      clearCart();
    }
  }

  return (
    <> 
    {formDisplay ? (
    <div className={styles.containerForm}>
      <h1>Complete el formulario para finalizar la compra</h1>
      <form>
        <ItemForm label="Nombre" name="username" type="text" onInputChange={onInputChange} />
        <ItemForm label="Apellido" name="surname" type="text" onInputChange={onInputChange} />
        <ItemForm label="Email" name="email" type="email" onInputChange={onInputChange} />
        <button disabled={!( userData.username !== "" && userData.surname !== "" && userData.email !== "")} onClick={handleCheckout}>
          Enviar
        </button>
      </form>
    </div>)
    :
    (
      <div className={styles.contTicket}> 
       <div>
        <h1>Compra Finalizada</h1>
        <p>¡Gracias {userData.username.toUpperCase()} {userData.surname.toUpperCase()} por su compra!</p>
        <p>Numero de orden: {orderID}</p>
        <Link to="/"><button>Seguir comprando</button></Link>
       </div>
      </div>
    )
    }
    </>
  );
}

export default CheckoutForm;