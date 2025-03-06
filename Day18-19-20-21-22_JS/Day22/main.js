let currentPage = 1;
const URL_API = "https://dummyjson.com/products/search";
const valSearchTitle = document.getElementById("valSearchTitle");
const tBody = document.querySelector("tbody");
const totalProduct = document.getElementById("totalProduct");
const paging  = document.getElementById("paging");
const sortBy = document.getElementById("sortBy");
const renderdetail = document.getElementById("detail");
const loader = document.querySelector(".loader");
const animation = document.querySelector(".animation");
const parames = {
  q : "",
  skip :0,
  sortBy : "",
  order : "",
}
const handelSearchTitle = () =>
{
  const q = valSearchTitle.value;
  fetchDataProduct({
    ...parames,
    q
  });
};
const fetchDataProduct = (parames) =>
{
  loader.style.display = "block";
  const {q,skip,sortBy,order} =parames;
    fetch(`${URL_API}?limit=5&skip=${skip}&sortBy=${sortBy}&order=${order}&q=${q}`)
    // giới hạn chỉ hiển thị 
    // chỉ hiển thị ra 10 sản phẩm
    .then((res) => {
        return res.json();
    })
    .then ((data)=>{ 
        const {limit,products,skip,total} = data;
        totalProduct.innerHTML = total;
        renderTable(products)
        const numberPage = Math.ceil(total / limit);
        console.log(numberPage);
        renderPagination(numberPage);
        loader.style.display = "none";
        animation.style.display = "none";

    })
    .catch((err) => console.log(err));
}
fetchDataProduct(parames);

const renderTable = (products = []) =>
{
    console.log(products);
    tBody.innerHTML = products.map(products =>
        {
           return `
             <tr>
                <td>${products.title}</td>
                <td>${products.price} USD</td>
                <td>${products.category}</td>
                <td>
                  <img class ="img" src="${products.thumbnail}" >
                </td>
                <td>
                <button onclick ="handleDetail(${products.id})">Detail</button>
                </td>
              </tr>
           ` 
        }).join("");

}
const renderPagination = (numberPage) =>
{
   console.log(numberPage);
   let pages = [];
   for (let i = 1 ; i<= numberPage ;i ++)
   {
     pages.push(i);
     console.log(pages);
     paging.innerHTML = pages.map (item =>
        `
         <button class = "${currentPage === item ? "active_Page" : ""}" onclick = "handleNextPage(${item})">${item}</button>
        `
        ).join("");
   }
}
 const handleNextPage = (page) =>
 {
    console.log(page);
    const skip =  (page - 1) *5;
    console.log(skip);
    currentPage = page;
    fetchDataProduct({
      ...parames,
      skip
    });
    
 }
//  1 => skip = 0 ;
//  2 =>skip =5 
sortBy.onchange = (e) =>
{
  console.log( e,"cccc");
  const value = e.target.value;
  console.log(value,"value");
  const sortFilter = value.split(",");
  console.log(sortFilter,'sortBy');
  // const parames = {
  //   q : "",
  //   skip :0,
  //   sortBy : sortFilter[0] ,
  //   order : sortFilter[1],
  // }
  fetchDataProduct({
    ...parames,
    sortBy : sortFilter[0] ,
    order : sortFilter[1]
  })

}
const handleDetail =  (id) =>
{
  fetch(`https://dummyjson.com/products/${id}`)
  .then(res => res.json())
  .then(detail => 
    {
      console.log(detail);
      const {thumbnail,title,price} = detail ;
      renderdetail.innerHTML = `
        <img style = "width : 100px ;" src=${thumbnail}>
        <h3>Tên Sản Phẩm: ${title}</h3> 
        <p>Giá ${price}</p>
      `
    });
}

// async awit
const myFuntion = async () =>
{
  // khi ở trên chạy xong code owqr dưới mới chạy được
  // thayu vì viết . then thì sẽ viết awit 
  // bắt lỗi a
   try {
    const res = await fetch("https://dummyjson.com/products/1");
   const detail = await res.json();
   console.log(detail,"shhshb");
   } catch (error) {
    console.log(error);
   }
}
myFuntion();