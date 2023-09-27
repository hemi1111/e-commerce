import { Button, Typography } from "@mui/material";
import React from "react";
import drose from "../../../assets/drose.png";
const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: "#EEEEEE",
      }}
    >
      <div>
        <Typography variant="h6">SPRING/WINTER COLLECTION 2023</Typography>
        <Typography variant="h3">Discover The New Arrivals</Typography>
        <Button variant="contained" color="error">
          SHOP NOW
        </Button>
      </div>
      <img src={drose} alt="drose" />
    </div>
  );
};

export default HomePage;
