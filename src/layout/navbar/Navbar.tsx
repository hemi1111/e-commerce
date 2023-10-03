import { Box, Typography, CssBaseline, Toolbar, AppBar } from "@mui/material";
import React from "react";
import NavButtons from "./NavButtons";
import { useNavigate, Outlet } from "react-router-dom";
import CategoryDrawer from "../../components/CategoryDrawer";

const Navbar = () => {
  const textCursor:React.CSSProperties = {
    color: "black",
    cursor: "pointer",
    fontFamily: "BlinkMacSystemFont",
  };
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", height: "93vh" }}>
      <CssBaseline />
      <AppBar sx={{ background: "#d1d1d1" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <CategoryDrawer />
            <Typography
              variant="h5"
              style={textCursor}
              onClick={() => navigate("/")}
            >
              HOME
            </Typography>
          </div>
          <div style={{ display: "flex", marginLeft: "4%" }}>
            <Typography
              variant="h5"
              sx={{
                color: "black",
                fontSize: "1.7em",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                fontFamily: "Verdana",
              }}
            >
              BIGU
            </Typography>
            <Typography
              variant="h5"
              color="error"
              sx={{
                fontSize: "1.7em",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                fontFamily: "Verdana",
              }}
            >
              &nbsp; SNEAKERS
            </Typography>
          </div>
          <NavButtons textCursor={textCursor} />
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ width: "100%" }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Navbar;
