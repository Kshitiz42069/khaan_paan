import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        require:true,
    },
    userName:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
        minlength: 6,
    }
})

const User = mongoose.model("User",userSchema);

export default User;