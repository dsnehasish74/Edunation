const tempUserModel=require("../models/TemporaryUserModel");

async function joinUser(id,room_id){

      try{
            const room = await tempUserModel.findById(room_id);

            if(room){
                  //room already present
                  let tempUserList = room.tempUserList;
                  // console.log(room.tempUserList);
                  tempUserList.push(id);
                  room.tempUserList = tempUserList;

                  await room.save();
            }
            else{
                  //room not present
                  const newRoom=new tempUserModel({
                        room_id:room_id,
                        tempUserList:[id],
                        _id:room_id
                  });

                  await newRoom.save();
            }
            
            console.log("User is added to tempUserList successfully !");           
      }
      catch(err){
            console.log("Error occured : "+err);
      }
}


async function getUser(id,room_id){
      try{
           const room = await tempUserModel.findById(room_id);
           const user = room.tempUserList.find(id);
           return user;
      }
      catch(err){
            console.log("Error occured : "+err);
      }
}

module.exports =  {joinUser,getUser};
