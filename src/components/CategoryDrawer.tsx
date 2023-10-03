import { Menu } from "@mui/icons-material";
import { Drawer, IconButton } from "@mui/material";
import  { useState } from "react";
import DrawerList from "./DrawerList";
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
        <DrawerList open={open} setOpen={setOpen} />
      </Drawer>
    </div>
  );
};

export default CategoryDrawer;
