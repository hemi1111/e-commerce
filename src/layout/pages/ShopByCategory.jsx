import { useQuery } from "@apollo/client";
import React from "react";
import { FILTER_BY_CATEGORY } from "../../queries/queries";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ShoeCard from "../../components/ShoeCard";
import { useLocation } from "react-router-dom";
const Shop = () => {
  const { category } = useParams();
  const location = useLocation();
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
  const navigate = useNavigate();

  const { data, error } = useQuery(FILTER_BY_CATEGORY, {
    variables: {
      category: categoryName,
    },
  });
  console.log(categoryName);
  if (error) return console.log(error);
  return (
    <div>
      <Typography variant="h3" sx={{ ml: "35%", mt: "20px" }}>
        {location.pathname === "/shop/kids"
          ? `NEW ${categoryName.toUpperCase()}' COLLECTION`
          : `NEW ${categoryName.toUpperCase()}'S COLLECTION`}
      </Typography>
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
            data.shoes.map((shoe) => (
              <Grid
                item
                key={shoe.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                onClick={() =>
                  navigate(`/shop/${shoe.company}/${shoe.name}/${shoe.id}`)
                }
              >
                <ShoeCard
                  key={shoe.id}
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
