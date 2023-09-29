import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
const ShoeCard = (props) => {
  const navigate = useNavigate();
  const { image, model, make, id, gender } = props;

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
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default ShoeCard;
