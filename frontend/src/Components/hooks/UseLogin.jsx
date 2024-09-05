import { useState } from "react";
import {useAuthContext} from '../context/AuthContext'


function UseLogin() {
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const {setAuthUser} = useAuthContext();

    const login=async(username,password)=>{
        const success = handleInputErrors({username,password});
        if(!success){
            return;
        }
        setLoading(true);
        try {
            const res = await fetch("https://khaan-paan.onrender.com//api/auth/login",{
                method:"POST",
                credentials:"include",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({username,password})
            });
            const data = await res.json();

            if(data.error){
                throw new Error(data.error);
            }

            localStorage.setItem("user", JSON.stringify(data));
            setAuthUser(data);
        } catch (error) {
            setError(error.message);
        }finally{
            setLoading(false);
        }
    }
  return {loading,error,login};
}

export default UseLogin;
function handleInputErrors({username,password}){
    if(!username || !password ){
        console.log('please fill all the details');
        return false;
    }

    return true;

}