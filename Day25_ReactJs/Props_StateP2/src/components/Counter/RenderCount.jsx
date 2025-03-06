import React from "react";

const RenderCount = (props) => {
    const {count} = props
  return (
    <div>
      <h2 className="text-4xl font-bold py-5">{count}</h2>
    </div>
  );
};

export default RenderCount;
