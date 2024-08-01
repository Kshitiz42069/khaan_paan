import User from '../models/user.js';
import bcrypt from 'bcrypt';
import generateToken from '../utils/generateToken.js';

export const signup = async(req,res)=>{
    try {
        const {fullName, userName, password, confirmPassword} = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({message:"password does not match"});
        }

        const user = await User.findOne({userName});

        if(user){
            return res.status(400).json({message:"user already exists"});
        }
        //hashed password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
            fullName,
            userName,
            password:hashedPassword,
        });

        if(newUser){
            generateToken(newUser._id,res);
            await newUser.save();
            res.status(200).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.userName,
            })
        }
        else{
            res.status(400).json({error:"invalid user data"});
        }
    } catch (error) {
        res.status(500).json({error:"internal server error"});
        console.log(error);
    }
}
export const login = async(req,res)=>{
    try {
        const {userName,password} = req.body;
        const user = await User.findOne({userName});

        const isPassword = await bcrypt.compare(password,user?.password || "");

        if(!user || !isPassword){
            return res.status(400).json({error:"Invalid Credentials"})
        }

        generateToken(user._id,res);

        res.status(200).json({
            _id:user._id,
            username:user.userName,
            fullname:user.fullName
        });
    } catch (error) {
        res.status(500).json({error:'invalid error in login'});
        console.log(error)
    }
}
export const logout = async(req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"logout successful"})
    } catch (error) {
        res.status(500).json({error:'error in logout'});
        console.log(error);
    }
}