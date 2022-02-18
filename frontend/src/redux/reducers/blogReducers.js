import {
  ALL_BLOGS_FAIL,
  ALL_BLOGS_REQUEST,
  ALL_BLOGS_SUCCESS,
} from "../constants/constants";

export const blogsReducers = (state = { blogs: [] }, action) => {
  switch (action.type) {
    case ALL_BLOGS_REQUEST:
      return {
        loading: true,
        blogs: [],
      };
    case ALL_BLOGS_SUCCESS:
      return {
        loading: false,
        blogs: action.payload.blogs,
        result: action.payload.result,
        resultPerPage: action.payload.resultPerPage,
        totalBlogs: action.payload.totalBlogs,
      };

    case ALL_BLOGS_FAIL:
      return {
        errors: action.payload,
      };
    default:
      return state;
  }
};
