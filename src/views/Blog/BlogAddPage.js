import React from "react";
import BlogForm from "../../components/BlogPost/BlogForm.js";
import HeaderView from "views/Header/HeaderView.js";
import Footer from "components/Footer/Footer.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const useStyles = makeStyles(styles);

const BlogAddPage = () => {
  const classes = useStyles();
  return (
    <div>
      <HeaderView />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <h1 style={{ padding: "18px", textAlign: "center" }}>New Post</h1>
          <BlogForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogAddPage;
