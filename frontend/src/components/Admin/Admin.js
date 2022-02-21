import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { fetchBlogs } from "../../redux/action/blogsActions";
import MiniLoader from "../Loader/MiniLoader";

const Admin = () => {
  const dispatch = useDispatch();
  const [activePage, setActivePage] = useState(1);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const blogsDetails = useSelector((state) => state.blogsDetails);
  const { blogs, loading, resultPerPage, totalBlogs, categories } =
    blogsDetails;
  let totalPage = Math.ceil(totalBlogs / resultPerPage);

  const handlePostDelete = (id) => {
    console.log(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(image.slice(12));
    console.log(title, category, image, description);
  };
  useEffect(() => {
    dispatch(fetchBlogs(activePage));
  }, [dispatch, activePage]);
  return (
    <section className="w-full py-5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 my-10">
          <div className="sidebar">
            <h1 className="uppercase p-3 mb-5 text-gray-100 bg-emerald-500">
              Create a new post
            </h1>

            <form className="shadow-sm" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="post title"
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
                  type="file"
                  className="p-3 rounded-none border focus:outline-none w-full"
                  required
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  placeholder="post description"
                  className="p-3 rounded-none border focus:outline-none w-full"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <button
                  className="w-full p-3 px-5 bg-emerald-500 text-gray-100"
                  type="submit"
                >
                  create post
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
