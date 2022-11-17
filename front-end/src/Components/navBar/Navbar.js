import {AppBar,Badge,Box,Button,Typography,Toolbar} from "@material-ui/core";
import {Divider,Drawer,IconButton,List,ListItem,ListItemButton,ListItemText,
} from "@mui/material";

import { ShoppingCart, Menu as MenuIcon } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import * as Scroll from "react-scroll";



function Navbar(props) {
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { quantity } = useSelector((state) => state.cart);
  const navItems = ["Catagories", "Products", "ContactUs"];
  const scroller = Scroll.scroller;

  const scrollToProducts = () => {
    scroller.scrollTo("products", {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -110,
    });
  };

  const scrollToCatagories = () => {
    scroller.scrollTo("catagories", {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -80,
    });
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar color="white" position="fixed">
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" onClick={handleDrawerToggle}>
            <MenuIcon className={classes.drewer} />
          </IconButton>
          <Box>
            <Link to="/">
              <Typography className={classes.logo}>Ethio Fashion</Typography>
            </Link>
          </Box>

          <Box className={classes.menu}>
            <Button className={classes.menuItem} onClick={scrollToCatagories}>
              Catagories
            </Button>
            <Button className={classes.menuItem} onClick={scrollToProducts}>
              Products
            </Button>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button className={classes.menuItem}>AboutUs</Button>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button className={classes.menuItem}>ContactUs</Button>
            </Link>
          </Box>

          <Box className={classes.right}>
            <Typography
              style={{ marginRight: "10px" }}
              className={classes.icons}
            >
              Register
            </Typography>

            <Link to="/logIn">
              <Typography
                style={{ marginRight: "10px" }}
                className={classes.icons}
              >
                SignIn
              </Typography>
            </Link>

            <Badge
              badgeContent={quantity}
              color="secondary"
              className={classes.icons}
            >
              <ShoppingCart />
            </Badge>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 200,
            },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography className={classes.logo} style={{ marginLeft: "30px" }}>
              Ethio Fashion
            </Typography>

            <Divider />
            <List>
              {navItems.map((item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <Link to={`/${item}`}>
                      <ListItemText primary={item} />
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </>
  );
}

export default Navbar;
