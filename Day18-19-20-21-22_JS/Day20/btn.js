//  Dựng UI: DONE
// hình dung data
/**
 *  [
 *      {
 *          id:"438948394",
 *          title:"Công việc",
 *          status:"todo"
 *      },
 *      {
 *          id:"438948394",
 *          title:"Công việc",
 *          status:"todo"
 *      }
 *  ]
 */

// lấy data.

let todos = [];
let idToDo = null;
const title = document.getElementById("title");
const listStatus = document.querySelectorAll("[type='radio'][name='status']");
const listTodo = document.querySelector(".list_todo");
const noData = document.getElementById("noData");
const btnSubmit = document.querySelector(".btn-add");

const handleSubmit = () => {
  let status = "";
  listStatus.forEach((item) => {
    if (item.checked) {
      status = item.value;
    }
  });
  const itemTodo = {
    id: Date.now(),
    title: title.value,
    status,
  };
  //   console.log(itemTodo,"itemTodo");
  console.log(idToDo);
  if (validate()) {
    if (idToDo) {
      todos = todos.map((todo) => {
        if (todo.id === idToDo) {
          return {
            ...itemTodo,
            id: todo.id,
          };
        }
        return todo;
      });
      btnSubmit.innerHTML = "Thêm";
    } else {
      todos = [...todos, itemTodo];
    }
    console.log(todos);
    renderTodo(todos);
    resetForm();
  }
};

const renderTodo = (arrTodos = []) => {
  if (arrTodos.length) {
    noData.style.display = "none";
  } else {
    noData.style.display = "block";
  }
  listTodo.innerHTML = arrTodos
    .map((todo) => {
      return `
             <div class="box_todo">
              <div>${todo.title}</div>
              <button>${todo.status}</button>
              <div>
                <button onclick="handleDelete(${todo.id})">
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
                <button onclick="handleEdit(${todo.id})">
                  <i class="fa fa-pencil" aria-hidden="true"></i>
                </button>
              </div>
            </div>  
         `;
    })
    .join("");
};

const handleDelete = (id) => {
  console.log(id);
  const updateTodos = todos.filter((item) => item.id !== id);
  todos = [...updateTodos];
  renderTodo(todos);
};

const handleEdit = (id) => {
  const findTodo = todos.find((todo) => todo.id === id);
  console.log(findTodo);
  const { title: valTitle, status } = findTodo;
  listStatus.forEach((item) => {
    if (item.value === status) {
      item.checked = true;
    }
  });
  title.value = valTitle;
  idToDo = id;
  btnSubmit.innerHTML = "Sửa";
};

const resetForm = () => {
  idToDo = null;
  title.value = "";
  listStatus.forEach((item) => {
    item.checked = false;
  });
};

const validate = () => {
  let isCheckStatus = false;
  let isCheckTitle = false;
  let listChecked = [];
  listStatus.forEach((item) => {
    listChecked.push(item.checked);
  });

  if (title.value) {
    isCheckTitle = true;
    document.getElementById("errWork").style.display = "none";
  } else {
    isCheckTitle = false;
    document.getElementById("errWork").style.display = "block";
  }
  if (listChecked.some((i) => i)) {
    isCheckStatus = true;
    document.getElementById("errStatus").style.display = "none";
  } else {
    isCheckStatus = false;
    document.getElementById("errStatus").style.display = "block";
  }
  return isCheckStatus && isCheckTitle;
};
