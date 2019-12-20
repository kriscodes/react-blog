const blogPostsReducerDefaultState = [];

export default (state = blogPostsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_BLOG_POST':
            return [
                ...state,
                action.blogPost
            ];
        case 'SET_BLOG_POST':
            return action.blogPosts;
        case 'VIEW_BLOG_POST:':
            return state.map((blogPost) => {
                if(blogPost.id === action.id) {
                    return {
                        ...blogPost,
                        ...action.updates
                    };
                }
                else {
                    return blogPost;
                }
            });
        default:
            return state;
    }
}