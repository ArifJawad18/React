import { useEffect, useState } from "react";
export default function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data => setPosts(data)));
  }, []);

  return (
    <div className="">
      <h3>Post:{posts.length}</h3>
      {/* {
        posts.map (post => <Post
        post= {post}></Post>)
      } */}
    </div>
  );
}
