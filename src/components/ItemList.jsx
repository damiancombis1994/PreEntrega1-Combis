import Item from "./Item";      

function ItemList(props) {
    return (
        <>
            {props.products.map((prod)=>(
            <Item
               id={prod.id}
               key={prod.id}
               price={prod.price}
               title={prod.title}
               description={prod.description}
               pictureUrl={prod.pictureUrl}
            />
            ))}
        </>
    );
}

export default ItemList;