import styles from "./item.module.css";
import { Link } from "react-router-dom";

function Item(props){
const{price, title, description, pictureUrl, id}=props;

return(
    <div className={styles.boxArticulo}> 
                    <figure>
                            <img className={styles.fotoVino} src={pictureUrl} alt="product img"/>
                    </figure>
                    <div className={styles.boxDetalleArticulo}>
                        <h4 className={styles.titleArticulo}>{title}</h4>
                        <p className={styles.textArticulo}>{description}</p>
                        <div className={styles.boxPrinceCount}>
                            <p className={styles.precioArticulo}> ${price}</p>
                            <Link to={"/item/" + id}><button>Ver Detalle</button></Link>
                        </div>
                       
                    </div>  
    </div>
)
};
export default Item;