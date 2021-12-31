const express = require('express')
const userLoginModel=require('./models/userlogin')
const storeLoginModel=require('./models/storelogin')
const profileModel=require('./models/profile')
const registerModel=require('./models/register')
const serviceProviderModel=require('./models/serviceprovider')

const userRoute=require('./routers/userRoute');
const database=require('./database/connection')
const app = express();
const port = 4000;
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!') 
})
app.use("/user",userRoute);
app.listen(port, () => {
  console.log(`Urbanclap app running at http://localhost:${port}`)
})