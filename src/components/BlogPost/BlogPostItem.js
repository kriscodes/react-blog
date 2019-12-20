import React from "react";
import { Link } from "react-router-dom";
import styles from "assets/jss/material-kit-react/components/blogStyle.js";
import { makeStyles } from "@material-ui/core/styles";

import blogImage from "assets/img/blog/ang_reac.png";

const useStyles = makeStyles(styles);

const descriptionText = text => {
  if (text.length < 400) {
    return text;
  } else {
    return text.slice(0, 400) + " Click to continue reading...";
  }
};

const BlogPostItem = ({ id, category, title, description, date }) => {
  const classes = useStyles();

  return (
    <Link to={`/blog/${id}`}>
      <div className={classes.section}>
        <div className={classes.imageContainer}>
          <img alt="blogImage" className={classes.image} src={blogImage} />
        </div>
        <div className={classes.category}>
          <small style={{ fontSize: "18px" }}>{category}</small>
        </div>
        <div>
          <h2 className={classes.title}>{title}</h2>
        </div>
        <div>
          <h5 className={classes.text}>{date}</h5>
        </div>
        <div className={classes.text}>
          <p>{descriptionText(description)}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostItem;
