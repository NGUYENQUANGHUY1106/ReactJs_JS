console.log("Hello World");
// Phần 2 biến trong JS
// biến lưu trong thanh ram
// var, let,const 
// không sử dụng var 
var name = "Huy";
var name ="Đức";
// var cho phép khai báo tên biến trùng nhau

console.log(name);
let age = 10 ;
console.log(age);
const total = 100 ;
console.log(total);

// const amount;
// console.log(amount);
// const bắt buộc phải gắn giá trị let và var không
// cần gắn giá trị
let address;
var number;
address ="Quảng trị";
number = 11;
console.log(number);
console.log(address);
// Global Scope
// function scope nó chỉ được sử dụng bên trong phamj vi hàm đó 


{
    function MyFunction() {
        var name1 ="Quang Huy";
        const scope =111;
        let text ="Hello";
        console.log(scope);
        console.log(text);
        console.log(name1); 
    }
    if(true)
    {
        const a= 10;
    
    }
    MyFunction();
}
{
    const name = "Huy Hello Các Bạn";
    const message = `${name}`;
    console.log(message);
}

let y = 15 ;
 if(true)
 {
     let y = 25 ;
     console.log(y);
 }
 console.log(y);