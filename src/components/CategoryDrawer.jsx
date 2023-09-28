import { Menu } from "@mui/icons-material";
import { Drawer, IconButton, List, ListItem } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const CategoryDrawer = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const toggleDrawer = (path) => {
    setOpen(!open);
    if (path) {
      navigate(path);
    }
  };

  return (
    <div>
      <IconButton onClick={toggleDrawer}>
        <Menu />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <List>
          <ListItem onClick={() => toggleDrawer("/shop/men")}>Men</ListItem>
          <ListItem onClick={() => toggleDrawer("/shop/women")}>Women</ListItem>
          <ListItem onClick={() => toggleDrawer("/shop/kids")}>Kids</ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default CategoryDrawer;
