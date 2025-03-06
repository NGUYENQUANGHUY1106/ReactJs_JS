function myFunction()
{
 console.log("Hello Word");
}
// hàm có tính chất là hosting
// có thể dùng arounfunction
myFunction();
// tham số truyền vào 
function sayHello(input1 = 0, name,obj)
{
    console.log(input1);
    console.log(name);
    console.log(obj);
}
sayHello(10,"Huy",{address:"QuangTri",age:10});

//  function handel_tab1 ()
//  {
//     document.getElementById(".content2").style.display = "none";
//     document.getElementById(".content1").style.display = "block";
//  }
//  function handel_tab2 ()
//  {
//     document.getElementById(".content1").style.display = "none";
//     document.getElementById(".content2").style.display = "block";
//  }

// return trong hàm 
function somthing(a,b)
{
    return a +b;
}
const kq = somthing(2,3);
const kq1 = somthing(5,6);

console.log(kq);
console.log(kq1);

const valiInput = "Huy";
function validate(valiInput)
{
    let isCheckInput = false;
    if(valiInput)
    {
        isCheckInput = true;
    }
    return isCheckInput;
}
if(validate(valiInput))
{
    console.log("cho phép");
}
else
{
    console.log("ko được")
}

function checkisSmall(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  
  console.log(checkisSmall(5, 6)); // Kết quả: 5
  
function checkIsColor(color)
{
    switch(color)
    {
      case "red":
        return "mau do";
    case "green":
        return "mau vang";
    case "black":
        return "mau den";
    case "white":
        return "mau trang";
    default:
        return "khong xac dinh duoc mau"
    }
}
console.log(checkIsColor("white"));

function tichBaSo(a=0 , b=1 ,c=1)
{
    return a*b*c ;
}
console.log(tichBaSo());
console.log(tichBaSo(2));
console.log(tichBaSo(2,3));
console.log(tichBaSo(2,3,4));

function tichHaiSo(a,b)
{
    return a*b;
}
const KQ = tichHaiSo(2,3);
const KQ2 = tichHaiSo(4,5);

const Tong = KQ +KQ2;

console.log(Tong);

function SoSanhHaiSo(a,b)
{
    if(a>b)
    {
        return a;
    }
    else
    {
        return b;
    }
}
console.log(SoSanhHaiSo(5,7));
function KiemTraSo(a)
{
    return a % 2 === 0;
}
function ketQua(a)
{
    if(KiemTraSo(a))
    {
        console.log("Đây là số chẳn");
    }
    else
    {
        console.log("Đây là số lẻ");
    }
}
ketQua(4);
ketQua(5);


function thucHienTinhToan(a, b, callback) {
    const ketQua = callback(a, b); 
    console.log(ketQua);
}

function tinhTong(a, b) {
    return a + b;
}

function tinhHieu(a, b) {
    return a - b;
}

thucHienTinhToan(10, 5, tinhTong); 

thucHienTinhToan(10, 5, tinhHieu); 

function myFuncA(so) {
    console.log(so);
}

function myFuncB(text, callback) {
    console.log(text);
    callback(100); 
    console.log(`Dòng thứ hai: ${text}`);
}


myFuncB("Đây là đoạn text bất kỳ", myFuncA);