import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';

function UseLogout() {
    const [loading,setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const logout = async()=>{
        setLoading(true);
        try {
            const res = await fetch('https://khaan-paan.onrender.com/api/auth/logout',{
                method:"POST",
                headers:{"content-type":"application/json"}
            });
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            setAuthUser(null);
            localStorage.removeItem("user");
        } catch (error) {
            console.log("error in the use logout function",error.message);
        }finally{
            setLoading(false);
        }
    }
  return {loading,logout};
}

export default UseLogout