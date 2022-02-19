import axios from "axios";
import {
  ALL_BLOGS_FAIL,
  ALL_BLOGS_REQUEST,
  ALL_BLOGS_SUCCESS,
  BLOGS_CATEGORY_REQUEST,
  BLOGS_CATEGORY_SUCCESS,
  BLOGS_CATEGORY_FAIL,
} from "../constants/constants";

export const fetchBlogs =
  (page = 1, category = "", keyword = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_BLOGS_REQUEST });

      let API = `http://localhost:5000/api/v1/blog?page=${page}&keyword=${keyword}`;

      if (category) {
        API = `http://localhost:5000/api/v1/blog?category=${category}`;
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

export const blogsByCategory = (category) => async (dispatch) => {
  try {
    dispatch({ type: BLOGS_CATEGORY_REQUEST });

    let API = `http://localhost:5000/api/v1/blog`;

    if (category) {
      API = `http://localhost:5000/api/v1/blog?category=${category}`;
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
