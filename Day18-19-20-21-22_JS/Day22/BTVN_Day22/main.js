const API_List =  "https://dummyjson.com/products/category-list";
const API_Category = (category) => `https://dummyjson.com/products/category/${category}`;
const btn_list = document.getElementById("btn_list") ;
const total = document.getElementById("total");
const information_Product = document.getElementById("infomation_product");
const loadData = () =>
{
    fetch(API_List)
    .then((res) =>
    {
        console.log( res)
      return res.json();
    })
    .then ((data) => 
    {
        renderList(data)
    } )
    .catch((err) => console.log( err))
}
loadData();

const renderList  = (data = []) =>
{
  console.log(data);
  btn_list.innerHTML = data.map (item =>
    {
        return `
          <button onclick = "loadCategory('${item}')">${item}</button>
        `
    }).join("");
    total.innerText = `Tổng số danh mục : ${data.length}`;
}
const loadCategory = (category) =>
{
  fetch(API_Category(category))
  .then((res)=>res.json())
  .then ((data) => 
  {
    renderProducts(data.products);
    total.innerText = `Tổng số sản phẩm: ${data.products.length}`;
  })
  .catch((err) => console.log(err));
}
const renderProducts = (products = []) =>
{
  console.log( products);
  information_Product.innerHTML = products.map((item)=>
  {
  return  `
    <div id ="product">
    <img class = "img" src="${item.thumbnail}" alt="">
    <h3>${item.title}</h3>
    <p>Giá: $${item.price}</p>
    </div>
    `
  }).join("")
}
