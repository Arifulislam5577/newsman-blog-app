import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  blogByIdReducer,
  blogsReducers,
  categoryBlogsReducers,
  createCommentReducer,
} from "../reducers/blogReducers";
import { userLoginReducer, userSignupReducer } from "../reducers/userReducers";

const rootReducers = combineReducers({
  blogsDetails: blogsReducers,
  categoryBlog: categoryBlogsReducers,
  blogDetail: blogByIdReducer,
  userLogin: userLoginReducer,
  userSignup: userSignupReducer,
  commentCreate: createCommentReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];

const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
