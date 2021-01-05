const express = require('express')
const Admin = require('../models/admin')
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.KEY);
const router = express.Router()

router.post('/login', (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
  
    // Find user by email
    Admin.findOne({ email }).then(user => {
      // Check for user
      if (!user) {
        errors.email = 'User not found';
        return res.status(404).json(errors);
      }else{
          if (password==user.password){
            return res.status(200).json("success")
        }else {
            errors.password = 'Password incorrect';
            return res.status(400).json(errors);
          }
      }
        

})
})
router.get('/login',async(req,res)=>{
    const a= await Admin.find()
    res.json(a)
})

module.exports=router
