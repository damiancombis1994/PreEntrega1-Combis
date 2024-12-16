import { useState} from "react";
import styles from "./buttoncount.module.css";

function ButtonCount(){
    let[count, setCount] = useState(1);

    const handleAdd = () =>{
        setCount(count < 10 ? count + 1 : count);
    }
    
    const handleSubtract = ()=>{
        if (count > 1) {
            setCount(count - 1);
          } 
    }
return(
    <div className={styles.container}>
        <button className={styles.button} onClick={handleAdd}>+</button>
        <span className={styles.count}>{count}</span>
        <button className={styles.button} onClick={handleSubtract}>-</button>
    </div>
);
}
export default ButtonCount;