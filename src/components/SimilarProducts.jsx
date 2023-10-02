import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import { useQuery } from "@apollo/client";
import { GET_SIMILAR_PRODUCTS } from "../queries/queries";
import { useParams } from "react-router";
import SimilarCard from "./SimilarCard";
import { CircularProgress, Typography } from "@mui/material";
const SimilarProducts = () => {
  const { gender } = useParams();
  const categoryName = gender.charAt(0).toUpperCase() + gender.slice(1);

  const { data, loading, error } = useQuery(GET_SIMILAR_PRODUCTS, {
    variables: {
      category: categoryName,
    },
  });

  console.log(data);

  if (loading) return <CircularProgress />;
  if (error) return console.log(error);
  return (
    <div style={{ width: "80%" }}>
      <Typography variant="h5" sx={{ ml: "42%", mb: "20px" }}>
        Shop Similar products
      </Typography>
      <Carousel show={3} slide={3} swiping={true}>
        {data &&
          data.shoes.map((shoe, index) => {
            return (
              <SimilarCard
                key={index}
                size={shoe.size}
                image={shoe.image}
                model={shoe.name}
                make={shoe.company}
                id={shoe.id}
                gender={shoe.gender}
              />
            );
          })}
      </Carousel>
    </div>
  );
};

export default SimilarProducts;
