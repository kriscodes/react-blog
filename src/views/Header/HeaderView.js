import React from "react";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { makeStyles } from "@material-ui/core";
import styles from "assets/jss/material-kit-react/views/components.js";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

const HeaderView = props => {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Kristian Blogs"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg4.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Kristian's Blog</h1>
                <h3 className={classes.subtitle}>A Badass Blogging site.</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    </div>
  );
};

export default HeaderView;
