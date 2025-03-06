// tính tổng số mili giây tính từ năm 01/01/1970

const mili = Date.now()
console.log(mili);

 // layys ngày giờ dùng hàm có sẳn trong js

 const date = new Date();

 console.log(date.getHours());
 console.log(date.getDay() +1);
 console.log(date.getFullYear());
 console.log(date.getMonth() +1);

 // ====================================//
 //object 
 const myObject =
 {
    name : "huy",
    age :20,
    input :"",
    inut2 :"",
    input3:"",
    input4:"123",
 }
 console.log(myObject.name);
 console.log(myObject["name "]);
 // thêm giá trị vào objects 
 myObject.address = "QT";
 console.log(myObject);
 // xóa giá trị
 delete myObject.age;

 console.log(myObject);
// xóa một key rông

for (const key in myObject) {
    console.log(key);
    if(myObject[key]==="")
    {
        delete myObject[key]
    }
}
console.log(myObject);
//object.values trả về một mảnh danh sách là các giá trị của key cs trong object a
//object.values(a  )
console.log(Object.values(myObject));
// objects.key lấy ra danh sách key
console.log(Object.keys(myObject));

const formData =
{
    id :1106,
    title:"",
    amount : 10,
    status :false,
    des :"uiui",
}
// loại bỏ key-value nào mà false
  const keys = Object.keys(formData);
  console.log(Object.keys(formData));

  for(let i = 0 ; i <keys.length;i++)
  {
    if(!formData[keys[i]])
  {
    console.log(formData[keys[i]]);
    delete formData[keys[i]];
  }
  }
  console.log(myObject);
  // object.entries(a)==> giúp trả về một mảng là danh sách các cặp key-value có trong a 
console.log(Object.entries(formData));

//======================================================//
//ARRY
//arr.join tạo ra một chuổi
const numbers = [1,2,3,4,5];
console.log(numbers.join("."));
const sizes = ["XL","M","S"];
console.log(sizes.join("-"));

// arr.pop(); thay đổi mảng bằng cách lấy ra phần tử cuối của mảng arr và trả về phần tử đó 
console.log(numbers[numbers.length-1]);
console.log(numbers.pop());
//arr.shift() như pop lấy phần tử đauù tiên
console.log(numbers.shift());
// arr.push();
console.log(numbers.push(5,6,7,8));
console.log(numbers);
//arr.unshift(a): thay đổi mảng bằng cách thê phần tử vào đầu mảng
console.log(numbers.unshift(1));
console.log(numbers);
//arr.concat
console.log(["a","b","c"].concat("m","l"));

//
//trim()
//loại bỏ khoanghr trắng trc và sau
//trimStart() cắt khoảng trắng đầu 
// trimEnd()
const string = "huy";
console.log(string.split(""));
const size = 'XL-L-M';
console.log(size.split("-"));
const FILTERsTRING = "price,asc";
const arrorder = FILTERsTRING.split(",");
console.log(arrorder);

const params =
{
    orderBy : arrorder[0],
    SortBy : arrorder[1],
}
console.log(params);
// forEach array.forEach 
["xl","l","m","s"].forEach(function(item,index,arr)
{
    console.log(item.toLocaleUpperCase());
    console.log(index);
})
let sun = 0;
numbers.forEach(function(item)
{
  sun += item;
})
console.log(sun);
numbers.forEach(function(item)
{
    if(item % 2 === 0)
    {
        console.log(`Số Chẳn: ${item}`);
    }
    else
    {
        console.log(`Số lẻ: ${item}`);

    }
});

// so sánh giữa for và for each

// map
const numberss =[1,2,3,4,5];

const newNumbers = numberss.map(function(item,index)
{
    console.log(item);
    return item *2;
})
console.log(newNumbers);
const newNumbers2 = numberss.map(function(item)
{
    if(item %2 === 0)
    {
        return true;
    }
    else
    {
        return false;
    }
});
console.log(newNumbers2);
const words = ["hello","world","JS"];
const newNumbers3 = words.map(function(item)
{
    return item.length;
});
console.log(newNumbers3);

const traicay = ["apple", "banana","cherry"]

const newNumbers4 = traicay.map(function(item)
{
    return item.toLocaleUpperCase();
});
console.log(newNumbers4);

const ids = [1,2,3];

const newNumbers5 = ids.map(function(item)
{
    return `{id:${item},name:"nghiem${item}"}`;
});
console.log(newNumbers5);
//==================== ARRAY FILTER ==> trả về giá trị true hoặc false chỉ nhận những giá trị true đưa vào mảng 

const evenNumbers = numbers.filter(function(item)
{
    if(item % 2 ==0)
    {
        console.log(item);
        return true;
    }
    return false;
});
console.log(evenNumbers);

const students = 
[
    { name : "nghiem1", socer:10},
    { name : "nghiem2", socer:2},
    { name : "nghiem3", socer:8},
    { name : "nghiem4", socer:9},
    { name : "nghiem5", socer:5},
]

const checkSocer = students.filter(function(item)
{
    if(item.socer >= 8)
    {
        return true;
    }
    return false;
});
console.log(checkSocer);

 const listId = [2,4,6,7];

 const checkid = listId.filter(function(item,index)
 {
    if(item === 6 || index[2])
    {
        return false;
    }
    return true;
 });
 console.log(checkid);
 //Array find==> tìm kiếm ra 1 phần tử đầu tiên thỏa mản một điều kiện nào đó => kết quả trả về là 1 ptu array hoặc undefine khi ko ytimf thấy phần tử nào thỏa mản
 const user = students.find(function(item)
 {
    return item.socer ==5;
 });
 console.log(user);
 //ARAY SOME VÀ EVERY
 // SOME : trả về true khi có ít nhất một phần tử thoản mnr ddiieuf kiệnh
 //every : trả về true khi tất cả điieuù kiện thỏa mản 

 const isCheckstudent = students.some(function(item)
 {
    return item.socer <=4;
 });
 console.log(isCheckstudent);