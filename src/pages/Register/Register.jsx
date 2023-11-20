import { useAuth } from '../../hooks/useAuth.jsx';
import './Register.css';
import { useState, useEffect } from 'react';

const Register = () => {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const {createUser, error: authError, loading} = useAuth();

    const handleSubmit = async (e) => {
      e.preventDefault();

      if(password !== confirmPassword){
       setError("As senhas precisam ser iguais!");
       return; 
      }
      setError("");
      const User = {
        displayName, email, password
      }

      const res = await createUser(User);

      console.log(res);
    }

    useEffect(()=>{
      if(authError){
        setError(authError)
      }
    }, [authError])

  return (
    <div className='register'>
      <h1>Cadastre-se</h1>
      <p>Crie seu usuário e compartilhe suas experiências como Devs</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input type="text" placeholder='Digite seu nome' name='displayName' required value={displayName} onChange={(e)=> setDisplayName(e.target.value)}/>
        </label>
        <label>
          <span>Email:</span>
          <input type="email" placeholder='Digite seu email' name='displayEmail' required value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" placeholder='Digite sua senha' name='displayPassword' required value={password} onChange={(e)=> setPassword(e.target.value)}/>
        </label>
        <label>
          <span>Confirmação de Senha:</span>
          <input type="password" placeholder='Confirme sua senha' name='confirmPassword' required value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
        </label>
       {!loading && <button className='btn'>Cadastrar</button>}
       {loading && <button className='btn' disabled>Aguarde...</button>}
        {error && <p className='error'> {error}</p>}
      </form>
    </div>
  )
}

export default Register
