import { useQuery } from "@apollo/client";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GET_SINGLE_ITEM } from "../../queries/queries";
import { Button, CircularProgress } from "@mui/material";
import ShoeCard from "../../components/ShoeCard";
import { ArrowBack } from "@mui/icons-material";
import SimilarProducts from "../../components/SimilarProducts";
const SingleItem = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_SINGLE_ITEM, {
    variables: { id: id },
  });

  const navigate = useNavigate();
  if (loading) return <CircularProgress />;
  if (error) return console.log(error);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        onClick={() => navigate(-1)}
        sx={{ position: "absoulte", ml: "-95%", mt: "20px", mb: "100px" }}
        color="error"
      >
        <ArrowBack />
      </Button>
      <ShoeCard
        image={data.shoes[0]?.image}
        model={data.shoes[0]?.name}
        make={data.shoes[0].company}
        price={data.shoes[0].price}
        id={data.shoes[0].id}
      />
      <div style={{ marginTop: "80px" }}></div>
      <SimilarProducts />
    </div>
  );
};

export default SingleItem;
