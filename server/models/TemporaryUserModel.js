const mongoose=require("mongoose");

const tempUserSchema=new mongoose.Schema({

      room_id:{
            type:String,
            required:true
      },

    tempUserList:{
        type:[]
    },

    _id:{
        type:String
    }
});

module.exports=mongoose.model("TempUserModel",tempUserSchema);