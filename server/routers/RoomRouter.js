const express=require("express");
const router=express.Router();
const roomModel=require("../models/RoomModel");

router.get("/:room_id",async(req,res)=>{

      try{
      const room=await roomModel.findById(req.params.room_id);
      res.status(200).json({msg:"admin",admin:room.admin});

      }
      catch(err){
            res.status(403).json({msg:"Error occured ! "+err});
      }
});

router.post("/createroom",async (req,res)=>{
      try{
            // console.log(req.body);

           const newRoom=new roomModel({
                  admin: req.body.admin,
                  userList:[req.body.admin],          //---ERROR possible---//
                  id:req.body.id,
                  _id:req.body.id
           });

           await newRoom.save();
            res.status(200).json({msg:"Room created successfully!",roomId:req.body.id});

      }
      catch(err){
            res.status(403).json({msg:"Error occured ! "+err});
      }
});


module.exports=router;