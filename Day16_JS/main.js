// bài 1
const product = [
    {
      name: "but chi",
      price: 10000,
      amount: 10,
      color: ["red", "green", "blue"],
      origin: "Thien long",
      code: "BC01",
    },
    {
      name: "but chi",
      price: 8000,
      amount: 90,
      color: ["red", "green"],
      origin: "Hong ha",
      code: "BC02",
    },
    {
      name: "but bi",
      price: 9000,
      amount: 20,
      color: ["red", "green", "blue"],
      origin: "Thien long",
      code: "BC03",
    },
    {
      name: "but bi",
      price: 8000,
      amount: 15,
      color: ["red", "green", "blue", "yellow"],
      origin: "Thien long",
      code: "BC04",
    },
    {
      name: "but xoa",
      price: 8000,
      amount: 15,
      color: ["red", "green"],
      origin: "Hong ha",
      code: "BC05",
    },
    {
      name: "but xoa",
      price: 8000,
      amount: 22,
      color: ["red", "green", "black"],
      origin: "Thien long",
      code: "BC06",
    },
  ];
// câu 1: Câu 1: Sử dụng hàm forEach, hiển thị ra màn hình thông tin các sản phẩm theo cấu trúc.
// "Sản phẩm a, msp b: giá bán c vnd, có các màu x-y-z, được phân
// phối bởi công ty d
// Hàng tồn:  e"

// product.forEach(function(item)
// {
 
  
//     console.log(`Sản Phẩm ${item.name}, msp ${item.code} , giá bán ${item.price} vnd , có các màu ${item.color.join("-")} , được phân phối bởi công ty ${item.origin}, Hàng Tồn ${item.amount}`);
  
// })

// Câu 2: sử dụng một hàm đã học của array để tạo ra một mảng sản phẩm mới ,
// với mức giá của sản phẩm có mã "BC05" tăng lên 2000, và sản phẩm có mã "BC04" thêm màu "purple",
// tất cả tên của sản phẩm được viết hoa.

const cau2 = product.map(function(item)
{
  if(item.code === "BC05")
  {
    item.price = item.price + 2000;
  }
  if(item.code ==="BC04")
  {
    item.color.push("purple");
  }
  return{
    name: item.name.toLocaleUpperCase(),
    price: item.price ,
    color : item.color ,
    amount : item.amount ,
    code :item.code,
  }
});
console.log(cau2);
// cách 2
const cau2c2 = product.map(function(item)
{
  if(item.code === "BC05")
  {
    item.price = item.price + 2000;
  }
  if(item.code ==="BC04")
  {
    item.color.push("purple");
  }
  return{
    name: item.name.toLocaleUpperCase(),
    price: item.price === "BC05" ? item.price += 2000 : item.price,
    color : item.color === "BC04" ? item.color.concat(["purple"]) : item.color,
    amount : item.amount ,
    code :item.code,
  }
});
console.log(cau2c2);
// Câu 3: sử dụng hàm của array để lọc ra
// những sản phẩm có lượng hàng tồn kho nhỏ hơn 10 và có giá ít nhất 8000.

const cau3 = product.filter(function(item)
{
   return (item.amount <=10 && item.price >=8000);

});
console.log(cau3);
//Câu 4: sử dụng hàm của array để tìm 1 ra sản phẩm
// sử dụng  find

const cau4 = product.find(function(item)
{
  if(item.origin === "Hong ha" && (item.price >10000 || item.amount <6))
  {
    return true;
  }
  return false;
});
console.log(cau4);

// Câu 5: sử dụng hàm của array để kiểm tra xem, có phải có ít nhất một
// sản phẩm  của nhà cung cấp "Thien long" có giá trên 10000 không

const cau5 = product.some(function(item)
{
  return (item.origin === "Thien Long" && item.price > 10000);
});
console.log(cau5);

// Câu 6: sử dụng hàm của array để kiểm tra xem, có phải tất cả các
// sản phẩm đều còn hàng hay không?

const cau6 = product.every(function(item)
{
  return (item.amount>0);
});
console.log(cau6);

// Câu 7: sử dụng hàm của array để tạo ra một mảng sản phẩm mới,với mỗi sản phẩm
// có thêm một thông tin là locked để lưu thông tin xem sản phẩm có đang bị cấm
// không ,  thực hiện cấm bán với những sản phẩm thuộc nhà cung cấp "Thien long"

{
  const addblocked = product.map(function(item)
  {
    return {
      name :item.name,
      price : item.price,
      color : item.color,
     amount : item.amount ,
     origin : item.origin,
      code :item.code,
      locked : item.origin === "ThienLong",
    }
  });
  console.log(addblocked);
}

