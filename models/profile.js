const mongoose=require("mongoose");

const profile=new mongoose.Schema({
  name:{
        type:String,
    },
     mobileNumber:{
      type:String,
    },
    email:{
        type:String,
      },
    password:{
      type:String,
    },
   createdAt:{
     type:String
   },
   updatedAt:{
     type:String
   }

})
const profileModel=new mongoose.model("userprofile",profile)
module.exports=profileModel;