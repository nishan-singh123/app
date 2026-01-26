"use client";

import { incrementCount } from "@/redux/counter/counterSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Contactpage = () => {
  const [localCount, setCount] = useState(0);

  const globalCount = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  function incrGlobalCount() {
    dispatch(incrementCount());
  }

  return (
    <div>
      <h1 className="text-7xl">Local count: {localCount}</h1>
      <button
        className="border px-4 py-1 rounded"
        onClick={() => setCount(localCount + 1)}
      >
        Count +
      </button>
      <div className="h-20"></div>

      <h1 className="text-7xl">Global count: {globalCount}</h1>
      <button
        className="border px-4 py-1 rounded"
        onClick={incrGlobalCount}
      >
        Global Count +
      </button>
    </div>
  );
};

export default Contactpage;
