import { useQuery } from "@apollo/client";
import { FILTER_BY_CATEGORY } from "../../queries/queries";
import { Box, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ShoeCard from "../../components/ShoeCard";
import { useLocation } from "react-router-dom";
import { Shoe } from "./types";
const Shop = () => {
  const { category, gender } = useParams();
  const location = useLocation();
  const genderVariable = gender && gender.charAt(0).toUpperCase() + gender.slice(1);
  const categoryName = category && category.charAt(0).toUpperCase() + category.slice(1);

  const { data } = useQuery(FILTER_BY_CATEGORY, {
    variables: {
      gender: genderVariable,
      category: categoryName,
    },
  });
  return (
    <div>
      {categoryName && genderVariable && <Typography variant="h3" sx={{ ml: "27%", mt: "20px" }}>
        {location.pathname === "/shop/category/kids"
          ? `NEW ${categoryName.toUpperCase()}' COLLECTION`
          : `NEW ${genderVariable.toUpperCase()}'S ${categoryName.toUpperCase()} COLLECTION`}
      </Typography>}
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
          {data &&
            data.shoes.map((shoe: Shoe) => (
              <Grid item key={shoe.id} xs={12} sm={6} md={4} lg={3}>
                <ShoeCard
                  id={shoe.id}
                  size={shoe.size}
                  gender={shoe.gender}
                  image={shoe.image}
                  model={shoe.name}
                  make={shoe.company}
                  price={shoe.price}
                />
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Shop;
