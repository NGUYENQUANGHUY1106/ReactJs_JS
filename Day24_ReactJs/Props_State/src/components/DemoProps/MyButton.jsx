import React from 'react'

const MyButton = (props) => {
    console.log(props);
    const { title, classs,onclick } = props;
    return (
        <button className={`border border-amber-300 bg-amber-50 cursor-pointer mx-3 ${classs} `} onClick={onclick} >
            {title}
        </button>
    )
}

export default MyButton;
