import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const ShoeCard = (props) => {
  const navigate = useNavigate();
  const { image, model, make, price, id, gender } = props;
  const { cartItems, setCartItems } = useContext(CartContext);
  const addToCart = (itemId) => {
    setCartItems(...cartItems, {
      id: itemId,
      image: image,
      company: make,
      model: model,
      price: price,
    });
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          onClick={() => navigate(`/shop/${make}/${model}/${id}/${gender}`)}
          component="img"
          height="180"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {make} {model}
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body2" color="text.secondary">
              Price {price}$
            </Typography>
            <IconButton onClick={() => addToCart(id)}>
              <AddShoppingCartIcon color="success" />
            </IconButton>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default ShoeCard;
