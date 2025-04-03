import React from "react";

const BoxProducts = ({ data }) => {
  console.log(data, "dtaafd");
  const { thumbnail, price, title, category } = data;
  return (
    <div className="gap-3 mt-2 mx-2 w-[200px] border-2 border-red-400 rounded-[10px] text-center">
      <div>
        <div className="overflow-hidden flex items-center justify-center">
          <img
            className="w-[150px] overflow-hidden object-contain"
            src={thumbnail}
            alt=""
          />
        </div>
        <div className="text-[16px] flex flex-col gap-2">
          <p>Name: {title}</p>
          <p>Category: {category}</p>
          <p>Price: {price}</p>
        </div>
      </div>
    </div>
  );
};

export default BoxProducts;
