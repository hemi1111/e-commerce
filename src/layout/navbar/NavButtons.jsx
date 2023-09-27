import { Typography } from "@mui/material";
import React from "react";
import { Person, Search, ShoppingCart } from "@mui/icons-material";
const NavButtons = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "25%",
        justifyContent: "space-between",
        marginRight: "5%",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "60%",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" sx={{ color: "black" }}>
          HOME
        </Typography>
        <Typography variant="h6" sx={{ color: "black" }}>
          SHOP
        </Typography>
        <Typography variant="h6" sx={{ color: "black" }}>
          CONTACT
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          width: "25%",
          justifyContent: "space-between",
          marginTop: "3px",
        }}
      >
        <Search />
        <Person />
        <ShoppingCart />
      </div>
    </div>
  );
};

export default NavButtons;
