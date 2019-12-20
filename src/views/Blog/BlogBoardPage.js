import React from "react";
import Header from "views/Header/HeaderView.js";
import BlogPostList from "components/BlogPost/BlogPostList";
import classNames from "classnames";
import Footer from "components/Footer/Footer.js";
import { makeStyles } from "@material-ui/core";
import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

const BlogBoardPage = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <BlogPostList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogBoardPage;
