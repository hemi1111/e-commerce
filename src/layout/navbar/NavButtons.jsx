import { Badge, Stack, Typography } from "@mui/material";
import React from "react";
import { Person, Search, ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const NavButtons = ({ textCursor }) => {
  const navigate = useNavigate();

  return (
    <Stack spacing={3} direction="row">
      <Search sx={textCursor} />
      <Person sx={textCursor} />
      <Badge badgeContent={1} color="primary">
        <ShoppingCart sx={textCursor} onClick={() => navigate("/cart")} />
      </Badge>
    </Stack>
  );
};

export default NavButtons;
