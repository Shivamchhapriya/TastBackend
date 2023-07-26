

const express =  require('express');
const multer  = require('multer');
const { uploadsFile } = require('../multer');
const { postDatacontroller, postImage } = require('../controller/registrationCon');

const route = express.Router()


route.post("/postdata",postDatacontroller)
route.post("/postimg",uploadsFile,postImage)












module.exports=route
