import { useEffect, useState } from 'react';
import './Login.css';
import { useAuth } from '../../hooks/useAuth';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user);

    console.log(res);
  };

  useEffect(() => {
    console.log(authError);
    if (authError) {
      setError(authError);
    }
  }, [authError]);



  return (
    <div className='login'>
      <h1>Entrar</h1>
      <p>Aproveite o Mundo Dev! Torne-se um de nós!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email:</span>
          <input type="email" placeholder='Digite seu email' name='displayEmail' required value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" placeholder='Digite sua senha' name='displayPassword' required value={password} onChange={(e)=> setPassword(e.target.value)}/>
        </label>
       {!loading && <button className='btn'>Entrar</button>}
       {loading && <button className='btn' disabled>Aguarde...</button>}
        {error && <p className='error'> {error}</p>}
      </form>
    </div>
  )
}

export default Login
