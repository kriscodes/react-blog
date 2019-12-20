import React, { Component } from "react";
import BlogPostItem from "./BlogPostItem";
import database from "../../firebase/firebase";

let blogPosts = [];

export default class BlogPostList extends Component {
  componentDidMount() {
    database
      .ref(`blogs/`)
      .once("value")
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          let unique = true;
          for (let i = 0; i < blogPosts.length; i++) {
            if (blogPosts[i].id === childSnapshot.key) {
              unique = false;
              break;
            }
          }
          if (unique) {
            blogPosts.push({
              id: childSnapshot.key,
              ...childSnapshot.val()
            });
          }
        });
        this.setState({
          blogPosts: blogPosts
        });
      });
  }

  render() {
    return (
      <div>
        {blogPosts.length === 0 ? (
          <div>
            <span>No blog posts.</span>
          </div>
        ) : (
          blogPosts.map(blogPost => {
            return <BlogPostItem key={blogPost.id} {...blogPost} />;
          })
        )}
      </div>
    );
  }
}
