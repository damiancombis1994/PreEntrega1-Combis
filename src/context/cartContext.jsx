import { createContext, useState } from "react";

const cartContext = createContext("carrito");

export function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function removeItem(id) {
    const newCartState = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartState);
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
    cartItems.forEach((item) => {
      total += item.count;
    });
    return total;
  }

  function getTotalPrice() {
    let totalPrice = 0;

    cartItems.forEach((item) => {
      totalPrice += item.count * item.price;
    });

    return totalPrice;
  }

  return (
    <cartContext.Provider
      value={{
        cartItems,
        countItemsInCart,
        addItem,
        removeItem,
        getTotalPrice,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export default cartContext;