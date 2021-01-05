const express = require('express')
const Info = require('../models/Info')
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.KEY);
const router = express.Router()

router.get('/info',async(req,res)=>{
    try{
        const a = await Info.find()
        var b=[]
        await a.map(async(item)=>{
            var i=item
            var decryptedString = await cryptr.decrypt(item.adhaar);
            i.adhaar=decryptedString
            b.push(i)
            
        })
        
        res.json(b) 
    }catch(error){
        res.json(500)
    }
})

router.post('/info',async(req,res)=>{
    try{
        const newInfo = new Info({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            address:req.body.address,
            adhaar:req.body.adhaar,
            mobileNumber:req.body.mobileNumber
        })
        
        const encryptedString = await cryptr.encrypt(newInfo.adhaar);
        // Info.findOne({adhaar:encryptedString}).then(async(info1)=>{
        //     if(info1){
        //         error="Aadhaar already exists"
        //         return res.status(400).json(error)
        //     }else{
                newInfo.adhaar=encryptedString
        
                const a= await newInfo.save()
                res.json(a)}catch(error){
        res.status(500)
    }
})

module.exports=router