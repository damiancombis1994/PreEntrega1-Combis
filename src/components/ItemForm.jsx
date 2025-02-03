import styles from "./itemform.module.css";
export default function ItemForm(props) {
    const dataInfo = {...props};

    return(
        <div className={styles.contItemForm} >
          <label>{dataInfo.label}</label>
          <input name={dataInfo.name} type={dataInfo.type} onChange={dataInfo.onInputChange} />
        </div>
    )

}