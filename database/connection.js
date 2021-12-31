const mongoose=require('mongoose');

const url="mongodb+srv://urbanclone:swati123@urbanclap.39k5g.mongodb.net/urbanclapclone?retryWrites=true&w=majority";

mongoose.connect(url,{
    useNewUrlParser:true
}).then(()=>{
    console.log("db Successfully connected");
}).catch((e)=>{
    console.log("Db connection failed",e)
})