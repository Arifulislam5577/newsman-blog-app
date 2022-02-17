import React from "react";

const SingleArticle = () => {
  return (
    <section className="single-article my-5 ">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 my-10">
          <article className="lg:col-span-2 xl:col-span-2  bg-orange-500 p-5">
            Lorem2000
          </article>
          <div className="sidebar bg-orange-500 p-5">Sidebar</div>
        </div>
      </div>
    </section>
  );
};

export default SingleArticle;
