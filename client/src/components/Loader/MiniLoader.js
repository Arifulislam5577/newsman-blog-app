import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MiniLoader = ({ loading, count }) => {
  return <div>{loading && <Skeleton height={30} width count={count} />}</div>;
};

export default MiniLoader;
