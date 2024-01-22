import React from "react";
import "./PostDetails.css";
import { Link } from "react-router-dom";

const PostDetails = ({ post }) => {
  return (
    <div className="post_detail">
      <img src={post.image} alt={post.title} />
      <div className="postContent">
              <h2>{post.title}</h2>
      <p>{post.createdBy}</p>
      <div className="tagsD">
        <div className="tags">
        {post.tags.map((tag) => (
          <p className="createdby" key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))} 
      </div>
      <Link to={`/posts/${post.id}`} className="btn btn-outline linkbtn">Ler</Link>
      </div>
      </div>

    </div>
  );
};

export default PostDetails;
