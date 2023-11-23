

import './App.css'
import Router from './routes/Routes';
import { AuthProvider } from './context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { useAuth } from './hooks/useAuth';


function App() {
const [user, setUser] = useState(undefined);
const {auth} = useAuth();
const loadingUser = user === undefined;


useEffect(()=>{
  onAuthStateChanged(auth, (user)=>{
    setUser(user);
  });
},[auth]);

if(loadingUser){
  return <p>carregando...</p>
}



  return (
    <>

       <div>
        <AuthProvider value={{user}}>
          <Router/>
        </AuthProvider>
       </div>

    </>
  )
}

export default App
