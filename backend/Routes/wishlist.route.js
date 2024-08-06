import express from "express";
import protectRoute from "../middleware/ProtectedRoute.js";
import { addToWishlist, getWishlist } from "../Controllers/wishlist.controller.js";

const router = express.Router();

router.get('/wishlist',protectRoute,getWishlist);
router.post('/getlist',protectRoute,addToWishlist);

export default router;