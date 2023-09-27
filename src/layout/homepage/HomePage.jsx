import { Button, Typography } from "@mui/material";
import React from "react";
import drose from "../../assets/drose.png";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
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
        <Button
          variant="contained"
          color="error"
          onClick={() => navigate("/shop")}
        >
          SHOP NOW
        </Button>
      </div>
      <img src={drose} alt="drose" />
    </div>
  );
};

export default HomePage;
