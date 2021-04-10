const mongoose=require("mongoose");

const roomSchema=new mongoose.Schema({

    admin:{
        type:String,
        required:true
    },

    userList:{
        type:[]
    },

    id:{
        type:String,
        required:true
    },

    _id:{
        type:String
    }
});

module.exports=mongoose.model("RoomModel",roomSchema);