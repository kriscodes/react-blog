import React from "react";
import database from "../../firebase/firebase";
import Blog from "./Blog";

const blogPosts = [];

export default class BlogView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const id = this.blogID();
    database
      .ref(`blogs/`)
      .once("value")
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          if (childSnapshot.key === id) {
            blogPosts.push({ id: childSnapshot.key, ...childSnapshot.val() });
            this.setState({
              id: id,
              blogPost: blogPosts[0]
            });
          }
        });
      });
  }

  blogID = () => {
    let parser = document.createElement("a");
    parser.href = window.location.href;
    let httpPath = parser.pathname;
    let blogID = "";

    for (let i = 6; i < httpPath.length; i++) {
      blogID += httpPath[i];
    }
    return blogID;
  };

  render() {
    return (
      <div>
        {this.state.blogPost ? (
          <div>
            <Blog key={this.state.id} {...this.state.blogPost} />
          </div>
        ) : (
          <div>
            <span>Loading...</span>
          </div>
        )}
      </div>
    );
  }
}
