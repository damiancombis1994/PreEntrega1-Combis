import CardProduct from "./CardProduct";
import GetAsyncData from "../data/GetAsyncData";
import{useState, useEffect} from "react";

function ItemListContainer(props){
    const [products, setProducts] = useState([]);

useEffect(()=>{
    const respuestaPromise = GetAsyncData();
    respuestaPromise
    .then((respuesta)=>setProducts(respuesta))
    .catch((error)=>alert(error))
},[]);

const list = products.map((prod)=>(
<CardProduct
   key={prod.id}
   price={prod.price}
   title={prod.title}
   description={prod.description}
   pictureUrl={prod.pictureUrl}
/>
));

const boxGaleria={
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap:20,
};

 return(
         <div style={boxGaleria}>{list}</div>
 ); 

};


export default ItemListContainer;