import { Badge, Stack} from "@mui/material";
import React, { useContext } from "react";
import { Person, Search, ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
interface NavButtonsProps {
  textCursor: React.CSSProperties;
}
const NavButtons = ({ textCursor }: NavButtonsProps) => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  return (
    <Stack spacing={3} direction="row">
      <Search sx={textCursor} />
      <Person sx={textCursor} />
      <Badge badgeContent={cartItems.length} color="error">
        <ShoppingCart sx={textCursor} onClick={() => navigate("/cart")} />
      </Badge>
    </Stack>
  );
};

export default NavButtons;
