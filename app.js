const express = require("express");
const mongoose = require("mongoose");
const Router = require('./route/route');
require("dotenv").config({path:"./config.env"})

var cors = require('cors')
var app = express()
app.use(cors({origin:'*'}))
//  mongoose.connect(process.env.DB_URL);



var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

 mongoose
 .connect('mongodb+srv://yashwantDollop:heftpass@cluster0.nffj03j.mongodb.net/HEFT')
 .then(() => console.log("DB connection successful!"))
 .catch((error) => console.log(error));


 

Router.use(express.json())

const PORT =process.env.PORT || 9000;
app.use(Router)


Router.use('/uploadFiles', express.static('uploadFiles'));

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})
