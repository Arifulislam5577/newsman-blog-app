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
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAIL,
  CREATE_COMMENT_RESET,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  CREATE_POST_RESET,
  BLOG_DELETE_SUCCESS,
  BLOG_DELETE_RESET,
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

export const createCommentReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_COMMENT_REQUEST:
      return {
        loading: true,
      };

    case CREATE_COMMENT_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case CREATE_COMMENT_RESET:
      return {};

    case CREATE_COMMENT_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export const createPostReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_POST_REQUEST:
      return {
        postLoading: true,
      };

    case CREATE_POST_SUCCESS:
      return {
        postLoading: false,
        PostSuccess: true,
      };
    case CREATE_POST_RESET:
      return {};

    case CREATE_POST_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export const blogDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOG_DELETE_SUCCESS:
      return {
        loading: false,
        status: action.payload,
      };

    case BLOG_DELETE_RESET:
      return {};

    default:
      return state;
  }
};
