import { useEffect, useState } from "react";


const UseRecipeDetail = (id) =>  {
    const [loading ,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [recipe,setRecipe] = useState(null);
    const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;

    useEffect(()=>{
        const recipeDetail = async()=>{
            setLoading(true);
            setError(null);
            try {
                const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
                if(!res.ok){
                    throw new Error(error.message);
                }
                const data = await res.json();
                setRecipe(data);
            } catch (error) {
                setError(error.message);
            }finally{
                setLoading(false);
            }
        };

        if(id){
            recipeDetail();
        }
    },[id]);

  return {recipe,loading,error};
}

export default UseRecipeDetail;