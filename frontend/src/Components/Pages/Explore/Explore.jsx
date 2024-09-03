import { useState,useEffect } from "react";
import useSpoonacular from "../../hooks/UseRecipeFetch";
import { Link } from "react-router-dom";

function Explore() {
  const [query, setQuery] = useState("");
  const { recipes, loading, error, fetchRecipes, randomRecipe } = useSpoonacular();

  useEffect(() => {
    randomRecipe(); // Fetch random recipes on initial load
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchRecipes(query);
    }
  };

  return (
    <div className="bg-white py-[3rem] px-[6rem]">
        {/* search */}
        <div className="flex flex-col items-center justify-center">
            <form onSubmit={handleSearch} className="flex items-center justify-center w-[50rem]">
                <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a recipe..."
                className="input input-bordered w-full "
                />
                <button type="submit" className="btn bg-black text-white hover:text-black transition-all duration-300 ml-2">
                Search
                </button>
            </form>

            {loading && <span className='mt-[2rem] loading loading-spinner'></span>}
            {error && <p>Error: {error}</p>}

            <div className="pb-[2rem] pt-[4rem] grid grid-cols-3 gap-[2rem]">
                {recipes.map((recipe) => (
                  <Link key={recipe.id} to={`/recipe_detail/${recipe.id}`}>
                    <div className="card bg-base-100 w-[20rem] h-[20rem] shadow-xl hover:scale-105 transition-all ease-in-out duration-300">
                        <figure>
                        <img
                            className="h-full w-full"
                            src={recipe.image}
                            alt={recipe.title}
                        />
                        </figure>
                        <div className="card-body">
                        <h2 className="card-title">{recipe.title}</h2>
                        </div>
                    </div>
                </Link>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Explore;
