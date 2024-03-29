import "./Search.css";

// hooks

import { useQuery } from "../../hooks/useQuery";

// components

import { Link } from "react-router-dom";
import { useFetchDocuments } from "../../hooks/useFetchDocument.";
import PostDetails from "../../Components/PostDetails/PostDetails";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div className="search_container">
      <h1>Resultados encontrados para: {search}</h1>
      <div className="post-list">
        {posts && posts.length === 0 && (
          <>
            <p>Não foram encontrados posts a partir da sua busca...</p>
            <Link to="/" className="btn btn-dark">
              Voltar
            </Link>
          </>
        )}
        {posts && posts.map((post) => <PostDetails key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Search;