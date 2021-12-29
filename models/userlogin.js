const mongoose=require("mongoose");

const userCredentials=new mongoose.Schema({
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
const userLoginModel=new mongoose.model("userCredentials",userCredentials)
module.exports=userLoginModel;