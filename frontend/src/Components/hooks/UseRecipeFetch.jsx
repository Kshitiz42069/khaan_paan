import { useState } from 'react';

const useSpoonacular = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;

  const fetchRecipes = async (query) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }
      const data = await response.json();
      setRecipes(data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const randomRecipe = async()=>{
    setLoading(true);
    setError(null);
    try {
      const res= await fetch(`https://api.spoonacular.com/recipes/random?number=9&excludingIngredients=beef&apiKey=${apiKey}`);
      if(!res.ok){
        throw new Error('failed to fetch reciepes');
      }
      const data = await res.json();
      setRecipes(data.recipes);
    } catch (error) {
      setError(error.message);
    }finally{
      setLoading(false);
    }
  }

  return { recipes, loading, error, fetchRecipes, randomRecipe };
};

export default useSpoonacular;
