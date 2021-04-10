const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({

    email:{
        type:String,
        required:true
    },

    roomList:{
        type:[]
    },

    _id:{
        type:String
    }
});

module.exports=mongoose.model("UserModel",userSchema);