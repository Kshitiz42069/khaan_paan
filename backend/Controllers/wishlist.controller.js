import Wishlist from '../models/wishlist.js'

export const getWishlist = async(req,res)=>{
    try {
        const wishlist = await Wishlist.findOne({userId: req.userId});
        res.status(201).json(wishlist);
    } catch (error) {
        res.status(500).json({"error":"error in the wishlist getwishlist function"});
        console.log(error);
    }
}

export const addToWishlist = async(req,res) =>{
    try {
        const {recipes} = req.body;
        let wishlist = await Wishlist.findOne({userId:req.userId});

        if(!wishlist){
            wishlist = new Wishlist({userId:req.userId, recipes:[recipes]});
        }
        else{
            const existingRecipe = wishlist.recipes.find(r => r.id === recipes.id);
            if(existingRecipe){
                return res.status(400).json({error:"recipe already in the wishlist"});
            }
            wishlist.recipes.push(recipes);
        }

        await wishlist.save();
        res.status(201).json(wishlist);
    } catch (error) {
        res.status(500).json({"error":"error in the wishlist addtowishlist function"});
        console.log(error);
    }
}

export const removeWishlist = async(req,res)=>{
    try {
        const {recipeId} = req.body;
        let wishlist = await Wishlist.findOne({userId:req.userId});

        if(!wishlist){
            return res.status(404).json({error:"wihslist does not exist"});
        }
        wishlist.recipes = wishlist.recipes.filter(recipe => recipe.id !== recipeId);

        await wishlist.save();
        res.status(200).json(wishlist);
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"});
        console.log(error);
    }
}