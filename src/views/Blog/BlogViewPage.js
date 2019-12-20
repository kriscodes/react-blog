import React from "react";
import BlogView from "components/BlogPost/BlogView.js";
import HeaderView from "views/Header/HeaderView.js";
import classNames from "classnames";
import Footer from "components/Footer/Footer.js";
import { makeStyles } from "@material-ui/core";
import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

const BlogViewPage = () => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <HeaderView />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <BlogView />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default BlogViewPage;
