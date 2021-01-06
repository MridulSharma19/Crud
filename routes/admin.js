const express = require('express')
const Admin = require('../models/admin')
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.KEY);
const router = express.Router()
const bcrypt=require('bcryptjs')

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
        bcrypt.compare(password, user.password).then(isMatch => {
          if (isMatch) {
              res.status(200).json('success')
          }else{
              res.status(401).json('Failed')
          }
      })
      }
        

})
})
router.get('/login',async(req,res)=>{
    const a= await Admin.find()
    res.json(a)
})

module.exports=router
