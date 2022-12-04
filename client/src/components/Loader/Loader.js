import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loader = ({ loading }) => {
  return (
    <div>
      {loading && (
        <div className="flex gap-3 flex-col">
          {loading && <Skeleton height={200} />}
          {loading && <Skeleton height={20} count={3} />}
          {loading && <Skeleton height={20} width={200} />}
          {loading && <Skeleton height={20} width={150} />}
        </div>
      )}
    </div>
  );
};

export default Loader;
