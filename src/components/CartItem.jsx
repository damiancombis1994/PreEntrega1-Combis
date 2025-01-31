import { useContext } from "react";
import cartContext from "../context/cartContext";
import CloseIcon from '@mui/icons-material/Close';
import styles from "./cartitem.module.css";

function CartItem(props) {
    const {removeItem} = useContext(cartContext);
    return (
        <div className={styles.viewCartItems} key={props.id}>
            <figure>
                <img src={props.pictureUrl} alt="product img"/>
            </figure>
            <h2>{props.title}</h2>
            <p>Precio: ${props.price}</p>
            <p>Cantidad: {props.count}</p>
            <CloseIcon className={styles.btnDelete} onClick={() => removeItem(props.id)} />
        </div>
    );
}
export default CartItem;