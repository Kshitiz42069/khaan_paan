import { Link } from "react-router-dom";


import { useEffect } from "react";
import { useWishlistContext } from "../../context/WishContext";
import { useFetchWishlist, useRemoveFromWishlist } from "../../hooks/UseWishlist";

function Wishlist() {
  const { wishlist } = useWishlistContext();
  const fetchWishlist = useFetchWishlist();
  const removeFromWishlist = useRemoveFromWishlist();

  useEffect(() => {
    fetchWishlist();
  }, [fetchWishlist]);

  if (!wishlist || wishlist.length === 0) return <p>No items in your wishlist</p>;

  return (
    <div className="py-[3rem] px-[4rem]">
      <p className="text-6xl DS underline underline-offset-8">Wishlist</p>
      <div className="py-[4rem] grid grid-cols-3 gap-[2rem]">
        {wishlist.map((recipe) => (
          <div key={recipe.id} className="card bg-base-100 w-96 shadow-xl hover:scale-105 transition-all ease-in-out duration-300">
            <Link to={`/recipe_detail/${recipe.id}`}>
              <figure>
                <img className="h-full w-full" src={recipe.image} alt={recipe.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{recipe.title}</h2>
              </div>
            </Link>
            <div className="card-actions justify-end p-4">
              <button 
                className="btn bg-red-600 text-white hover:bg-red-700" 
                onClick={() => removeFromWishlist(recipe.id)}
              >
                Remove from Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
