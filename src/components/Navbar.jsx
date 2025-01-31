import styles from "./navbar.module.css";
import CardWidget from "./CardWidget";
import { Link, NavLink } from "react-router-dom";

function Navbar(){  
return(
<>
<div className={styles.flexContainer}>
<h1 className={styles.title}><Link to="/">Nuke Mapu </Link></h1>
<Link className={styles.enlaceCart} to="/cart"><CardWidget/></Link>
</div>

<nav>
		<ul className={styles.enlaces}>
            <li className={styles.enlaceDirecto}>
				<NavLink to={"/category/tinto"} className={styles.enlaceDirectoContenido}>Tinto</NavLink>
			</li>
            <li className={styles.enlaceDirecto}>
				<NavLink to={"/category/blanco"} className={styles.enlaceDirectoContenido}>Blanco</NavLink>
			</li>
            <li className={styles.enlaceDirecto}>
			<NavLink to={"/category/whisky"} className={styles.enlaceDirectoContenido}>Whisky</NavLink>
			</li>
            <li className={styles.enlaceDirecto}>
			<NavLink to={"/category/vodka"} className={styles.enlaceDirectoContenido}>Vodka</NavLink>
			</li>
            <li className={styles.enlaceDirecto}>
			<NavLink to={"/category/gintonic"} className={styles.enlaceDirectoContenido}>Gin Tonic</NavLink>
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
