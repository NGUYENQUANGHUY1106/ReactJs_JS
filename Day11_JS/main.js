console.log(2 + "2");
// số cộng string = string
console.log(true + "2");
console.log("5" - 1);
// string + - * / số = number
// biến số thành chuyển
console.log(2 + "");
// string biến đổi thành number
const string = "2";
console.log(+string);
// toán tử ++ và -- chỉ áp dụng được cho let và var
// đặt trước biên
// ++1 tương đương i = i +1 ;
// đặt sau biến
//i++ cũng bằng 2
// nếu là biểu thức độc lập là hoàn toàn giống nhau
// sự khác nhau
let i1 = 1;
let n = ++i1 + 1;
console.log(n);
// tại sao ++i sẽ cộng trước sau đó cộng thêm một ở sau rồi gán cho n ;
let i2 = 1;
let b = i2++ + 1;
console.log(b);
// cộng sau rồi mới gán gán trước sau đó mới tăng lên một
{
  let a = 1;
  let x = ((a = a + 1), a + 4);
  console.log(a);
  console.log(x);
}
// so sánh bằng không nghiêm ngặt ==
// so sánh bằng nghiêm ngặt ===
// so sánh khác không nghiêm ngặt !=;
// so sánh khác nghiêm ngặt !==

//demo ss nghiêm ngặt và không nghiêm ngặt
{
  let n1 = 2;
  let text = "2";
  console.log(n1 == text);
  // ss không nghiêm ngặt chi so sánh giá trị bỏ qua kiểu dữ liệu
}
{
  let n1 = 2;
  let text = "2";
  console.log(n1 === text);
  // so sánh cả giá trị và kiểu dữ liệu
}
{
  const valueInput = "";
  if (valueInput === "") {
    console.log("ko được bỏ trống");
  }
}
// toán tử ??

// trong trường hợp null hoặc underfined
const user1 = {
  id: 1223,
  name: "huy",
  avatar: null,
};
if (user1.avatar) {
  console.log("Lấy ảnh Thật");
} else {
  console.log(user1, name.slice(0, 1));
}

console.log(user1.avatar ?? user1, name.slice(0, 1));

const number = 10;
if (number % 2 == 1) {
  console.log(`${number} là số lẻ`);
} else {
  console.log(`${number} là số chẳn`);
}
number % 2 === 1
  ? console.log(`${number} là số lẻ`)
  : console.log(`${number} là số chẳn`);

// lấy thời gian hiện tại
const date = new Date();
const hours = date.getHours();
console.log(hours);
// không bao giờ sử dụng toán tử 3 ngôi khi có có nhiều if else lồng nhau chỉ tối đa khi sử dụng đối với 3 dòng
// lấy nagyf
const day = date.getDay();
console.log(day);
switch (day) {
  case 0:
    console.log("Chủ nhật");
    break;
  case 1:
    console.log("Thứ 2");
    break;
}
const myJob = {
  name: "Khờ",
  floor: 11,
  grade: "you",
  mark: 0,
};
if (myJob) {
  console.log("line1");
} else if (myJob.grade) {
  console.log("line2");
}

const arrange = 8.6;
if (arrange >= 4 && arrange < 5.5) {
  console.log("D");
} else if (arrange >= 5.5 && arrange < 7) {
  console.log("C");
} else if (arrange >= 7 && arrange < 8.5) {
  console.log("B");
} else if (arrange >= 8.5 && arrange <= 10) {
  console.log("A");
}

// toán tử 3 ngôi
const grade =
  arrange >= 4 && arrange < 5.5
    ? "D"
    : arrange >= 5.5 && arrange < 7
    ? "C"
    : arrange >= 7 && arrange < 8.5
    ? "B"
    : arrange >= 8.5 && arrange <= 10
    ? "A"
    : "Không hợp lệ";

console.log(grade);

let number2 = 0;
console.log(number2++);
console.log(++number2);
console.log(number2);

{
  let str = "hello";
  str += "world";
  let msg = str;
  console.log(msg);
}

{
  const arrange = 5;
  if (arrange >= 0 && arrange < 4) {
    console.log("yếu");
  } else if (arrange >= 4 && arrange < 6.5) {
    console.log("TB");
  } else if (arrange >= 6.5 && arrange < 8) {
    console.log("Khá");
  } else if (arrange >= 8 && arrange <= 10) {
    console.log("giỏi");
  }
}
{
  const day = date.getDay();
  console.log(day);
  switch (day) {
    case 0:
      console.log("Chủ nhật");
      break;
    case 1:
      console.log("Thứ 2");
      break;
    case 2:
      console.log("thứ 3");
      break;
    case 3:
      console.log("Thứ 4");
      break;
    case 4:
      console.log("Thứ 5");
      break;
    case 5:
      console.log("Thứ 6");
      break;
      case 6 :
        console.log("thứ 7");
      break;
      default :
      console.log("Ngoại Lệ ");
  }
}
