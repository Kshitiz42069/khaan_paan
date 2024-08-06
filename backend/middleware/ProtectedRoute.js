import jwt from "jsonwebtoken";

const protectRoute = async(req,res,next)=>{
    
    try {
        const token = req.cookies.jwt;
        if (!token) return res.status(401).send({ message: 'Access denied' });
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.log("error in the protected route",error);
        res.status(500).json({error:"Internal system error"});
    }
}

export default protectRoute;