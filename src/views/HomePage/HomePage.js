import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/HeaderView/HeaderViewView.js";
import HeaderLinks from "components/HeaderView/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import SectionBasics from "../Components/Sections/SectionBasics";
import SectionNavbars from "../Components/Sections/SectionNavbars";
import SectionTabs from "../Components/Sections/SectionTabs";
import SectionPills from "../Components/Sections/SectionPills";
import SectionNotifications from "../Components/Sections/SectionNotifications";
import SectionTypography from "../Components/Sections/SectionTypography";
import SectionJavascript from "../Components/Sections/SectionJavascript";
import SectionCarousel from "../Components/Sections/SectionCarousel";
import SectionCompletedExamples from "../Components/Sections/SectionCompletedExamples";
import SectionLogin from "../Components/Sections/SectionLogin";
import SectionExamples from "../Components/Sections/SectionExamples";
import SectionDownload from "../Components/Sections/SectionDownload";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

export default function HomePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      ></Header>
      <Parallax image={require("assets/img/bg4.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Material Kit React.</h1>
                <h3 className={classes.subtitle}>
                  A Badass Material-UI Kit based on Material Design.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionBasics />
      </div>
      <Footer />
    </div>
  );
}
