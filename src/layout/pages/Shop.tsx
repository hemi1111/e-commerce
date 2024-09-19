import { useQuery } from "@apollo/client";
import { GET_SHOES } from "../../queries/queries";
import { Box, Grid, Typography } from "@mui/material";
import ShoeCard from "../../components/ShoeCard";
import { Shoe, ShoesData } from "./types";

const Shop = () => {
  const { data } = useQuery<ShoesData>(GET_SHOES);

  return (
    <div>
      <Typography variant="h3" sx={{ ml: "42%", mt: "20px" }}>
        NEW ARRIVALS
      </Typography>
      <Box
        sx={{
          marginTop: "5px",
          padding: "20px",
          // marginLeft: "5%",
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