// Câu 8: sử dụng hàm của array để sắp xếp các sản phẩm trên theo
// thứ tự tăng đần của giá.
{
  const sortArr = product.sort(function(a,b)
  {
    return a.price - b.price;
  });
  console.log(sortArr);
}
// sắp xếp theo số lượng hàng tồn
{
  const sortArr = product.sort(function(a,b)
  {
    return  b.amount - a.amount ;
  });
  console.log(sortArr);
}

//======================================== Bài 2 ==========================//
const students = [
  { name: "Nghiêm 1", scores: [90, 85, 92] },
  { name: "Nghiêm 2", scores: [75, 80, 85] },
  { name: "Nghiêm 3", scores: [90, 95, 89] },
  { name: "Nghiêm 4", scores: [100, 100, 100] },
];

// từ students hiển thị danh sách học sinh có điểm trung bình lớn hơn 90
// output:  [
// 		    { name: 'Nghiêm 3', tbc: 91.33333333333333 },
//  		    { name: 'Nghiêm 4', tbc: 100 }
//         ]
{
  let Bai2 = students.map(function(item)
  {
    let sum = 0 ;
    item.scores.forEach(score => sum += score)
    console.log(sum);

    let tcb = sum / item.scores.length;

    return{
      name :item.name,
      tcb :tcb,
    }
  });
  console.log(Bai2);

  let hienThi = Bai2.filter(function(item)
  {
    return item.tcb > 90 ;
  });
  console.log(hienThi);
}
//======================================== Bài 3 ==========================//
const listHS = [
  {
    name: "A",
    diem: 4,
  },
  {
    name: "B",
    diem: 6,
  },
  {
    name: "C",
    diem: 8,
  },
  {
    name: "D",
    diem: 8,
  },
];

// Tìm điểm cao nhất
const max = Math.max(...listHS.map(student => student.diem));
console.log("Điểm cao nhất:", max);

// Lọc học sinh có điểm cao nhất
const diemcaonhat = listHS.filter(student => student.diem === max);
console.log( diemcaonhat);
// Bài 4
const a = [
  {
    price: "1234",
    inventoryQuantity: "1",
    sku: "JOYME-119",
    name: "",
  },
  {
    price: "1234",
    inventoryQuantity: "2",
    sku: "JOYME-120",
  },
  {
    price: "1234",
    inventoryQuantity: "3",
    sku: "JOYME-121",
  },
  {
    price: "1234",
    inventoryQuantity: "4",
    sku: "JOYME-122",
  },
  {
    price: "1234",
    inventoryQuantity: "1234",
    sku: "",
  },
  {
    price: "1234",
    inventoryQuantity: "1234",
    sku: "",
  },
  {
    price: "1234",
    inventoryQuantity: "1234",
    sku: "",
  },
  {
    price: "1234",
    inventoryQuantity: "1234",
    sku: "",
  },
];

a.forEach(function(item)
{
  if(item.sku === "")
  {
    delete item.sku
  }
});
console.log(a);

// bài 5
const bai5 = ["","" ,"nghiem", "", "", "nghiem1", "", "",""];
 let newBai5 = bai5.filter(function(item,index)
{
  if(item === "" &&  index >= 2)
  {
    return false;
  }
  return true;
});
console.log(newBai5);

// Bài 6
const bai6 = [
  {
    properties: "màu sắc",
    option: ["xanh", "", "đỏ", "", ""],
  },
  {
    properties: "giới tính",
    option: ["nam", "nữ", "", 0],
  },
];

const newBai6 = bai6.map(function(item)
{
  return{
    properties: item.properties,
    option : item.option.filter(function(option)
    {
      return option !== "" && option !== 0
    })
  }
});
console.log(newBai6);
//bài 7
const bai7 = [
  {
    mau_sac: "xanh",
    gia_ban: 0,
    so_luong: 0,
    sku: "sku",
    rowSpan: 1,
  },
  {
    mau_sac: "",
    gia_ban: 0,
    so_luong: 0,
    sku: "sku",
    rowSpan: 1,
  },
];
const newBai7 = bai7.filter(function(item)
{
  // for (const i in item) {
  //   console.log(i);
  //   if(item[i] === "")
  //   {
  //     return false
  //   }
  // }
  // return true;

  console.log(Object.values(item))
  const isCheck = Object.values(item).some(function(item)
  {
    return item === ""
  });
  console.log(isCheck);
  return !isCheck

});
console.log(newBai7);
//Bài 8: dùng reduce
const bai18 = [
  {
    inventoryItem: {
      inventoryLevels: [
        {
          stockedQuantity: 43,
        },
        {
          stockedQuantity: 0,
        },
        {
          stockedQuantity: 0,
        },
        {
          stockedQuantity: 0,
        },
      ],
    },
  },
  {
    inventoryItem: {
      inventoryLevels: [
        {
          stockedQuantity: 43,
        },
        {
          stockedQuantity: 0,
        },
        {
          stockedQuantity: 3,
        },
        {
          stockedQuantity: 1,
        },
      ],
    },
  },
];

