const express = require('express')
const userLoginModel=require('./models/userlogin')
const storeLoginModel=require('./models/storelogin')


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
  app.post("/storelogin",async(req,res)=>{
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})