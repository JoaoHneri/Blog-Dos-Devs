import {db} from "../firebase/config"

import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut} from "firebase/auth"

import { useState, useEffect } from "react"

export const useAuth = () =>{
    const[error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    function checkIfIsCancelled(){
        if(cancelled){
            return;
        }
    }

    const createUser = async (data) => {
        checkIfIsCancelled()
        setError("")
        setLoading(true);
        try {
            const {user} = await createUserWithEmailAndPassword(
                auth, data.email, data.password)
            await updateProfile(user, {
                displayName: data.displayName
            })
            setLoading(false);
            return user;
        } catch (error) {
            console.log(error.message);
            console.log(typeof error.message);

            let systemErrorMessage = "";
            if(error.message.includes("Password")){
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres" ;  
            }else if(error.message.includes("email-already")){
                systemErrorMessage = "O email já está sendo utilizado por outra conta";
            }else{
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde"
            }

            setError(systemErrorMessage)
        }
        setLoading(false);
        
    }

    useEffect(()=>{
        return () => setCancelled(true);
    }, [])

    return{
        auth, createUser, error, loading
    }

    
}