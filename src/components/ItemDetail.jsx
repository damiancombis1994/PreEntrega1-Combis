import styles from "./itemdetail.module.css";
import ButtonCount from "./ButtonCount";
import cartContext from "../context/cartContext";
import {useContext} from "react";
import {useState} from "react";
import {Link} from "react-router-dom";

function ItemDetail(props){
const{price, title, description, pictureUrl, stock, id}=props;
const {addItem} = useContext(cartContext);
const [AddToCart, setAddToCart] = useState(false);
function onSubmit(count){
    addItem({id, title, price, count, pictureUrl});
    setAddToCart(true);
}
    
return(
    <div className={styles.boxFlex}> 
                <div className={styles.boxArticulo}>
                    <figure>
                            <img className={styles.fotoVino} src={pictureUrl} alt="product img"/>
                    </figure>
                    <div className={styles.boxDetalleArticulo}>
                        <h4 className={styles.titleArticulo}>{title}</h4>
                        <p className={styles.textArticulo}>{description}</p>
                        <div className={styles.boxPrinceCount}>
                            <p className={styles.precioArticulo}> ${price}</p>
                            {AddToCart ? (<Link to="/cart"><button>Ver Carrito</button></Link>)
                            :(<ButtonCount onSubmitCount={onSubmit} stock={stock} /> )}  
                            
                            
                        </div>
                    </div>
                </div>
                    
    </div>
)
};


export default ItemDetail;