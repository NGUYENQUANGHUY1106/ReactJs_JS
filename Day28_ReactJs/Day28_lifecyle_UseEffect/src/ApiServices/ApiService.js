
import axios from "./../../node_modules/axios/lib/axios";
const API_PRODUCTS_CATEGORY_LIST =
  "https://dummyjson.com/products/category-list";
  const API_GET_PRODUCTS_BY_A_CATEGORY = 'https://dummyjson.com/products/category'

const ApiServices = {
  getListCategory: async () => {
    const res = await axios.get(API_PRODUCTS_CATEGORY_LIST);
    return res.data;
  },
  getProductsByCategory: async (category) =>
  {
    const res = await axios.get(`${API_GET_PRODUCTS_BY_A_CATEGORY}/${category}`)
    return res ;
  }
};

export default ApiServices;
