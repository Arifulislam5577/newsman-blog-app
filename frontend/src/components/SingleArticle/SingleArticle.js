import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { FaSpinner } from "react-icons/fa";
import dateFormat from "dateformat";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { blogById, createComment } from "../../redux/action/blogsActions";
import { CREATE_COMMENT_RESET } from "../../redux/constants/constants";

const SingleArticle = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const blogDetail = useSelector((state) => state.blogDetail);
  const { userInfo } = useSelector((state) => state.userLogin);
  const commentCreate = useSelector((state) => state.commentCreate);
  const { loading, error, blog } = blogDetail;
  const {
    loading: commentLoading,
    error: commentError,
    success,
  } = commentCreate;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userInfo) {
      navigate(`/login?redirect=/article/${id}`);
    } else {
      dispatch(createComment(id, name, comment));
    }
  };

  useEffect(() => {
    if (success) {
      setName("");
      setComment("");
      dispatch({ type: CREATE_COMMENT_RESET });
    }

    dispatch(blogById(id));
  }, [dispatch, id, success]);

  return (
    <section className="single-article my-5 w-full">
      <div className="container">
        <div className=" my-10 w-3/4 m-auto">
          <article className=" shadow-md p-6 ">
            <div className="articles-img relative">
              {error && (
                <h1 className="p-5 w-full bg-orange-500 text-gray-50">
                  {error}
                </h1>
              )}
              {loading ? (
                <Skeleton height={200} />
              ) : (
                <img src={blog?.url} alt={blog?.title} className="w-full" />
              )}
              <div className="absolute right-4 top-2">
                <button className="p-1 px-5 mr-3 bg-slate-600 text-gray-100 text-xs">
                  {dateFormat(blog?.createdAt, "dd  mmm yyyy")}
                </button>
                <button className="p-1 px-5 bg-slate-600 text-gray-100 text-xs">
                  3 MINUTES READ
                </button>
              </div>
            </div>
            <div className="articles-content">
              <div className={`content-tag ${loading ? "my-2" : "my-5"}`}>
                <button
                  className={`p-1   bg-gray-100  transition hover:bg-blue-100 px-3
                      }`}
                >
                  {loading ? <Skeleton width={200} /> : blog?.category}
                </button>
              </div>

              <h1 className="text-2xl lg:text-4xl md:text-2xl  font-title font-medium hover:text-emerald-500 transition">
                {loading ? <Skeleton width height={20} /> : blog?.title}
              </h1>
              <div className={`text-gray-700 ${!loading && "my-5"}`}>
                {loading ? (
                  <Skeleton width count={3} />
                ) : (
                  blog?.description?.map((des, i) => (
                    <p className="my-5" key={i}>
                      {des}
                    </p>
                  ))
                )}
              </div>
            </div>
            <div className="comment-box my-5 w-full">
              <form className="w-full" onSubmit={handleSubmit}>
                {commentError && (
                  <div className="mb-3 ">
                    <h2 className="p-3 bg-orange-500 text-gray-100 w-full">
                      {commentError}
                    </h2>
                  </div>
                )}
                <input
                  type="text"
                  placeholder="Name"
                  className="border rounded-none p-3 w-full my-2 bg-gray-100 focus:shadow focus:outline-none"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <textarea
                  type="text"
                  placeholder="Your comment"
                  className="border rounded-none p-3 w-full my-2 bg-gray-100 focus:shadow focus:outline-none"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <br />

                <button
                  type="submit"
                  className="p-2  text-gray-100 transition bg-emerald-500 px-5 text-center"
                >
                  {commentLoading ? (
                    <FaSpinner
                      icon="spinner"
                      className="spinner m-auto text-2xl"
                    />
                  ) : (
                    "comment"
                  )}
                </button>
              </form>
              <h2 className="uppercase my-5 font-bold">
                Comments({blog?.comments?.length})
              </h2>

              <div className="comment-block border p-5">
                {blog?.comments.length === 0 ? (
                  <h2 className="">No comments</h2>
                ) : (
                  blog?.comments?.map((com) => {
                    const { name, comment, _id } = com;
                    return (
                      <div className="flex items-center gap-3" key={_id}>
                        <h2 className="p-3 bg-orange-200 uppercase">{name}</h2>
                        <h2 className="p-3 w-full bg-gray-100 text-gray-900 my-3">
                          {comment}
                        </h2>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SingleArticle;
