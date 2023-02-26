import React, { useState, useEffect } from "react";
import Button from "../Button";
import Card from "../Card/Card";
import { getPosts } from "../../helpers/sendRequest";

import "./BlogDashboard.scss";

const BlogDashboard = () => {

  useEffect(()=>{
      getPosts(1, 10)
      .then(response=>setPosts(response.data))
      },[])

  const imgPerRow = () => {
    if (window.screen.width >= 1400) {
      return 6;
    } else if (window.screen.width >= 1000 && window.screen.width < 1400) {
      return 4;
    } else if (window.screen.width < 1000 && window.screen.width >= 430) {
      return 2;
    } else if (window.screen.width < 430) {
      return 1;
    }
  };

  const [posts, setPosts] = useState([]);
  const [nextImg, setNextImg] = useState(imgPerRow());

  const handleMoreImage = () => setNextImg(nextImg + imgPerRow());

  return (
    <div className="blog-wrapper">
      <div className="posts-wrapper">
        {posts &&
          posts
            .slice(0, nextImg)
            .map((post) => <Card post={post} key={post.id} />)}
      </div>
      <div onClick={handleMoreImage}>
        {nextImg < posts.length && (
          <Button className={"btn-show-more"} text={"Meer laden"} />
        )}
      </div>
    </div>
  );
};
export default BlogDashboard;
