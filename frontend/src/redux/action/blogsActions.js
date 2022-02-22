import axios from "axios";
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
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAIL,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_RESET,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  CREATE_POST_RESET,
  BLOG_DELETE_SUCCESS,
  BLOG_DELETE_RESET,
} from "../constants/constants";

export const fetchBlogs =
  (page = 1, category = "", keyword = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_BLOGS_REQUEST });

      let API = `/api/v1/blog?page=${page}&keyword=${keyword}`;

      if (category) {
        API = `/api/v1/blog?category=${category}`;
      }

      const { data } = await axios.get(`${API}`);

      dispatch({
        type: ALL_BLOGS_SUCCESS,
        payload: {
          totalBlogs: data.totalBlogs,
          resultPerPage: data.resultPerPage,
          result: data.result,
          blogs: data.blogs,
          categories: data.categories,
        },
      });
    } catch (error) {
      dispatch({
        type: ALL_BLOGS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
      });
    }
  };

export const createBlog =
  (title, url, description, category) => async (dispatch, getState) => {
    try {
      dispatch({ type: CREATE_POST_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.post(
        `/api/v1/blog`,
        { title, url, description, category },
        config
      );

      dispatch({
        type: CREATE_POST_SUCCESS,
      });
      dispatch({
        type: CREATE_POST_RESET,
      });
    } catch (error) {
      dispatch({
        type: CREATE_POST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
      });
    }
  };
export const blogsByCategory = (category) => async (dispatch) => {
  try {
    dispatch({ type: BLOGS_CATEGORY_REQUEST });

    let API = `/api/v1/blog`;

    if (category) {
      API = `/api/v1/blog?category=${category}`;
    }
    const { data } = await axios.get(`${API}`);

    dispatch({
      type: BLOGS_CATEGORY_SUCCESS,
      payload: {
        categoryResult: data.result,
        categoryBlogs: data.blogs,
      },
    });
  } catch (error) {
    dispatch({
      type: BLOGS_CATEGORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const blogById = (id) => async (dispatch) => {
  try {
    dispatch({ type: BLOG_BY_ID_REQUEST });

    let API = `/api/v1/blog`;

    const { data } = await axios.get(`${API}/${id}`);

    dispatch({
      type: BLOG_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BLOG_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const deleteBlogPost = (id) => async (dispatch, getState) => {
  const {
    userLogin: { userInfo },
  } = getState();
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  let API = `/api/v1/blog`;

  const { data } = await axios.delete(`${API}/${id}`, config);

  dispatch({
    type: BLOG_DELETE_SUCCESS,
    payload: data.status,
  });
  dispatch({
    type: BLOG_DELETE_RESET,
  });
};

export const createComment =
  (id, name, comment) => async (dispatch, getState) => {
    try {
      dispatch({ type: CREATE_COMMENT_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.post(`/api/v1/blog/${id}`, { name, comment }, config);

      dispatch({
        type: CREATE_COMMENT_SUCCESS,
      });
      dispatch({
        type: CREATE_COMMENT_RESET,
      });
    } catch (error) {
      dispatch({
        type: CREATE_COMMENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
      });
    }
  };
