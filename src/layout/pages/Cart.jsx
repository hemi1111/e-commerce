import React from "react";
import CartShoes from "../../components/CartShoes";
import { Grid, Box } from "@mui/material";

const Cart = () => {
  return (
    <Box
      sx={{
        marginTop: "20px",
        marginLeft: "5%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CartShoes />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
