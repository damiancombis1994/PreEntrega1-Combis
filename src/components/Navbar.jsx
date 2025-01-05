import styles from "./navbar.module.css";
import CardWidget from "./CardWidget";

function Navbar(){  

return(
<>
<div className={styles.flexContainer}>
<h1 className={styles.title}>Nuke Mapu</h1>
<CardWidget/>
</div>

<nav>
		<ul className={styles.enlaces}>
            <li className={styles.enlaceDirecto}>
				<a href="#" className={styles.enlaceDirectoContenido}>Tinto</a>
			</li>
            <li className={styles.enlaceDirecto}>
				<a href="#" className={styles.enlaceDirectoContenido}>Blanco</a>
			</li>
            <li className={styles.enlaceDirecto}>
				<a href="#" className={styles.enlaceDirectoContenido}>Whisky</a>
			</li>
            <li className={styles.enlaceDirecto}>
				<a href="#" className={styles.enlaceDirectoContenido}>Vodka</a>
			</li>
            <li className={styles.enlaceDirecto}>
				<a href="#" className={styles.enlaceDirectoContenido}>Gin Tonic</a>
			</li>
            <li className={styles.enlaceDirecto}>
				<a href="#" className={styles.enlaceDirectoContenido}>Otros</a>
			</li>
        </ul>
</nav>
</>
);
}
export default Navbar;
