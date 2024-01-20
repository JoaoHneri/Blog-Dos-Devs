import "./Home.css";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocument.";
import PostDetails from "../../Components/PostDetails/PostDetails";

const Home = () => {
  const [search, setSearch] = useState("");
  const {documents: posts, loading} = useFetchDocuments("posts");

  const handleSubmit = (e) => {
    e.preventDefault()
  };

  return (
    <div className="home">
      <h1>Veja os posts mais recentes dos devs de todo o Brasil</h1>
      <form onSubmit={handleSubmit} className="search_form">
        <input
          type="text"
          placeholder="Ou busque por tags"
          onChange={(e) => setSearch(e.target.value)}
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
