import './CreatePost.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useAuthValue} from '../../context/AuthContext'

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formErrorm, setError] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    <div className='create_post'>
      <h1>Criar nova publicação</h1>
      <p>Compartilhe com seus amigos as novidades de sua jornada como Dev</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Titulo: </span>
          <input type="text" name='title' required placeholder='Digite seu titulo' onChange={(e)=> setTitle(e.target.value)} value={title}/>
        </label>
        <label>
          <span>Imagem (URL): </span>
          <input type="text" name='title' required placeholder='Insira a URL de uma imagem' onChange={(e)=> setImage(e.target.value)} value={image}/>
        </label>
        <label>
          <span>Conteúdo: </span>
          <textarea type="text" name='body' required placeholder='digite o que deseja compartilhar' onChange={(e)=> setBody(e.target.value)} value={body}/>
        </label>
        <label>
          <span>Tags: </span>
          <textarea type="text" name='tags' required placeholder='digite as Tags de sua publicação. (Separadas por vírgulas)' onChange={(e)=> setTags(e.target.value)} value={tags}/>
        </label>
        <button className='btn'>Cadastrar</button>
        {/* {!loading && }
       {loading && <button className='btn' disabled>Aguarde...</button>}
        {error && <p className='error'> {error}</p>} */}
      </form>
    </div>
  )
}

export default CreatePost
