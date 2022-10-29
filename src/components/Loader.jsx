import React from "react";

const Loader = ({ title }) => {
  return <span className="text-light">{title || "Loading..."}</span>;
};

export default Loader;
