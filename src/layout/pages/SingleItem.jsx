import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_SINGLE_ITEM } from "../../queries/queries";
import { CircularProgress } from "@mui/material";
const SingleItem = () => {
  const { id, shoeCompany, shoeName } = useParams();
  const { data, loading, error } = useQuery(GET_SINGLE_ITEM, {
    variables: { id: id },
  });

  if (loading) return <CircularProgress />;

  return (
    <div>
      <h1>This is item no1.{id}</h1>
      <h1>Company {shoeCompany}</h1>
      <h1>Model {shoeName}</h1>
      <img
        src={data.shoes[0]?.image}
        alt={data.shoes[0]?.name}
        width="400px"
        height="300px"
      />
    </div>
  );
};

export default SingleItem;
