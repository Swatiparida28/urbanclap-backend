const mongoose=require("mongoose");

const registerCredentials=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
      type:String,
      required:true
    }
})
const registerModel=new mongoose.model("UserRegister",registerCredentials)
module.exports=registerModel;