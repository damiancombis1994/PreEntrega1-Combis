import ItemDetail from "./ItemDetail";
import products from "../data/data"

function ItemDetailContainer(){



    
    const boxGaleria={
       position: 'relative',
       top:'50%',
       left:'50%',
       zIndex:1,
};

 return(
         <div style={boxGaleria}>
        <ItemDetail
         key={products.id}
         price={products.price}
         title={products.title}
         description={products.description}
         pictureUrl={products.pictureUrl}
        />
        </div>
 ); 
}
export default ItemDetailContainer