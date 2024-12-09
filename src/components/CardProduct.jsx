import styles from "./cardproduct.module.css";

function CardProduct(props){
const{price, text, img}=props;

return(
    <div class={styles.boxArticulo}> 
                    <figure>
                            <img className={styles.fotoVino} src={img} alt="product img"/>
                    </figure>
                    <div className={styles.boxDetalleArticulo}>
                        <h4 className={styles.detalleArticulo}>{text}</h4>
                        <p className={styles.precioArticulo}> ${price}</p>
                    </div>
    </div>
)
};


export default CardProduct;