

const express =  require('express');
const multer  = require('multer');
const { uploadsFile } = require('../multer');
const { postDatacontroller } = require('../controller/registrationCon');

const route = express.Router()


route.post("/postdata",postDatacontroller)
route.get("/getdata",(req,res)=>{
    res.send("Api Working")
})











module.exports=route
