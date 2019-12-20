import database from "../firebase/firebase";
import uuid from "uuid";

// ADD_BLOG_POST
export const addBlogPost = blogPost => ({
  type: "ADD_BLOG_POST",
  blogPost
});

export const startAddBlogPost = (blogPostData = {}) => {
  return dispatch => {
    const uid = uuid();

    const { category = "", title = "", description = "" } = blogPostData;
    const blogPost = { category, title, description };
    console.log(blogPost);

    return database
      .ref(`blogs/${uid}/`)
      .set(blogPost)
      .then(ref => {
        dispatch(
          addBlogPost({
            ...blogPost
          })
        );
      });
  };
};

// REMOVE_BLOG_POST
export const removeBlogPost = ({ id } = {}) => ({
  type: "REMOVE_BLOG_POST",
  id
});

export const startRemoveBlogPost = ({ id } = {}) => {
  return dispatch => {
    return database
      .ref(`blogs/${id}`)
      .remove()
      .then(() => {
        dispatch(removeBlogPost({ id }));
      });
  };
};

// EDIT_BLOG_POST
export const editBlogPost = (id, updates) => ({
  type: "EDIT_BLOG_POST",
  id,
  updates
});

export const startEditBlogPost = (id, updates) => {
  return dispatch => {
    return database
      .ref(`blogs/${id}/data`)
      .update(updates)
      .then(() => {
        dispatch(editBlogPost({ id, updates }));
      });
  };
};

// SET_BLOG_POST
export const setBlogPosts = blogPosts => ({
  type: "SET_BLOG_POST",
  blogPosts
});

export const startSetBlogPosts = () => {
  return dispatch => {
    return database
      .ref(`blogs/`)
      .once("value")
      .then(snapshot => {
        const blogPosts = [];
        snapshot.forEach(childSnapshot => {
          blogPosts.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setBlogPosts(blogPosts));
      });
  };
};
