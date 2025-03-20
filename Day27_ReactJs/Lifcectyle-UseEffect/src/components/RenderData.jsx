import React from 'react'

const RenderData = ({type,data, onChooseGetId}) => {
  return (
    
    type === "posts"
    ? data.map((post) => (
        <div key={post.id}>
          <p>Id : {post.id}</p>
          <p>Title : {post.title}</p>
          <button onClick={() => onChooseGetId(post.id)}>Detail</button>
        </div>
      ))
    : data.map((comments) => (
        <div key={comments.id}>
          <p>Id : {comments.id}</p>
          <p>Name : {comments.name}</p>
          <p>Email : {comments.email}</p>
          <button onClick={() => onChooseGetId(comments.id)}>Detail</button>
        </div>
      ))
  )
}

export default RenderData
