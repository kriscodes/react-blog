import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import blogPostReducer from "../reducers/blogPosts";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      blogPosts: blogPostReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
