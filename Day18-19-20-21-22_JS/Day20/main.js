
// setTimeout(() =>
// {
//     console.log("Công Việc 1");
// },1000);
// console.log("Công Việc 2");
// setTimeout(() =>
// {
//     console.log("Công Việc 3");
// },0);
// setTimeout(()=>
// {
//     console.log("Công Việc 4");
// },2000);
// console.log("Công Việc 5");
// setTimeout(()=>
// {
//     console.log("Công Việc 6");
// },3000);

// Ví dụ xử lý bất đồng bộ bằng promise
// const promiseExample = new Promise((resolve, reject) => {
//     resolve("Thành Công");
//     // reject("Thất Bại")
// });
// console.log(promiseExample);
// thành công
// promiseExample
//         .then((item) =>
//         {
//             console.log(item);
//         })
// // thất bại
//         .catch((error)=>
//         {
//             console.log(error);
//         });
//==============
// const getPosts = new Promise((resolve, reject) => { 
//     const req = new XMLHttpRequest(); //thiệt lập một đối tượng XMLHttpRequest
//     req.open("GET","https://jsonplaceholder.typicode.com/posts");
//     req.send();
//     req.onload = () =>
//     {
//         console.log(req);
//         if(req.status === 200)
//         {
//             // resolve(req.response);
//         }
//         else
//         {
//             reject("Lỗi");
//         }
//     }
// })
// .then ((response) =>
// {
//  console.log(response);
// })
// .catch ((error) =>
// {
//    console.log(error);
// })
/// ===== FETCH ======///
// đều trả về một promise
const tBody = document.querySelector("tbody");
const infoDetails = document.getElementById("infoDetalis");
const loadData = () =>
{
 fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "GET",
}).then((res) =>
  {
    // trả về data xịn
    return res.json();
})
.then((data) =>
{
    renderTable(data);
})
};
loadData();
// users = [] là nó sẽ hứng từ thằng data ở trên dòng 78 
const renderTable = (users = []) =>
{
  tBody.innerHTML = users.map(user =>
    {
        return `
          <tr>
            <td>${user.id}</td>
            <td>${user.title}</td>
            <td>${user.body}</td>
            <td> 
            <button onclick="hanldeDetail(${user.id})">Details</button>
             </td>
          </tr>
        `
    }).join("")
}

const hanldeDetail = (id) =>
{
    console.log(id,"id");
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,)
    .then((detai) =>
    {
      return detai.json();
    })
    .then((res)=>
    {
      console.log(res);
      infoDetails.innerHTML = `
        <p>ID: ${res.id}</p>
        <p>title: ${res.title}</p>
      `
    })
    
}
/// chain promise // =======
const myPromise = new Promise((resolve, reject) => {
  resolve("Thành Công");
});

const demo = myPromise.then(() =>
{
  return new Promise((resolve, reject) => {
     resolve("Quang huy");
  });
})
.then(res =>
  {
   return 2
  })
  .then(data =>
    {
      console.log(data);
    })