//reduce 
const total = [1,2,3,4,5].reduce(function(accmulator,currentValue,currentIndex,array)
{
  return accmulator + currentValue ;
},0)
console.log(total);

const numbers = [1,2,3,56,34,3,6,0];
const maxNumber = numbers.reduce(function(acc,curr){
  return Math.max(curr);
},numbers[0]);
 console.log(maxNumber);
// tìm giá trị lớn nhất trong mảng


// tính tbc 
const score =  [90,85,92]

const newScore =score.reduce((acc,curr) =>
{
  return acc + curr ;
},0) /score.length;
console.log(newScore);


const traiCay = ["apple","banana","orage","banana"];

const newTraiCay = traiCay.reduce(function(object,item) 
{
    if(object[item])
    {
      object[item] += 1;
    } else
    {
      object[item] = 1;
    }
    return object;
},{});
console.log(newTraiCay);

//Bài 8: dùng reduce
const bai8 = [
  {
    inventoryItem: {
      inventoryLevels: [
        {
          stockedQuantity: 43,
        },
        {
          stockedQuantity: 0,
        },
        {
          stockedQuantity: 0,
        },
        {
          stockedQuantity: 0,
        },
      ],
    },
  },
  {
    inventoryItem: {
      inventoryLevels: [
        {
          stockedQuantity: 43,
        },
        {
          stockedQuantity: 0,
        },
        {
          stockedQuantity: 13,
        },
        {
          stockedQuantity: 1,
        },
      ],
    },
  },
];

// tính tổng tất cả stockedQuantity của array

const toatlStockedQuantity = bai8.reduce(function(acc,curr)
{
   const sum = curr.inventoryItem.inventoryLevels.reduce(function(subAcc,subCurr)
   {
     return  subAcc + subCurr.stockedQuantity;
   },0);
   return acc +sum
},0);
console.log(toatlStockedQuantity);

//Bài 9: dùng reduce
const Bai9 = [
  {
    inventoryItem: {
      inventoryLevels: [
        {
          stockedQuantity: 43,
          id: "nghiem1",
        },
        {
          stockedQuantity: 5,
          id: "nghiem",
        },
        {
          stockedQuantity: 0,
          id: "nghiem1",
        },
        {
          stockedQuantity: 10,
          id: "nghiem",
        },
      ],
    },
  },
  {
    inventoryItem: {
      inventoryLevels: [
        {
          stockedQuantity: 45,
          id: "nghiem",
        },
        {
          stockedQuantity: 0,
          id: "nghiem1",
        },
        {
          stockedQuantity: 0,
          id: "nghiem1",
        },
        {
          stockedQuantity: 0,
          id: "nghiem1",
        },
      ],
    },
  },
];

const b = "nghiem";
//Y/C: tính tổng tất cả stockedQuantity nếu id trùng với giá trị b


const totalBai9 = Bai9.reduce(function(acc,curr)
{
   const sum = curr.inventoryItem.inventoryLevels.reduce(function(subAcc,subCurr)
   {
     if(subCurr.id === b)
     {
       return subAcc + subCurr.stockedQuantity;
     }
     return subAcc;
   },0);
    console.log(sum);
    return acc + sum ;
},0);
console.log(totalBai9);

// Bài 10:
const products = [
  {
    isHide: false,
    position: 1,
    id: "1234",
  },
  {
    isHide: false,
    position: 2,
    id: "12345",
  },
  {
    isHide: false,
    position: 3,
    id: "123456",
  },
  {
    isHide: false,
    position: 4,
    id: "1234567",
  },
];

const productId = "1234";
const ids = ["12345", "1234"];

// ý a: nếu productId trùng với id của mảng products thì tạo mảng mới
// chuyển đổi isHide thành true

// ý b: nếu giá trị phần tử ids trùng với id của mảng products
// thì tạo mảng mới chuyển đổi isHide thành true

// ý c:const ids = ["12345", "1234"];
//  nếu giá trị phần tử ids trùng với id của mảng products thì tạo mảng mới ,
//  xóa luôn item đó

//ý a
const yA = products.map(function(item)
{
   if(item.id === productId)
   {
      item.isHide = "true";
   }
   return {
    isHide : `${item.isHide}`,
    position :  `${item.position}`,
    id : `${item.id}`
   } ;
},0);
console.log(yA);
 // ý B

const yB =  products.map(function(item)
{
   return{
     isHide : ids.includes(item.id) ? true : item.isHide,
     position :item.position,
     id :item.id
   }
});
console.log(yB);

// ý c

 const deleteProducts = products.filter((item) =>
 {
    return !ids.includes(item.id);
 });
 console.log(deleteProducts);