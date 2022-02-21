import React, { useEffect, useState } from "react";
import dateFormat from "dateformat";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useDispatch, useSelector } from "react-redux";
import { blogsByCategory, fetchBlogs } from "../../redux/action/blogsActions";
import Loader from "../Loader/Loader";

const Articles = () => {
  let artOne, restArt;
  const dispatch = useDispatch();
  const [activePage, setActivePage] = useState(1);
  const [category, setCategory] = useState("");
  const { keyword } = useParams();

  const blogsDetails = useSelector((state) => state.blogsDetails);
  const categoryBlog = useSelector((state) => state.categoryBlog);

  const { loading, blogs, resultPerPage, result, totalBlogs, categories } =
    blogsDetails;
  const { loading: load, categoryBlogs } = categoryBlog;

  const recommendedArt = blogs?.at(-1);

  [artOne, ...restArt] = blogs;
  let totalPage = Math.ceil(totalBlogs / resultPerPage);

  useEffect(() => {
    dispatch(fetchBlogs(activePage, category, keyword));
    dispatch(blogsByCategory("JavaScript"));
  }, [dispatch, activePage, category, keyword]);

  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 my-10">
          <div className="ariticles-area lg:col-span-2 xl:col-span-2 mb-5">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10">
              <article className="lg:col-span-2 xl:col-span-2 shadow-md p-6 ">
                <div className="articles-img relative">
                  {loading ? (
                    <Skeleton height={200} />
                  ) : (
                    <Link to={`/article/${artOne?._id}`}>
                      <img
                        src={artOne?.url}
                        alt={artOne?.title}
                        className="w-full"
                      />
                    </Link>
                  )}
                  <div className="absolute right-4 top-2">
                    <button className="p-1 px-5 mr-3 bg-slate-600 text-gray-100 text-xs">
                      {dateFormat(artOne?.createdAt, "dd  mmm yyyy")}
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
                      {loading ? <Skeleton width={200} /> : artOne?.category}
                    </button>
                  </div>

                  <h1 className="text-2xl lg:text-4xl md:text-2xl  font-title font-medium hover:text-emerald-500 transition">
                    <Link to={`/article/${artOne?._id}`}>
                      {loading ? <Skeleton width height={20} /> : artOne?.title}
                    </Link>
                  </h1>
                  <p className={`text-gray-700 ${!loading && "my-5"}`}>
                    {loading ? (
                      <Skeleton width count={3} />
                    ) : (
                      artOne?.description?.slice(0, 50)
                    )}
                  </p>
                  <button className="border-b-2 font-medium text-sm hover:text-emerald-500 transition">
                    {loading ? (
                      <Skeleton width height={20} />
                    ) : (
                      <Link to={`/article/${artOne?._id}`}>
                        "Read Full Article"
                      </Link>
                    )}
                  </button>
                </div>
              </article>
              {loading && (
                <>
                  <Loader loading={loading} />
                  <Loader loading={loading} />
                  <Loader loading={loading} />
                  <Loader loading={loading} />
                  <Loader loading={loading} />
                  <Loader loading={loading} />
                </>
              )}

              {restArt?.map((article) => {
                const { url, title, _id, category, description, createdAt } =
                  article;

                return (
                  <article className="shadow-md p-5 " key={_id}>
                    <div className="articles-img relative">
                      {loading ? (
                        <Skeleton height={200} />
                      ) : (
                        <Link to={`/article/${_id}`}>
                          <img src={url} alt={title} className="w-full" />
                        </Link>
                      )}
                      {/* <img src={url} alt={title} className="w-full" /> */}
                      <div className="absolute right-4 top-2">
                        <button className="p-1 px-3 mr-3 bg-slate-600 text-gray-100 text-xs">
                          {dateFormat(createdAt, "dd  mmm yyyy")}
                        </button>
                        <button className="p-1 px-3 bg-slate-600 text-gray-100 text-xs">
                          3 MINUTES READ
                        </button>
                      </div>
                    </div>
                    <div className="articles-content">
                      <div className="content-tag my-3">
                        <button className="p-1 px-3 mr-3 bg-gray-100  hover:bg-blue-100 transition">
                          {category}
                        </button>
                      </div>

                      <h1 className="text-xl lg:text-2xl md:text-xl  font-title font-medium hover:text-emerald-500 transition">
                        {loading ? (
                          <Skeleton width height={20} />
                        ) : (
                          <Link to={`/article/${_id}`}>{title}</Link>
                        )}
                      </h1>
                      <p className="text-gray-700 my-5">
                        {description?.slice(0, 20)}...
                      </p>
                      <button className="border-b-2 font-medium text-sm hover:text-emerald-500 transition">
                        <Link to={`/article/${_id}`}>"Read Full Article"</Link>
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
            {result > totalPage && (
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
          <div className="sidebar">
            {loading ? (
              <Loader loading={loading} />
            ) : (
              <article className="shadow-md p-5 ">
                <div className="founder-img">
                  <img
                    src="https://demo.gethugothemes.com/reporter/site/images/author_hu0485d2e8fa13233fcc57e27aca4c018d_78828_420x0_resize_q100_h2_box.webp"
                    alt="images"
                    className="w-full"
                  />
                </div>
                <div className="founder-content">
                  <h1 className="text-xl lg:text-2xl md:text-xl  font-title font-medium mt-3">
                    Md Ariful Islam
                  </h1>
                  <p className="text-gray-700 my-3">
                    Hello, I’m Md Ariful Islam. A Future Content writter, Web
                    Developer and Story teller. Working as a MERN Stack
                    Developer Last Two Years.
                  </p>
                  <button className="border-2 transition hover:bg-emerald-500 uppercase px-3 font-medium text-sm hover:text-gray-100 hover:border-emerald-500 p-2 ">
                    Know More
                  </button>
                </div>
              </article>
            )}

            <h1 className="font-title py-5 font-medium text-3xl">
              {loading ? <Skeleton width height={20} /> : "Recommended"}
            </h1>

            <figure className="shadow-md p-5 flex flex-col gap-5">
              {loading ? (
                <Loader loading={loading} />
              ) : (
                <article className="border-b border-dashed">
                  <div className="articles-img relative">
                    <Link to={`/article/${recommendedArt?._id}`}>
                      <img
                        src={recommendedArt?.url}
                        alt={recommendedArt?.title}
                        className="w-full"
                      />
                    </Link>

                    <div className="absolute right-4 top-2">
                      <button className="p-1 px-3 bg-slate-600 text-gray-100 text-xs">
                        3 MINUTES READ
                      </button>
                    </div>
                  </div>
                  <div className="articles-content mb-5">
                    <h1 className="text-xl lg:text-2xl md:text-xl  font-title font-medium my-3 hover:text-emerald-500 transition">
                      <Link to={`/article/${recommendedArt?._id}`}>
                        {recommendedArt?.title}
                      </Link>
                    </h1>
                    <p className="text-gray-700 my-5">
                      {recommendedArt?.description?.slice(0, 100)}...
                    </p>
                    <button className="border-b-2 font-medium text-sm hover:text-emerald-500 transition">
                      <Link to={`/article/${recommendedArt?._id}`}>
                        Read Full Article
                      </Link>
                    </button>
                  </div>
                </article>
              )}

              {loading && (
                <>
                  <Loader loading={load} />
                  <Loader loading={load} />
                  <Loader loading={load} />
                </>
              )}

              {!load &&
                categoryBlogs?.map((article) => {
                  const { title, url, _id, description } = article;

                  return (
                    <article
                      className="border-b border-dashed  w-full flex items-center gap-3"
                      key={_id}
                    >
                      <div className="artcle-img w-1/3">
                        <Link to={`/article/${_id}`}>
                          <img src={url} alt={title} className="w-full" />
                        </Link>
                      </div>
                      <div className="article-content w-2/3 mb-5">
                        <h2 className="font-title text-md hover:text-emerald-500 transition">
                          <Link to={`/article/${_id}`}>{title}</Link>
                        </h2>
                        <p className="text-sm text-gray-700">
                          {description?.slice(0, 20)}...
                        </p>
                      </div>
                    </article>
                  );
                })}
            </figure>
            {!loading && (
              <>
                <h1 className="font-title py-3 font-medium text-3xl my-10">
                  Categories
                </h1>
                <figure className="shadow-md p-6 flex flex-wrap gap-3">
                  <button
                    className="p-1 px-3 mr-3 bg-gray-100  hover:bg-blue-100 transition"
                    onClick={() => setCategory("")}
                  >
                    All Blogs
                  </button>
                  {categories?.map((category) => (
                    <button
                      className="p-1 px-3 mr-3 bg-gray-100  hover:bg-blue-100 transition"
                      key={category}
                      onClick={() => setCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </figure>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
