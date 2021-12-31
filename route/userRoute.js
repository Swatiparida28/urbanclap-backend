const express =require('express');
const userController=require('../controllers/userController');
const router=express.Router();

router.post('/register',userController.USER_REGISTRATION);
router.post('/login',userController.USER_LOGIN)
router.post('/updateprofile/:id',userController.USER_UPDATE_PROFILE)

module.exports=router;