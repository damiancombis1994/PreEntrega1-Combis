import{useState, useEffect} from "react";
import { GetAsyncDataById } from "../data/GetAsyncData";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
function ItemDetailContainer(){
       const [itemInfo, setItemInfo] = useState({});
       const rutaItem = useParams();
       useEffect(()=>{
              async function GetItemData(){
                     const response = await GetAsyncDataById(rutaItem.id);
                     setItemInfo(response);
              }
              GetItemData();
       },[]);
       return(<ItemDetail {...itemInfo}/>)

}
export default ItemDetailContainer