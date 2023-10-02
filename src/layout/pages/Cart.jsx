import React, { useContext } from "react";
import CartShoes from "../../components/CartShoes";
import { Grid, Box, Typography } from "@mui/material";
import { CartContext } from "../../context/CartContext";
import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import TotalPrice from "../../components/TotalPrice";
const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div>
      <Button
        variant="contained"
        color="error"
        onClick={() => navigate(-1)}
        sx={{ m: 2 }}
      >
        <ArrowBack />
      </Button>
      <Box
        sx={{
          marginTop: "20px",
          marginLeft: "5%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {cartItems.length === 0 ? (
          <Typography variant="h4">
            You have no items added to the cart
          </Typography>
        ) : (
          <>
            <Grid container spacing={5}>
              {cartItems.map((shoe) => {
                return (
                  <Grid key={shoe.id} item xs={12} sm={6} md={4} lg={3}>
                    <CartShoes
                      id={shoe.id}
                      quantity={shoe.quantity}
                      size={shoe.size}
                      company={shoe.company}
                      model={shoe.model}
                      image={shoe.image}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </>
        )}
      </Box>
      <div style={{ marginTop: "18%" }}>
        <TotalPrice />
      </div>
    </div>
  );
};

export default Cart;
