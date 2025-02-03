import{useState, useEffect} from "react";
import { GetAsyncDataById } from "../data/database";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
function ItemDetailContainer(){
       const [itemInfo, setItemInfo] = useState(null);
       const rutaItem = useParams();
       useEffect(()=>{
              async function GetItemData(){
                     const response = await GetAsyncDataById(rutaItem.id);
                     setItemInfo(response);
              }
              GetItemData();
       },[]);
       if(itemInfo) return (<ItemDetail {...itemInfo}/>)
       else return (<Loader/>)

}
export default ItemDetailContainer
