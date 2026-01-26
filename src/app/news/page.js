"use client";

import { useSelector } from "react-redux";

const NewsPage = () => {
    const globalCount = useSelector((state) => state.counter.count);

  return <div className="text-7xl">Global Count: {globalCount}</div>;
};

export default NewsPage;
