import { useParams } from "react-router-dom"
import UseRecipeDetail from '../../hooks/UseRecipeDetail'
import { useAddToWishlist } from "../../hooks/UseWishlist";


const RecipeDetail = () => {
  const {id} = useParams();
  const {recipe,loading,error} = UseRecipeDetail(id);
  const addToWishlist = useAddToWishlist();

  const handleAddToWishlist = () => {
    addToWishlist(recipe);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!recipe) return <p>No recipe found</p>;
  return (
    <div className="py-[3rem] px-[3rem]">
      <div className="flex gap-[4rem]">
        {/* img */}
        <div className="w-1/2">
          <img className="rounded-2xl w-[40rem] h-[30rem]" src={recipe.image} alt={recipe.title} />
        </div>
        {/* short description */}
        <div className="w-1/2 py-[2rem] flex flex-col gap-2">
          <p className="text-5xl DS">{recipe.title}</p>
          <p className="text-xl font-semibold mt-[2rem]">Servings: {recipe.servings}</p>
          <p className="text-xl font-semibold">Ready In: {recipe.readyInMinutes} Minutes</p>
          <p className="text-xl font-semibold">Cooking Time: Cooking Time: {recipe.cookingMinutes || 'N/A'} Minutes</p>
          <p className="text-xl font-semibold">Preparation Time: {recipe.preparationMinutes || 'N/A'} Minutes</p>
          <div className="grid grid-cols-5 gap-2 my-3 text-center">
          {recipe.dishTypes.map((type) => (
              <p key={type} className="text-sm border-2 px-2 py-1 rounded-xl border-black">{type}</p>
            ))}
          </div>
          {/* add to cart button */}
          <div>
            <button onClick={handleAddToWishlist} className="btn bg-black text-white hover:text-black">Add To Wishlist</button>
          </div>
        </div>
      </div>
      {/* steps */}
      <div className="mt-[3rem]">
        <h3 className="text-3xl font-semibold mb-4">Instructions</h3>
        <ol className="list-decimal pl-5">
          {recipe.analyzedInstructions[0]?.steps.map((step, index) => (
            <li key={index} className="mb-4 text-xl">
              {step.step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default RecipeDetail