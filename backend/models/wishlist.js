import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true }
});

const wishlistSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    recipes:[recipeSchema]
});

const Wishlist = mongoose.model('Wishlist',wishlistSchema);
export default Wishlist;