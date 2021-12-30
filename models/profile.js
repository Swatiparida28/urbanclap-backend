const mongoose=require("mongoose");

const profile=new mongoose.Schema({
  name:{
        type:String,
        required:true,
        
    },
mobileNumber:{
      type:String,
      required:true,
      unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
      }
})
const profileModel=new mongoose.model("userProfile",profile)
module.exports=profileModel;