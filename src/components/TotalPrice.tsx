import { useContext } from "react";
import { Typography } from "@mui/material";
import { CartContext } from "../context/CartContext";
import Pay from "./Pay";

const TotalPrice = () => {
  const { cartItems, calculateTotalPrice } = useContext(CartContext);

  const total = calculateTotalPrice(cartItems);
  const footerStyle:React.CSSProperties = {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "20px",
    color: "white",
    background: "#D01C1C",
  };
  return (
    <div style={footerStyle}>
      <Typography variant="h5">Total Price: {total} $</Typography>
      <Pay />
    </div>
  );
};

export default TotalPrice;
