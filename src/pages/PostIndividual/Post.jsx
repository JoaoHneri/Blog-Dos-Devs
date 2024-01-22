import { useFetchDocument } from "../../hooks/useFetchDoc";
import "./Post.css";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);

  return (
    <div className="post_container">
      {loading && <p>Carregando post...</p>}
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <div className="body-content">
            <p>{post.body}</p>
          </div>
          <h3>Esse post trata sobre: </h3>
          <div className="tags">
            {post.tags.map((tag) => (
              <p key={tag}>
                <span>#</span>
                {tag}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Post;
