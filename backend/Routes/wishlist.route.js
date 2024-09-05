import express from "express";
import protectRoute from "../middleware/ProtectedRoute.js";
import { addToWishlist, getWishlist, removeWishlist } from "../Controllers/wishlist.controller.js";

const router = express.Router();

router.get('/wishlist',protectRoute,getWishlist);
router.post('/getlist',protectRoute,addToWishlist);
router.delete('/wishlist',protectRoute,removeWishlist);

export default router;