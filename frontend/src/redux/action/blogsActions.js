import axios from "axios";
import {
  ALL_BLOGS_FAIL,
  ALL_BLOGS_REQUEST,
  ALL_BLOGS_SUCCESS,
} from "../constants/constants";

export const fetchBlogs = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_BLOGS_REQUEST });

    const { data } = await axios.get(`http://localhost:5000/api/v1/blog`);

    dispatch({
      type: ALL_BLOGS_SUCCESS,
      payload: {
        totalBlogs: data.totalBlogs,
        resultPerPage: data.resultPerPage,
        result: data.result,
        blogs: data.blogs,
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
