import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const CartShoes = (props) => {
  const { company, model, image, size, quantity } = props;

  const [itemQuantity, setItemQuantity] = useState(quantity);
  const handleCartQuantityPlus = () => {
    setItemQuantity(itemQuantity + 1);
  };
  const handleCartQuantityMinus = () => {
    setItemQuantity(itemQuantity - 1);
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
                Size:{size}
              </Typography>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button variant="contained" onClick={handleCartQuantityPlus}>
                +
              </Button>
              {itemQuantity}
              <Button
                variant="contained"
                color="error"
                onClick={handleCartQuantityMinus}
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
