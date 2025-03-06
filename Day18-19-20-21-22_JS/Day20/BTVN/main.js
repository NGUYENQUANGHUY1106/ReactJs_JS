const Call_API = "https://67a7518f203008941f67426c.mockapi.io/ap1/v1/QuangHuy";
const title = document.getElementById("input_work");
const listStatus =  document.querySelectorAll("[type = 'radio'][ name = 'status']");
const idToDo = null;
const listDataToDo = document.querySelector(".show_data");

const loadDataApi =  () =>
{
  fetch(Call_API)
  .then((res) =>
  {
    return res.json();
  })
  .then((data) =>console.log(data))
  .catch((err) =>console.log(err));
}
const addTodos = (data) =>
{
 fetch(Call_API,
    {
        method : "POST",
        body : JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
    })
    .then((res) =>
    {
        if(res.ok)
        {
            loadDataApi();
        }
    });
}
const HandleSubmit = () =>
{
    let status = "";
    listStatus.forEach((item) =>
    {
        if(item.checked)
        {
            status = item.checked;
        }
    });
    const itemTodo = {
        title : title.value ,
        status
    };
    console.log(itemTodo,"itemTodo");
    if(idToDo)
    {
        console.log("Đã Cập Nhật");
    }
    else{
         addTodos();
    }
}
const renderData = () =>
{
 
}