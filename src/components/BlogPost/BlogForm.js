import React from "react";
import { Redirect } from "react-router-dom";
//import { addBlogPost, startAddBlogPost } from "../../actions/blogPosts";
import uuid from "uuid";
import database from "../../firebase/firebase";
import moment from "moment";

export default class BlogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: props.blogPost ? props.blogPost.category : "",
      title: props.blogPost ? props.blogPost.title : "",
      description: props.blogPost ? props.blogPost.description : "",
      date: moment().format("LL"),
      error: ""
    };
  }

  onCategoryChange = e => {
    const category = e.target.value;
    this.setState(() => ({ category }));
  };

  onTitleChange = e => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onPostDateChange = postDate => {
    if (postDate) {
      this.setState(() => ({ postDate }));
    }
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.title || !this.state.description) {
      return this.setState(() => ({
        error: "Please provide a title and content."
      }));
    } else {
      const uid = uuid();

      const category = this.state.category,
        title = this.state.title,
        description = this.state.description,
        date = this.state.date;

      const blogPost = { category, title, description, date };

      return database
        .ref(`blogs/${uid}/`)
        .set(blogPost)
        .then(ref => {
          this.setState({
            toDashboard: true,
            error: ""
          });
        });
    }
  };

  render() {
    const container = {
      paddingBottom: "32px"
    };
    const labelText = {
      fontSize: "18px",
      margin: "16px"
    };
    const inputText = {
      width: "100%",
      padding: "12px 20px",
      margin: "16px 0 16px 0",
      display: "inline-block",
      border: "1px solid #ccc",
      borderRadius: "4px",
      boxSizing: "border-box",
      lineHeight: "16px",
      fontSize: "16px"
    };
    const inputTextArea = {
      resize: "vertical",
      height: "auto",
      width: "100%",
      maxWidth: "100%",
      color: "#999",
      fontWeight: "400",
      fontSize: "24px",
      fontFamily: "'Ubuntu', Helvetica, Arial, sans-serif",
      background: "#fff",
      border: "none",
      borderRadius: "3px",
      lineHeight: "2em",
      boxShadow: "0px 0px 5px 1px rgba(0,0,0,0.1)",
      padding: "18px",
      margin: "18px 0"
    };
    const button = {
      width: "100%",
      display: "inline-block",
      padding: "0.5em 1.5em",
      border: "0.16em solid rgba(255,255,255,0)",
      borderRadius: "2em",
      boxSizing: "border-box",
      textDecoration: "none",
      fontFamily: "'Roboto',sans-serif",
      fontWeight: "500",
      fontSize: "16px",
      color: "rgb(255,255,255)",
      textShadow: "0 0.04em 0.04em rgba(0,0,0,0.35)",
      textAlign: "center",
      transition: "all 0.2s",
      backgroundColor: "#00018e"
    };
    const left = {
      textAlign: "left"
    };
    if (this.state.toDashboard === true) {
      return <Redirect to="/" />;
    }

    return (
      <div style={container}>
        <form onSubmit={this.onSubmit}>
          {this.state.error && (
            <p style={{ textAlign: "center" }}>{this.state.error}</p>
          )}
          {this.state.date && (
            <p style={{ textAlign: "center" }}>{this.state.date}</p>
          )}
          <div style={left}>
            <label style={labelText}>Category</label>
          </div>
          <input
            type="text"
            placeholder="Category"
            autoFocus
            style={inputText}
            value={this.state.category}
            onChange={this.onCategoryChange}
          />
          <br />
          <div style={left}>
            <label style={labelText}>Title</label>
          </div>
          <input
            type="text"
            style={inputText}
            placeholder="Title"
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <br />
          <div style={left}>
            <label style={labelText}>Content</label>
          </div>
          <textarea
            style={inputTextArea}
            placeholder="Type your post here."
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <div>
            <button style={button}>Post</button>
          </div>
        </form>
      </div>
    );
  }
}
