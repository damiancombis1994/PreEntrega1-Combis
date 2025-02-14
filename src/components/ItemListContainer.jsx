import GetAsyncData from "../data/database";
import{useState, useEffect} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { GetAsyncItemsByCategory } from "../data/database";
import Loader from "./Loader";
function ItemListContainer(props){
    const [products, setProducts] = useState([]);
    const [loadingProducts, setLoadingProducts] = useState(true);
    const { catId } = useParams();
useEffect(()=>{
    setLoadingProducts(true)
    if (catId === undefined) {
        const respuestaPromise = GetAsyncData();
        respuestaPromise
        .then((respuesta)=>{
            setProducts(respuesta)
            setLoadingProducts(false)
            })
        .catch((error)=>alert(error))
    } else {
        const respuestaPromise = GetAsyncItemsByCategory(catId);
        respuestaPromise
        .then((respuesta)=>{
            setProducts(respuesta)
            setLoadingProducts(false)
            })
        .catch((error)=>alert(error))
    }
},[catId]);


const boxGaleria={
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap:20,
    marginTop: 20,
};

 if (loadingProducts) return (<Loader/>)
 else return <div style={boxGaleria}><ItemList products={products}/></div>
};


export default ItemListContainer;