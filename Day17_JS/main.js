// arrow function
// cú pháp arrow function () => {}
const myFun = () =>
{
    console.log("Xin Chào");
}
myFun();

const number = [1,2,3,4,5];
 const newNumbers = number.map((item)=>
 {
  return item *2;
 });
 console.log(newNumbers);
 // cách 2 
 // trong phiên bản ES6 đối với hàm map không cần return có ngoặc nhọn phải có return 
 const newNumbers2 = number.map(item => item *2);
 console.log(newNumbers2);

 //====Object==//
 // trong object key trùng vói biến bên ngoài chỉ cần viết một thú
 let diachi = "QuangTri";
 const myInfo = {
    name : "Huy",
    age :19,
    diachi
 };
 console.log(myInfo);

 const myFun1 = (name) =>
 {
    return {
        name
    }
 }
 console.log(myFun1("nghiem"));

 //===destructuring assignment==//
 const category = "Oppo";
 const productItem =
 {
    name :"Iphone 11",
    price :1000,
    amount :10,
    category : "phone"
 };
 console.log(productItem.name);
 console.log(productItem.price);
 console.log(productItem.amount);
 console.log(productItem.category);


 // nên dùng
 const {name,price,amount,category:newCategory} = productItem;
 console.log(name);
 console.log(price);
 console.log(amount);
 console.log(newCategory);

 const demo ={
    stock :5 ,
    review:
    {
        rating :4 ,
        comment :"Good",
        date : "2024-05-27",
        reviewName :"Huy",
        address : {
            city :"Cầu Giấy",
            status : {
                d : "ddd",
            }
        },
    },
    brand :"Nike",
    sku :"RCH45",
 };

//  const {stock} = demo ;
//  console.log(stock);
//  const {reviewName,address} = demo.review ;
//  console.log(reviewName,address); 

 // cách khác

 const {stock,
    review:{
        reviewName,
        address: {city,status:{d}},
    },
} = demo;
console.log(stock);
console.log(reviewName);
console.log(city);
console.log(d);

// ===== Spread, Rest syntax ==//
const newProductItem = {
    ...productItem,
    status :true,
    price:2000
}
const item = {
    total :10 ,
    stock :20,
}
 const object1 = {
    ...newProductItem,
    ...item,
 }
console.log(newProductItem);
console.log(object1);
 let product = [];
 products = [...products,object1]
 console.log(products);
