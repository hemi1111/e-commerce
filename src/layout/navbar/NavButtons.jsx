import { Badge, Stack, Typography } from "@mui/material";
import React from "react";
import { Person, Search, ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const NavButtons = () => {
  const navigate = useNavigate();
  const textCursor = {
    color: "black",
    cursor: "pointer",
    fontFamily: "BlinkMacSystemFont",
  };
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
        <Typography variant="h6" sx={textCursor} onClick={() => navigate("/")}>
          HOME
        </Typography>
        <Typography variant="h6" sx={textCursor}>
          SHOP
        </Typography>
        <Typography
          variant="h6"
          sx={textCursor}
          onClick={() => navigate("/contact")}
        >
          CONTACT
        </Typography>
      </div>
      <Stack spacing={3} direction="row">
        <Search sx={textCursor} />
        <Person sx={textCursor} />
        <Badge badgeContent={1} color="primary">
          <ShoppingCart />
        </Badge>
      </Stack>
    </div>
  );
};

export default NavButtons;
