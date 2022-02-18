import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MiniLoader = ({ loading }) => {
  return (
    <div>
      {loading && (
        <div className="flex">
          {loading && <Skeleton height={200} />}
          {loading && <Skeleton height={20} count={2} />}
        </div>
      )}
    </div>
  );
};

export default MiniLoader;
