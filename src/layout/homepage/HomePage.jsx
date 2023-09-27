import { Button, Typography } from "@mui/material";
import React from "react";
import drose from "../../assets/drose.png";
import peza from "../../assets/lokacioniPEZ.jpg";
import nike from "../../assets/Nike Japan’s Air Max Day 3D Billboard.mp4";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "55%",
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
      <div>
        <video src={nike} autoPlay muted loop controls={false} width="100%" />
        <div style={{ marginLeft: "35%", marginTop: "10px" }}>
          <Typography variant="h5" id="peza">
            Visit Our Shop Located In Peza City, Ca di ti per pezen
          </Typography>
          <Typography variant="h6">Bleni atlete mos ecni zbath</Typography>
          <Typography variant="h6">
            Contact us via email: atletespektakel@gmail.com
          </Typography>
          <Typography variant="h6">Phone Number: +355 686868521</Typography>
        </div>
        <img src={peza} height="900px" style={{ marginLeft: "25%" }} />
      </div>
    </div>
  );
};

export default HomePage;
