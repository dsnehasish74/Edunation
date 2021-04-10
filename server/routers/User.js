const userModel=require("../models/UserModel");
const roomModel=require("../models/RoomModel");

async function joinUser(id,email,room_id){

      try{
            const room = await roomModel.findById(room_id);
            let userList = room.usersList;
            userList.push(email);
            room.userList = userList;

            await room.save();
            console.log("User joined successfully in the room!");

            const user = await userModel.findById(email);
            let roomList = user.roomList;
            roomList.push(room_id);
            user.roomList = roomList;

            await user.save();
            console.log("Room is added successfully to userModel !");           
      }
      catch(err){
            console.log("Error occured : "+err);
      }

      try{
            const newUser=new userModel({
                  email : email,
                  room : room,
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
