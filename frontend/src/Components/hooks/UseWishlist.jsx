// src/hooks/useWishlist.js

import { useWishlistContext } from "../context/WishContext";


export const useFetchWishlist = () => {
    const { setWishlist } = useWishlistContext();

    const fetchWishlist = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/wishlist', {
                method: 'GET',
                credentials:"include",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            const data = await response.json();
            setWishlist(data.recipes || []);
        } catch (error) {
            console.error('Failed to fetch wishlist', error);
        }
    };

    return fetchWishlist;
};

export const useAddToWishlist = () => {
    const { setWishlist } = useWishlistContext();

    const addToWishlist = async (recipe) => {
        try {
            const response = await fetch('http://localhost:8000/api/getlist', {
                method: 'POST',
                credentials:"include",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ recipes: recipe }),
            });
            const data = await response.json();
            setWishlist(data.recipes || []);
        } catch (error) {
            console.error('Failed to add to wishlist', error);
        }
    };

    return addToWishlist;
};

export const useRemoveFromWishlist = () => {
    const { setWishlist } = useWishlistContext();

    const removeFromWishlist = async (recipeId) => {
        try {
            const response = await fetch('http://localhost:8000/api/wishlist', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify({ recipeId }),
            });
            const data = await response.json();
            setWishlist(data.recipes || []);
        } catch (error) {
            console.error('Failed to remove from wishlist', error);
        }
    };

    return removeFromWishlist;
};
