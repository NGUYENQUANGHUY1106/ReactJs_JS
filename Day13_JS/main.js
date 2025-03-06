// vòng lặp for
const number = [1,2,3,4,5,6];
let sum = 0;
for(let i =0 ; i <number.length;i++)
{
    console.log(number[i]);
    sum = sum + number[i];
}
console.log(sum);
for(let i = 1; i<500 ;i ++)
{
    console.log("Anh yêu Em");
}
for(let i = 0; i<10 ; i ++)
{
    if(i===2 || i===3)
    {
        continue;
    }
    console.log(i);
}
for(let i = 0 ;i<10;i++)
{
    if(i==3)
    {
          break;
    }
    console.log(i);
}
// trong một hàm break chỉ dừng vòng lặp for gần nó nhất còn return sẽ dừng toàn bộ hàm

//  bài 1
// let rows = 7; 
// for(let i =1 ;i < rows ;i ++)
// {
//     console.log("*".repeat(i));
// }
// cách khác 
function star()
{
    let row = "";
    for(let i = 1 ;i<=7 ;i++)
    {
        row += "*";
        console.log(row);
    } 
}
star();
// bài 2 
function chuoi(string,n) {
    let chuoiso = string;
    for (let i = 0; i < n; i++) {
        chuoiso += "-" + string;
    }
    return chuoiso;
}

console.log(chuoi("123",4))
//  bài 3
let sum1 = 1;
for (i= 1 ;i<=5 ; i++)
{
   sum1 = sum1 * i;
}
console.log(sum1);
// bài 4
const arrNumber = [1,44,64,55,24,32,55,19,17,74,22,23];
const envenNumber = [];
const oddNumber = [];
for(i=0 ;i<=arrNumber.length ;i++)
{
    if(arrNumber[i] %2 === 0)
    {
       envenNumber[envenNumber.length] = arrNumber[i];
    }
    else
    {
        oddNumber[oddNumber.length] = arrNumber[i];
    }
}
console.log(envenNumber);
console.log(oddNumber);

// for in
// neeuys mà object thì giúp chúng ta lấy được key 
// nếu mà array thì chúng ta lấy được index
const myObject =
{
    user : "Huy",
    age : 20,
    address:"Quảng Trị",
    amount : 0
}
for (const key in myObject) {
   console.log(key);
   console.log(myObject[key]);
   if(myObject[key] === 0)
   {
    delete myObject[key];
   }
}
console.log(myObject);

// for of nếu mà array thì sẽ giúp chuings ta lặp qua từng phần tử và lấy giá trị 
// nếu string sẽ lặp qua các phần tử 
for (const item of "nghiem") {
     console.log(item);
}
const string = "12345";
let sum2 = 0;
for(const item of string){
   let number = +item;
   console.log(number);
    sum2 += number;
}
console.log(sum2);