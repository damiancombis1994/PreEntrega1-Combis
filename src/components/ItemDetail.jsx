import styles from "./itemdetail.module.css";
import ButtonCount from "./ButtonCount";

function ItemDetail(props){
const{price, title, description, pictureUrl, stock}=props;
function onSubmit(count){
    console.log(`Se agregaron ${count} productos al carrito`);
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
                            <ButtonCount onSubmitCount={onSubmit} stock={stock} />
                        </div>
                    </div>
                </div>
                    
    </div>
)
};


export default ItemDetail;