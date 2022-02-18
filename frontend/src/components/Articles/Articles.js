import React, { useEffect } from "react";
import dateFormat from "dateformat";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../redux/action/blogsActions";
import Loader from "../Loader/Loader";

const Articles = () => {
  let artOne, restArt;
  const dispatch = useDispatch();
  const blogsDetails = useSelector((state) => state.blogsDetails);

  const { loading, blogs, result, resultPerPage, totalBlogs } = blogsDetails;

  [artOne, ...restArt] = blogs;

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

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
                    <img
                      src={artOne?.url}
                      alt={artOne?.title}
                      className="w-full"
                    />
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

                  <h1 className="text-2xl lg:text-4xl md:text-2xl  font-title font-medium ">
                    {loading ? <Skeleton width height={20} /> : artOne?.title}
                  </h1>
                  <p className={`text-gray-700 ${!loading && "my-5"}`}>
                    {loading ? (
                      <Skeleton width count={3} />
                    ) : (
                      artOne?.description[0]
                    )}
                  </p>
                  <button className="border-b-2 font-medium text-sm hover:text-emerald-500 transition">
                    {loading ? (
                      <Skeleton width height={20} />
                    ) : (
                      "Read Full Article"
                    )}
                  </button>
                </div>
              </article>
              <Loader loading={loading} />
              <Loader loading={loading} />
              <Loader loading={loading} />
              <Loader loading={loading} />
              <Loader loading={loading} />
              <Loader loading={loading} />

              {restArt?.map((article) => {
                const { url, title, _id, category, description, createdAt } =
                  article;

                return (
                  <article className="shadow-md p-5 " key={_id}>
                    <div className="articles-img relative">
                      {loading ? (
                        <Skeleton height={200} />
                      ) : (
                        <img src={url} alt={title} className="w-full" />
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

                      <h1 className="text-xl lg:text-2xl md:text-xl  font-title font-medium">
                        {loading ? <Skeleton width height={20} /> : title}
                      </h1>
                      <p className="text-gray-700 my-5">{description[0]}</p>
                      <button className="border-b-2 font-medium text-sm hover:text-emerald-500 transition">
                        Read Full Article
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="paginate my-10 text-center flex gap-3 justify-center">
              <button className="p-1 px-5 border bg-emerald-500 font-medium hover:bg-emerald-500 transition">
                1
              </button>
              <button className="p-1 px-5 border  font-medium hover:bg-emerald-500 transition">
                2
              </button>
              <button className="p-1 px-5 border  font-medium hover:bg-emerald-500 transition">
                3
              </button>
              <button className="p-1 px-5 border  font-medium hover:bg-emerald-500 transition">
                <BsArrowRight />
              </button>
            </div>
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
                    <img
                      src="https://demo.gethugothemes.com/reporter/site/images/post/post-9_hucc85ebe7dc4f542e1229c0ab10f23918_361394_420x280_fill_q100_h2_box_smart1.webp"
                      alt="images"
                      className="w-full"
                    />
                    <div className="absolute right-4 top-2">
                      <button className="p-1 px-3 bg-slate-600 text-gray-100 text-xs">
                        3 MINUTES READ
                      </button>
                    </div>
                  </div>
                  <div className="articles-content mb-5">
                    <h1 className="text-xl lg:text-2xl md:text-xl  font-title font-medium my-3">
                      Portugal and France Now Allow Unvaccinated Tourists
                    </h1>
                    <p className="text-gray-700 my-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor …
                    </p>
                    <button className="border-b-2 font-medium text-sm hover:text-emerald-500 transition">
                      Read Full Article
                    </button>
                  </div>
                </article>
              )}

              <article className="border-b border-dashed  w-full flex items-center gap-3">
                <div className="artcle-img w-1/3">
                  <img
                    src="https://demo.gethugothemes.com/reporter/site/images/post/post-2_huab157a7c4ddb780fd44cc187010cbb7a_186622_80x80_fill_q100_h2_box_smart1.webp"
                    alt="tour"
                    className="w-full"
                  />
                </div>
                <div className="article-content w-2/3 mb-5">
                  <h2 className="font-title text-xl">
                    These Are Making It Easier To Visit
                  </h2>
                  <p className="text-sm text-gray-700">
                    Heading Here is example of hedings. You can use …
                  </p>
                </div>
              </article>
              <article className="border-b border-dashed  w-full flex items-center gap-3">
                <div className="artcle-img w-1/3">
                  <img
                    src="https://demo.gethugothemes.com/reporter/site/images/post/post-2_huab157a7c4ddb780fd44cc187010cbb7a_186622_80x80_fill_q100_h2_box_smart1.webp"
                    alt="tour"
                    className="w-full"
                  />
                </div>
                <div className="article-content w-2/3 mb-5">
                  <h2 className="font-title text-xl">
                    These Are Making It Easier To Visit
                  </h2>
                  <p className="text-sm text-gray-700">
                    Heading Here is example of hedings. You can use …
                  </p>
                </div>
              </article>
              <article className="border-b border-dashed  w-full flex items-center gap-3">
                <div className="artcle-img w-1/3">
                  <img
                    src="https://demo.gethugothemes.com/reporter/site/images/post/post-2_huab157a7c4ddb780fd44cc187010cbb7a_186622_80x80_fill_q100_h2_box_smart1.webp"
                    alt="tour"
                    className="w-full"
                  />
                </div>
                <div className="article-content w-2/3 mb-5">
                  <h2 className="font-title text-xl">
                    These Are Making It Easier To Visit
                  </h2>
                  <p className="text-sm text-gray-700">
                    Heading Here is example of hedings. You can use …
                  </p>
                </div>
              </article>
              <article className="  w-full flex items-center gap-3">
                <div className="artcle-img w-1/3">
                  <img
                    src="https://demo.gethugothemes.com/reporter/site/images/post/post-2_huab157a7c4ddb780fd44cc187010cbb7a_186622_80x80_fill_q100_h2_box_smart1.webp"
                    alt="tour"
                    className="w-full"
                  />
                </div>
                <div className="article-content w-2/3 mb-5">
                  <h2 className="font-title text-xl">
                    These Are Making It Easier To Visit
                  </h2>
                  <p className="text-sm text-gray-700">
                    Heading Here is example of hedings. You can use …
                  </p>
                </div>
              </article>
            </figure>
            <h1 className="font-title py-3 font-medium text-3xl my-10">
              Categories
            </h1>
            <figure className="shadow-md p-6 flex flex-wrap gap-3">
              <button className="p-1 px-3 mr-3 bg-gray-100  hover:bg-blue-100 transition">
                Computer(3)
              </button>
              <button className="p-1 px-3 mr-3 bg-gray-100  hover:bg-blue-100 transition">
                Cruises(2)
              </button>
              <button className="p-1 px-3 mr-3 bg-gray-100  hover:bg-blue-100 transition">
                Destination(1)
              </button>
              <button className="p-1 px-3 mr-3 bg-gray-100  hover:bg-blue-100 transition">
                Internet(4)
              </button>
              <button className="p-1 px-3 mr-3 bg-gray-100  hover:bg-blue-100 transition">
                Lifestyle(2)
              </button>
              <button className="p-1 px-3 mr-3 bg-gray-100  hover:bg-blue-100 transition">
                News(5)
              </button>
              <button className="p-1 px-3 mr-3 bg-gray-100  hover:bg-blue-100 transition">
                Telephone(1)
              </button>
              <button className="p-1 px-3 mr-3 bg-gray-100  hover:bg-blue-100 transition">
                Tips(1)
              </button>
              <button className="p-1 px-3 mr-3 bg-gray-100  hover:bg-blue-100 transition">
                Travel(3)
              </button>
              <button className="p-1 px-3 mr-3 bg-gray-100  hover:bg-blue-100 transition">
                Website(4)
              </button>
              <button className="p-1 px-3 mr-3 bg-gray-100  hover:bg-blue-100 transition">
                Hugo(2)
              </button>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
