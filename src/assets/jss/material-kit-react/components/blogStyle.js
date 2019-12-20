import { container, title } from "assets/jss/material-kit-react.js";

const blogStyle = {
  section: {
    padding: "35px 18px"
  },
  container,
  title: {
    ...title,
    marginTop: "0px",
    minHeight: "24px",
    textDecoration: "none"
  },
  category: {
    marginTop: "12px",
    minHeight: "12px",
    textDecoration: "none"
  },
  text: {
    color: "black"
  },
  image: {
    width: "50%",
    height: "50%"
  },
  imageContainer: {
    resizeMode: "contain"
  }
};

export default blogStyle;
