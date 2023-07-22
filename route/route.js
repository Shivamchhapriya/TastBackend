

const express =  require('express');
const multer  = require('multer');
const { uploadsFile } = require('../multer');
const { postDatacontroller } = require('../controller/registrationCon');

const route = express.Router()


route.post("/postdata",uploadsFile,postDatacontroller)










module.exports=route