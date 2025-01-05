import {useState} from "react"
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
 
  const stylesHeader={
    display: "block",
    background: "#cbc8b6",
    height:130,
  };

  return (
    <>
      <header style={stylesHeader}>
      <Navbar/>
      </header>

      <main style={{marginTop:"15px"}}>
      <ItemListContainer/>
      </main>
    </>
  );
}

export default App;
