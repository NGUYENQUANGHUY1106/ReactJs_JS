import React from 'react'

const MyButton = (props) => {
    const {children ,bg, ...rest} = props
    // console.log(props);
  return (
    <div>
      <button {...rest}  className= {`${bg} font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}>{children}</button>
    </div>
  )
}

export default MyButton
