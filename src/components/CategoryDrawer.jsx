import { Menu } from "@mui/icons-material";
import { Drawer, IconButton, List, ListItem } from "@mui/material";
import React, { useState } from "react";

const CategoryDrawer = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <div>
      <IconButton onClick={toggleDrawer}>
        <Menu />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <List>
          <ListItem>Men</ListItem>
          <ListItem>Women</ListItem>
          <ListItem>Kids</ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default CategoryDrawer;
