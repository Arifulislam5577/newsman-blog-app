import {
  ALL_BLOGS_FAIL,
  ALL_BLOGS_REQUEST,
  ALL_BLOGS_SUCCESS,
  BLOGS_CATEGORY_REQUEST,
  BLOGS_CATEGORY_SUCCESS,
  BLOGS_CATEGORY_FAIL,
  BLOG_BY_ID_REQUEST,
  BLOG_BY_ID_SUCCESS,
  BLOG_BY_ID_FAIL,
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
        categories: action.payload.categories,
      };

    case ALL_BLOGS_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export const categoryBlogsReducers = (state = {}, action) => {
  switch (action.type) {
    case BLOGS_CATEGORY_REQUEST:
      return {
        loading: true,
      };

    case BLOGS_CATEGORY_SUCCESS:
      return {
        loading: false,
        categoryBlogs: action.payload.categoryBlogs,
        categoryResult: action.payload.result,
      };

    case BLOGS_CATEGORY_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
export const blogByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOG_BY_ID_REQUEST:
      return {
        loading: true,
      };

    case BLOG_BY_ID_SUCCESS:
      return {
        loading: false,
        blog: action.payload,
      };

    case BLOG_BY_ID_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
