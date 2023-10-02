import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
const ShoeCard = (props) => {
  const navigate = useNavigate();
  const { image, model, make, price, id, gender, size } = props;
  const { cartItems, setCartItems } = useContext(CartContext);

  const addToCart = (itemId, e) => {
    const itemIndex = cartItems.findIndex((shoe) => shoe.id === itemId);

    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      const newItem = {
        id: itemId,
        image: image,
        company: make,
        model: model,
        price: price,
        size: size,
        quantity: 1,
      };
      setCartItems((prevItems) => [...prevItems, newItem]);
    }

    e.preventDefault();
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          onClick={() => navigate(`/shop/${make}/${model}/${id}/${gender}`)}
          component="img"
          height="180px"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {make} {model}
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Typography variant="body2" color="text.secondary">
                Price {price}$
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Size: {size} EU
              </Typography>
            </div>
            <IconButton onClick={(e) => addToCart(id, e)}>
              <AddShoppingCartIcon color="success" />
            </IconButton>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default ShoeCard;
