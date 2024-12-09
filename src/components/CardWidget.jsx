import styles from "./cardwidget.module.css";

function CardWidget(){

return(
    <div class={styles.boxCardWidget}>
    <svg xmlns="http://www.w3.org/2000/svg" class={styles.carritoIcon} viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <circle cx="6" cy="19" r="2" />
    <circle cx="17" cy="19" r="2" />
    <path d="M17 17h-11v-14h-2" />
    <path d="M6 5l14 1l-1 7h-13" />
    </svg>
    <p class={styles.cantCarrito}> 10 </p>
    </div>  
);
}
export default CardWidget;


    


