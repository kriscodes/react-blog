import React from "react";
import styles from "assets/jss/material-kit-react/components/blogStyle.js";
import { makeStyles } from "@material-ui/core/styles";

import blogImage from "assets/img/blog/ang_reac.png";

const useStyles = makeStyles(styles);

const Blog = ({ id, category, title, description, date }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.section}>
        <div className={classes.title}>
          <h1>{title}</h1>
        </div>
        <img alt="blogImage" src={blogImage} className={classes.image} />
        <div className={classes.title}>
          <h3>{title}</h3>
        </div>
        <div className={classes.date}>
          <h4>{date}</h4>
        </div>
        <div className={classes.text}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
