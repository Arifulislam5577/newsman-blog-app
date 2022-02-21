import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import {
  createBlog,
  deleteBlogPost,
  fetchBlogs,
} from "../../redux/action/blogsActions";
import MiniLoader from "../Loader/MiniLoader";
import { FaSpinner } from "react-icons/fa";
import {
  BLOG_DELETE_RESET,
  CREATE_POST_RESET,
} from "../../redux/constants/constants";

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState(1);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");

  const blogsDetails = useSelector((state) => state.blogsDetails);
  const createPost = useSelector((state) => state.createPost);
  const deleteBlog = useSelector((state) => state.deleteBlog);
  const { userInfo } = useSelector((state) => state.userLogin);
  const { postLoading, PostSuccess, error } = createPost;
  const { blogs, loading, resultPerPage, totalBlogs, categories } =
    blogsDetails;
  let totalPage = Math.ceil(totalBlogs / resultPerPage);

  const handlePostDelete = (id) => {
    dispatch(deleteBlogPost(id));
  };
  const url = image;
  const description = desc;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createBlog(title, url, description, category));
  };
  useEffect(() => {
    if (!userInfo.isAdmin) {
      navigate("/");
    }
    if (deleteBlog?.status) {
      dispatch({ type: BLOG_DELETE_RESET });
    }
    if (PostSuccess) {
      dispatch({ type: CREATE_POST_RESET });
      setTitle("");
      setCategory("");
      setImage("");
      setDesc("");
    }
    dispatch(fetchBlogs(activePage));
  }, [dispatch, activePage, PostSuccess, navigate, userInfo, deleteBlog]);
  return (
    <section className="w-full py-5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 my-10">
          <div className="sidebar">
            <h1 className="uppercase p-3 mb-5 text-gray-100 bg-emerald-500">
              Create a new post
            </h1>

            <form className="shadow-sm" onSubmit={handleSubmit}>
              {error && (
                <div className="mb-3 ">
                  <h2 className="p-3 bg-orange-500 text-gray-100 w-full">
                    {error}
                  </h2>
                </div>
              )}
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="title"
                  className="p-3 rounded-none border focus:outline-none w-full"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <select
                  className="p-3 rounded-none border focus:outline-none w-full"
                  required
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories?.map((cat) => (
                    <option value={cat} key={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="p-3 rounded-none border focus:outline-none w-full"
                  required
                  placeholder="image url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  placeholder="desc"
                  className="p-3 rounded-none border focus:outline-none w-full"
                  required
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <button
                  className="w-full p-3 px-5 bg-emerald-500 text-gray-100 uppercase"
                  type="submit"
                >
                  {postLoading ? (
                    <FaSpinner
                      icon="spinner"
                      className="spinner m-auto text-2xl"
                    />
                  ) : (
                    "create post"
                  )}
                </button>
              </div>
            </form>
          </div>
          <div className="postDetails lg:col-span-2 xl:col-span-2 mb-5">
            <h1 className="bg-emerald-500 uppercase text-gray-100 p-3">
              Post Details
            </h1>
            {loading && <MiniLoader loading={loading} count={10} />}
            <table className="w-full">
              <tbody>
                {blogs?.map((blog) => (
                  <tr key={blog._id} className="text-left border p-5">
                    <td className="p-3">{blog._id}</td>
                    <td className="p-3">
                      <Link to={`/article/${blog._id}`}>
                        {blog.title.slice(0, 20)}
                      </Link>
                      ...
                    </td>
                    <td className="p-3">{blog.category}</td>
                    <td className="p-3">
                      <FaTrashAlt
                        className="text-red-600 cursor-pointer"
                        onClick={() => handlePostDelete(blog._id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {!loading && (
              <div className="paginate my-10 text-center flex gap-3 justify-center">
                {!isNaN(totalPage) &&
                  [...Array(totalPage).keys()].map((page) => (
                    <button
                      className={`p-1 px-5 border ${
                        activePage === page + 1 && "bg-emerald-500 "
                      } font-medium hover:bg-emerald-100 transition`}
                      key={page + 1}
                      onClick={() => setActivePage(page + 1)}
                    >
                      {page + 1}
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
