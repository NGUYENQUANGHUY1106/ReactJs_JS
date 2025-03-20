import React, { useEffect, useState } from "react";
import { use } from "react";
import axios from "axios";
import RenderData from "./RenderData";
const URL_API = "https://jsonplaceholder.typicode.com";
const UseEffectExample = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [typeApi, setTypeApi] = useState("posts");
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const fetchDataPost = async (type) => {
    setLoading(true);
    const res = await axios.get(`${URL_API}/${type}`);
    if (res.status === 200) {
      setLoading(false);
      if (type === "posts") {
        console.log(res.data);
        setPosts(res.data.slice(0, 10));
      } else {
        setComments(res.data.slice(0, 10));
      }
    }
  };
  useEffect(() => {
    fetchDataPost(typeApi);
    setDetail({});
  }, [typeApi]);
  const handleDetail = async (id) => {
    setLoading(true);
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/${typeApi}/${id}`
    );

    console.log(id);
    if (res.status === 200) {
      console.log(res.data);
      setDetail(res.data);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (id) {
      handleDetail(id);
    }
  }, [id]);
  console.log(posts);
  return (
    <div>
      <button
        className={`${typeApi === "posts" ? "bg-red-700" : ""}`}
        onClick={() => {
          setTypeApi("posts");
        }}
      >
        Call Api Post
      </button>
      <button
        className={`${typeApi === "comments" ? "bg-green-700" : ""} ml-3`}
        onClick={() => {
          setTypeApi("comments");
        }}
      >
        Call Api Comments
      </button>
      {typeApi === "posts" ? (
        <div>
          <p>ID : {detail.id}</p>
          <p>Body : {detail.body}</p>
          <p>Title : {detail.title}</p>
        </div>
      ) : (
        <div>
          <p>ID : {detail.id}</p>
          <p>Name : {detail.name}</p>
          <p>Body : {detail.body}</p>
        </div>
      )}
      {loading ? <p>Loading ....</p> : ""}
      <RenderData
        type={typeApi}
        data={typeApi === "posts" ? posts : comments}
        onChooseGetId={(id) => {
          //  console.log(id, "idididid");
          //  handleDetail(id);
          // Cách 2
          setId(id);
        }}
      />
    </div>
  );
};

export default UseEffectExample;
