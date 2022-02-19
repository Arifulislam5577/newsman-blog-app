import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { blogsReducers, categoryBlogsReducers } from "../reducers/blogReducers";

const rootReducers = combineReducers({
  blogsDetails: blogsReducers,
  categoryBlog: categoryBlogsReducers,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
