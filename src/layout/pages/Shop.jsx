import { useQuery } from "@apollo/client";
import React from "react";
import { GET_SHOES } from "../../queries/queries";
import { Box, Grid, Typography } from "@mui/material";
import ShoeCard from "../../components/ShoeCard";
const Shop = () => {
  const { data, error } = useQuery(GET_SHOES);
  if (error) return console.log(error);
  console.log(data && data);
  return (
    <div>
      <Typography variant="h3" sx={{ ml: "42%", mt: "20px" }}>
        NEW ARRIVALS
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
              <Grid item key={shoe.id} xs={12} sm={6} md={4} lg={3}>
                <ShoeCard
                  size={shoe.size}
                  id={shoe.id}
                  image={shoe.image}
                  model={shoe.name}
                  make={shoe.company}
                  price={shoe.price}
                  gender={shoe.gender}
                />
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Shop;
