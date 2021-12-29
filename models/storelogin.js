const mongoose=require("mongoose");

const storeCredentials=new mongoose.Schema({
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
const storeLoginModel=new mongoose.model("storeCredentials",storeCredentials)
module.exports=storeLoginModel;