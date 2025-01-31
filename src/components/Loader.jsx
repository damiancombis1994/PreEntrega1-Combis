import styles from "./navbar.module.css";
import { SpinnerInfinity } from "spinners-react";

const loader={
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 400,
    marginTop: 100,
  }
const spinner= {
    height: 300,
    width: 300,
  }

function Loader() {
  return (
    <div style={loader}>
    <SpinnerInfinity style={spinner} 
    size={90} 
    thickness={74} 
    speed={100} 
    color="#36ad47" 
    secondaryColor="rgba(0, 0, 0, 0.44)" />
    </div>
  );
}

export default Loader;