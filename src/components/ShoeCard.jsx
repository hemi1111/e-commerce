import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ShoeCard = (props) => {
  const { image, model, make, price } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {make} {model}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price {price}$
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default ShoeCard;
