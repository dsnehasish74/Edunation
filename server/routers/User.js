const userModel=require("../models/UserModel");

async function joinUser(id,username,room){

      try{
            const newUser=new userModel({
                  username : username,
                  room : room,
                  id : id,
                  _id : id
            });

            await newUser.save();
            console.log("New user added successfully !");
            return newUser;
      }
      catch(err){
            console.log("Error occured : "+err);
      }
}


async function getUser(id){
      try{
           const user = await userModel.findById(id);
           return user;
      }
      catch(err){
            console.log("Error occured : "+err);
      }
}

module.exports =  {joinUser,getUser};
