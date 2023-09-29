import React, { useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ChildCare, Man, Woman } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const DrawerList = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const [openWomen, setOpenWomen] = useState(false);
  const [openMen, setOpenMen] = useState(false);
  const [openKids, setOpenKids] = useState(false);

  const handleClickWomen = () => {
    setOpenWomen(!openWomen);
  };
  const handleClickMen = () => {
    setOpenMen(!openMen);
  };
  const handleClickKids = () => {
    setOpenKids(!openKids);
  };

  return (
    <List
      sx={{ width: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Shop By Categories
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClickWomen}>
        <ListItemIcon>
          <Woman />
        </ListItemIcon>
        <ListItemText primary="Women" />
        {openWomen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openWomen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 9 }}
            onClick={() => {
              navigate("/shop/category/women/running");
              setOpen(!open);
            }}
          >
            <ListItemText primary="Running" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 9 }}
            onClick={() => {
              navigate("/shop/category/women/basketball");
              setOpen(!open);
            }}
          >
            <ListItemText primary="Basketball" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 9 }}
            onClick={() => {
              navigate("/shop/category/women/lifestyle");
              setOpen(!open);
            }}
          >
            <ListItemText primary="Lifestyle" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickMen}>
        <ListItemIcon>
          <Man />
        </ListItemIcon>
        <ListItemText primary="Men" />
        {openMen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openMen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 9 }}
            onClick={() => {
              navigate("/shop/category/men/running");
              setOpen(!open);
            }}
          >
            <ListItemText primary="Running" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 9 }}
            onClick={() => {
              navigate("/shop/category/men/basketball");
              setOpen(!open);
            }}
          >
            <ListItemText primary="Basketball" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 9 }}
            onClick={() => {
              navigate("/shop/category/men/lifestyle");
              setOpen(!open);
            }}
          >
            <ListItemText primary="Lifestyle" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickKids}>
        <ListItemIcon>
          <ChildCare />
        </ListItemIcon>
        <ListItemText primary="Kids" />
        {openKids ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openKids} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 9 }}
            onClick={() => {
              navigate("/shop/category/kids/running");
              setOpen(!open);
            }}
          >
            <ListItemText primary="Running" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 9 }}
            onClick={() => {
              navigate("/shop/category/kids/basketball");
              setOpen(!open);
            }}
          >
            <ListItemText primary="Basketball" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 9 }}
            onClick={() => {
              navigate("/shop/category/kids/lifestyle");
              setOpen(!open);
            }}
          >
            <ListItemText primary="Lifestyle" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

export default DrawerList;
