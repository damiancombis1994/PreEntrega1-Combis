import { createContext, useState } from "react";

const cartContext = createContext("carrito");

export function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function removeItem(id) {
    setCartItems(cartItems.filter(item => {
      return item.id !== id;
    }));
  }

  function addItem({ price, id, title, pictureUrl, count }) {
    const checkItem = cartItems.find((item) => item.id === id);

    if (checkItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, count: item.count + count } : item
        )
      );
    } else {
      setCartItems([...cartItems, { id, title, pictureUrl, count, price }]);
    }
  }
    
  function countItemsInCart() {
    let total = 0;
    for (const item of cartItems) {
      total += item.count;
    }
    return total;
  }

  function getTotalPrice() {
    let totalPrice = 0;
    for (const item of cartItems) {
      totalPrice += item.count * item.price;
    }
    return totalPrice;
  }
  function clearCart() {  
    setCartItems([]); 
  }

  return (
    <cartContext.Provider
      value={{
        cartItems,
        countItemsInCart,
        addItem,
        removeItem,
        getTotalPrice,
        clearCart,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export default cartContext;