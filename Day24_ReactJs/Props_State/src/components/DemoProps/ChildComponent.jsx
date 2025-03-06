import React from 'react'

const ChildComponent = (props) => {
  console.log(props);
  const {name ,age} = props
  return (
    <div>
      
        <p>Name: {name}</p>
        <p>Age :{age}</p>
      
    </div>
  )
}

export default ChildComponent
// khi nào thằng component này là con của thằng khác khi import thằng này vào trong thằng kia
//props.children được ksuwr dụng khi bạn cần truyền các phần tử con (child elements )
// từ component cha vào component  con