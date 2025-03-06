const URL_API = "https://67a7518f203008941f67426c.mockapi.io/ap1/v1/todo";
const valtitle = document.getElementById("title");
const listStatus = document.querySelectorAll(
  "[type = 'radio'][name = 'status']"
);
const domListTodo = document.querySelector(".list_todo");
const noData = document.getElementById("noData");
const btnSubmit = document.querySelector(".btnSubmit");
let idTodo = null;

const loadData = () => {
  fetch(URL_API)  
    .then((res) => {
      return res.json();
    })
    .then((data) => renderData(data))
    .catch((err) => console.log(err));
};
loadData();

const addTodos = (data) => {
  fetch(URL_API, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    if (res.ok) {
      {
        loadData();
      }
    }
  });
};
const renderData = (todos) => {
  if (todos.length) {
    noData.style.display = "none";
  } else {
    noData.style.display = "block";
  }
  domListTodo.innerHTML = todos
    .map((todo) => {
      return `
             <div class="box_todo">
              <div>${todo.title}</div>
              <button>${todo.status}</button>
              <div>
                <button onclick="handleDelete(${todo.id})">
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
                <button onclick="handleDetailTodo(${todo.id})">
                  <i class="fa fa-pencil" aria-hidden="true"></i>
                </button>
              </div>
            </div>  
         `;
    })
    .join("");
};
const resetForm = () => {
    idToDo = null;
    title.value = "";
    listStatus.forEach((item) => {
        item.checked = false;
    });
};
const handleDelete = (id) => {
    fetch(`${URL_API}/${id}`, {
        method: "DELETE",
    })
    .then((res) => {
      if (res.ok) {
        loadData();
      }
    })
    .catch((err) => console.log(err));
};
const handleDetailTodo = (id) => {
    fetch(`${URL_API}/${id}`)
    .then((res) => {
        return res.json();
    })
    .then((detail) => {
        const { status, title } = detail;
        idTodo = id;
        valtitle.value = title;
      listStatus.forEach((item) => {
          if ((item.value = status)) {
              item.checked = true;
        }
    });
    });
};

const handleSubmit = () => {
  let status = "";
  listStatus.forEach((item) => {
    if (item.checked) {
      status = item.value;
    }
  });
  const itemTodo = {
    title: valtitle.value,
    status,
  };
  console.log(itemTodo, "itemtodo");
  if(idTodo)
  {
   updateTodos(idTodo,itemTodo)
  } else
  {
    addTodos(itemTodo);
  }
  resetForm();
};

const updateTodos = (id,data) => {
    fetch(`${URL_API}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) {
        {
          loadData();
        }
      }
    });
  };