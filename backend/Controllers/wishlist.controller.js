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
            wishlist.recipes.push(recipes);
        }

        await wishlist.save();
        res.status(201).json(wishlist);
    } catch (error) {
        res.status(500).json({"error":"error in the wishlist addtowishlist function"});
        console.log(error);
    }
}