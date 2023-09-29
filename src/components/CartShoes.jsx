import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CartContext } from "../context/CartContext";
const CartShoes = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={cartItems.company} subheader={cartItems.model} />
      <CardMedia
        component="img"
        height="194"
        image={cartItems.image}
        alt={cartItems.model}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CartShoes;
