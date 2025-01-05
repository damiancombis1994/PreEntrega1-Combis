import styles from "./item.module.css";
import ButtonCount from "./ButtonCount";

function Item(props){
const{price, title, description, pictureUrl}=props;

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
                            <ButtonCount />
                        </div>
                     
                    </div>
                    
    </div>
)
};
export default Item;