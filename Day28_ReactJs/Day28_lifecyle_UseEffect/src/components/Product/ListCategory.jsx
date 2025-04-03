import React, { use, useEffect, useState } from "react";
import ApiServices from "./../../ApiServices/ApiService";
import BoxProducts from "./BoxProducts";

const ListCategory = () => {
  const [listcategory, setListcategory] = useState([]);
  const [nameCategory, setNameCategory] = useState("");
  const [productsMycategory, setProductMycategory] = useState({
    products: [],
    total: 0,
  });
  const loadDataGetListCateGory = async () => {
    const data = await ApiServices.getListCategory();
    console.log(data);
    if (data.length !== 0) {
      setNameCategory(data[0]);
      setListcategory(data);
    }
  };
  console.log(listcategory);

  const LoadgetProductsByCategory = async (category) => {
    console.log(category);
    const res = await ApiServices.getProductsByCategory(category);
    if (res.status === 200) {
      const { products, total } = res.data;
      setProductMycategory({
        ...productsMycategory,
        products,
        total,
        // khi key và value trùng nhua sẽ viết một giá trị thôi
      });
    }
  };
  console.log(productsMycategory);
  console.log(nameCategory, "hgdhjfghrf");
  useEffect(() => {
    loadDataGetListCateGory();
  }, []);
  useEffect(() => {
    if (nameCategory) {
      LoadgetProductsByCategory(nameCategory);
    }
  }, [nameCategory]);
  return (
    <div>
      {listcategory !== 0
        ? listcategory.map((cate) => (
            <button
              onClick={() => setNameCategory(cate)}
              className={`${nameCategory === cate ? "border border-black  opacity-90 mx-2 mt-3 p-1 bg-red-500 font-bold text-white" : "border border-black  opacity-90 mx-2 mt-3 p-1 bg-gray-400"}`}
              key={cate}
            >
              {cate}
            </button>
          ))
        : "......"}
      <div className="flex  gap-3 flex-wrap">
        {productsMycategory.products.length !== 0 ?
          productsMycategory.products.map((products) => (
                <BoxProducts key={products.id} data={products} />
          )) : "Loading"}
      </div>
    </div>
  );
};

export default ListCategory;
