// bước 1  xây dựng UI
// B2 lấy giá trị form
// b3 hình dung được data = > kích lấy được đối tượng user=> push vào mảng users
// xóa phải làm sao 
const imageDefault = "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png";
let users = [];
const valID = document.getElementById("id");
const valUserName = document.getElementById("username");
const valAvatar = document.getElementById("image");
const valSalary = document.getElementById("salary");
const valDes = document.getElementById("description");
const showIamge = document.getElementById("showimage");
const btnSubmit = document.getElementById("btnSubmit");
let   selectedCheckBoxIds = [];
const checkAll = document.getElementById("checkAll");
const btnDelete = document.getElementById("btnDelete");
const listGender = document.querySelectorAll(
  '[type = "radio"][name = "gender"]'
);
const valmarried = document.querySelectorAll(
  '[type = "radio"][name = "married"]'
);
const valducation = document.getElementById("education");
const tbody = document.querySelector("tbody");

console.log([valAvatar]);
valAvatar.onchange = (e) =>
{
    const file = e.target.files[0];
    console.log(file);
    if(file)
    {
        const url = URL.createObjectURL(file);
        console.log(url);
        showIamge.setAttribute("src",url);
    }
}

const handleSumit = () => {
  console.log(selectedCheckBoxIds ,"selectedCheckBoxIds");
  let gender = "";
  listGender.forEach((item) => {
    if (item.checked) {
      gender = item.value;
    }
  });
  let married = "";
  valmarried.forEach((item) => {
    if (item.checked) {
      married = item.value;
    }
  });
  let avatar = "";
  avatar = showIamge.getAttribute("src");
  const formUsers = {
    id: Date.now(),
    username: valUserName.value,
    salary: valSalary.value,
    description: valDes.value,
    gender,
    married,
    ducation: valducation.value,
    avatar,
  };
  console.log(formUsers, "formUser");
  if (valID.value) {
          console.log(valID.value);
          users = users.map((item) =>
          {
            if(item.id === +valID.value)
            {
                return {
                    ...formUsers,
                    id:item.id,
                };
            }
            return item
          });
          btnSubmit.innerText = "Thêm";
  }
  else
  {
    users = [...users, formUsers].map((i)=>
    {
      return {
        ...i,
        status :selectedCheckBoxIds.includes(i.id)
      };
    });
  }
  rederTable(users);
  resetForm();
}; 

const rederTable = (arrUser = []) => {
  if(arrUser.length > 0)
  {
    checkAll.disabled = false;
  }
  else
  {
    checkAll.disabled = true;
  }
  tbody.innerHTML = arrUser.map((user) => {
    return ` 
     <tr> 
        <td>
           <input type="checkbox" 
           class = "listCheckBox" 
           value = ${user.id}
           onchange ="hanldechangeCheckBox(this)"/>
        </td>
        <td>
          ${user.id}
        </td>

        <td>
            ${user.username}
        </td>

        <td>
            <img src =${user.avatar ? user.avatar :imageDefault} width="100px"> 
        </td>

        <td>
             ${user.salary}
        </td> 

        <td>
             ${user.description}
        </td> 

        <td>
            ${user.gender}
        </td>

        <td>
            ${user.married}
        </td>

        <td>
            ${user.ducation}
         </td>

         <td>
         <button onclick="handleDelete(${user.id})">
            Xóa
         </button>
         <button onclick="handleEdit(${user.id})">
           Sửa
         </button>
         </td>

     </tr> 
    `;
  }).join("");
  const listCheckBox = document.querySelectorAll(".listCheckBox");
  console.log(listCheckBox,"listCheckBoxlistCheckBox");
  listCheckBox.forEach(item =>
    {
      item.checked = selectedCheckBoxIds.includes(+item.value)
    });
    if(arrUser.length !== selectedCheckBoxIds.length)
    {
      checkAll.checked = false;
    }
};
rederTable(users);
const resetForm = () =>
{
     valUserName.value ="";
     valSalary.value ="";
     valDes.value = "";
     valducation.value ="";
     listGender.forEach(item =>
        {
            item.checked = false;
        });
        valmarried.forEach(item =>
            {
                item.checked = false;
            });
    showIamge.setAttribute("src","");
    valID.value = "";
};

const handleDelete = (userId) =>
{
  console.log(userId,'UserId');
  const updateUsers = users.filter(user => user.id !== userId)
  users = [...updateUsers];
  rederTable(users);
}

const handleEdit = (userId ) =>
{
   const editUser = users.find((user) =>user.id === userId)
   console.log(editUser,"editUser");
   const{username,salary,description,married,ducation,gender,avatar} = editUser;

   valUserName.value = username;
   valSalary.value = salary;
   valDes.value = description;
   valducation.value = ducation;
   listGender.forEach(item =>
    {
        if(item.value === gender)
        {
            item.checked = true;
        }
    });
    valmarried.forEach((item) =>
    {
        if(item.value === married)
        {
            item.checked = true;
        }
    });
    showIamge.setAttribute("src", avatar ? avatar :imageDefault);
    valID.value =userId;
    btnSubmit.innerText = "Sửa";

}

const hanldechangeCheckBox = (e) =>
{
  {
    const userId = e.value; 
    console.log(userId);
    if (e.checked) {
       selectedCheckBoxIds.push(+userId); 
    } else {
       selectedCheckBoxIds = selectedCheckBoxIds.filter(id => id !== +userId); 
    }
    console.log(selectedCheckBoxIds); 
    if(selectedCheckBoxIds.length >0)
    {
      btnDelete.style.display = "block";
      btnDelete.innerHTML =`Xóa <span>${selectedCheckBoxIds.length}</span>`
    }
    else
    {
      btnDelete.style.display = "none";
    }
    if(selectedCheckBoxIds.length === users.length)
    {
      checkAll.checked = true;
    }
    else
    {
      checkAll.checked = false;
    }
 }
 
};
checkAll.onchange = (e) => {
  const checked = e.target.checked;

    const listCheckBox = document.querySelectorAll(".listCheckBox");

  if (checked) {
    listCheckBox.forEach((item) => {
      item.checked = true;
    });
    selectedCheckBoxIds = users.map((user) => user.id);
  } else {
    listCheckBox.forEach((item) => {
      item.checked = false;
    });
    selectedCheckBoxIds = [];
  }

  if (selectedCheckBoxIds.length > 0) {
    btnDelete.style.display = "block";
    btnDelete.innerHTML = `<span> Xóa tất cả</span>`;
  } else {
    btnDelete.style.display = "none";
  }
};


const handleDeleteFormCheckBox = () =>
{
   const updateUsers = users.filter(item => !selectedCheckBoxIds.includes(item.id));
   users = [...updateUsers];
   selectedCheckBoxIds = [];
   rederTable(users);
   btnDelete.style.display = "none";
   if(selectedCheckBoxIds.length ===0 )
   {
    checkAll.checked = false;
    checkAll.disabled = true;
   }; 
};