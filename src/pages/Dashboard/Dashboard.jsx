import'./Dashboard.css'
import { useFetchDocuments } from '../../hooks/useFetchDocument.'
import { useAuthValue } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import { useDeleteDocument } from '../../hooks/useDeleteDocument'
const Dashboard = () => {

  const {user} = useAuthValue()

  const uid = user.uid;

  const { documents: posts } = useFetchDocuments("posts", null, uid);

  const { deleteDocument } = useDeleteDocument("posts");

  return (
    <div className='dashboard'>
      <h2>Dashboard</h2>
      <p>Gerencie os suas publicações</p>
      {posts && posts.length === 0 ? (
        <div className="noposts">
          <p>Não foram encontrados publicações</p>
          <Link to="/posts/create" className="btn">
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <div className="post_header">
          <span>Título</span>
          <span>Ações</span>
        </div>
      )}

{posts &&
        posts.map((post) => (
          <div className="post_row" key={post.id}>
            <p>{post.title}</p>
            <div className="actions">
              <Link to={`/posts/${post.id}`} className="btn btn-outline">
                Ver
              </Link>
              <Link to={`/posts/edit/${post.id}`} className="btn btn-outline">
                Editar
              </Link>
              <button
                onClick={() => deleteDocument(post.id)}
                className="btn btn-outline btn-danger"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Dashboard
