import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { CartContext } from "../context/CartContext";

const CartShoes = (props) => {
  const { id, company, model, image, size, quantity } = props;

  const { setCartItems, cartItems } = useContext(CartContext);
  const handleQuantity = (itemId, operation) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        if (operation === "increment") {
          // If the operation is "increment", increment the quantity by 1
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else if (operation === "decrement" && item.quantity > 0) {
          // If the operation is "decrement" and quantity > 0, decrement by 1
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
      }
      return item; // Return unchanged items
    });

    // Filter out items with quantity greater than 0
    const filteredItems = updatedCartItems.filter((item) => item.quantity > 0);

    setCartItems(filteredItems);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title={company} subheader={model} />
        <CardMedia component="img" height="194" image={image} alt={model} />
        <CardContent>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1.5 }}
              >
                Size:{size} EU
              </Typography>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                variant="contained"
                onClick={() => handleQuantity(id, "increment")}
              >
                +
              </Button>
              <Typography
                variant="h6"
                sx={{ ml: "10px", mr: "10px", mt: "2px" }}
              >
                {quantity}
              </Typography>

              <Button
                variant="contained"
                color="error"
                onClick={() => handleQuantity(id, "decrement")}
              >
                -
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CartShoes;
