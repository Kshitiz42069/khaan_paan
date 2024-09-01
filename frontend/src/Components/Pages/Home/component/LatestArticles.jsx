import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


function LatestArticles() {
    const [recipes,setRecipes] = useState([]);
    const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
    console.log(apiKey);

    useEffect(()=>{
        const fetchRecipe = async()=>{
            try {
                const res = await fetch(`https://api.spoonacular.com/recipes/random?number=6&excludingIngredients=beef&apiKey=${apiKey}`);
                const data = await res.json();
                setRecipes(data.recipes);
            } catch (error) {
                console.log("Error fetching he recipe",error);
            }
        };
        fetchRecipe();
    },[apiKey])
  return (
    <div className="bg-white pt-[6rem] px-[6rem]">
        <p className="text-6xl DS underline underline-offset-8">Recommended Recipes</p>
        <div className="py-[4rem] grid grid-cols-3 gap-[2rem]">
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipe_detail/${recipe.id}`}>
            <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 transition-all ease-in-out duration-300">
              <figure>
                <img className="h-full w-full" src={recipe.image} alt={recipe.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{recipe.title}</h2>
                <p>{recipe.summary.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 100)}...</p>
              </div>
            </div>
          </Link>
        ))}
        </div>
    </div>
  )
}

export default LatestArticles