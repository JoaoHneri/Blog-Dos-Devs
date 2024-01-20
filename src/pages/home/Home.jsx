import "./Home.css";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocument.";
import PostDetails from "../../Components/PostDetails/PostDetails";

const Home = () => {

  const { documents: posts, loading } = useFetchDocuments("posts");

  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };


  return (
    <div className="home">
      <h1>Veja os posts mais recentes dos devs de todo o Brasil</h1>
      <form onSubmit={handleSubmit} className="search_form">
        <input
          type="text"
          placeholder="Ou busque por tags"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>

      <div>
        {loading && <p>Carregando...</p>}
        {posts && posts.map((post) => (
          <PostDetails post={post} key={post.id}/>
        ))}
        {posts && posts.length === 0 && (
          <div className="noposts">
            {" "}
            <p>Não foram encontrados posts</p>{" "}
            <Link to="/posts/create" className="btn">
              Criar primeiro post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
