const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({

    username:{
        type:String,
        required:true
    },

    room:{
        type:String,
        required:true
    },

    id:{
        type:String,
        required:true
    },

    _id:{
        type:String,
    }
});

module.exports=mongoose.model("UserModel",userSchema);