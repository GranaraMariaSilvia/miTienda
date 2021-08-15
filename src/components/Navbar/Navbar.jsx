import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";

import { ShoppingCart } from "@material-ui/icons";
import useStyle from "./styles";

import logo from "../../assets/commerce.png";

const Navbar = () => {
  const classes = useStyle();

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="tienda.js"
              height="25px"
              className={classes.image}
            />
            Mi Tienda
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary"></Badge>
              <ShoppingCart />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
