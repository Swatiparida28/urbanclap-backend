const express = require('express')
const userLoginModel=require('./models/userlogin')
const storeLoginModel=require('./models/storelogin')
const profileModel=require('./models/profile')
const registerModel=require('./models/register')
const serviceProviderModel=require('./models/serviceprovider')


const database=require('./database/connection')
const app = express();
const port = 4000;
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/userlogin",async(req,res)=>{
    try{
       const login=new userLoginModel(req.body)
       const response=await login.save()
       res.send({
        code:200,
        result:response
       })
    }catch(e){
       res.send(e)
    }
  })


  app.post("/userRegister",async(req,res)=>{
    try{
       const login=new registerModel(req.body)
       const response=await login.save()
       res.send({
        code:200,
        result:response
       })
    }catch(e){
       res.send(e)
    }
  })

  app.post("/storeLogin",async(req,res)=>{
    try{
       const login=new storeLoginModel(req.body)
       const response=await login.save()
       res.send({
        code:200,
        result:response
       })
    }catch(e){
       res.send(e)
    }
  })

  app.post("/userProfile",async(req,res)=>{
    try{
       const login=new profileModel(req.body)
       const response=await login.save()
       res.send({
        code:200,
        result:response
       })
    }catch(e){
       res.send(e)
    }
  })

  app.post("/serviceprovider",async(req,res)=>{
    try{
       const login=new serviceProviderModel(req.body)
       const response=await login.save()
       res.send({
        code:200,
        result:response
       })
    }catch(e){
       res.send(e)
    }
  })

  


app.listen(port, () => {
  console.log(` Urbanclap app running at http://localhost:${port}`)
})