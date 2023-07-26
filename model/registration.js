const mongoose = require("mongoose");


const dataModel = mongoose.Schema({
    name : {type:String, required: true},
    lastname : {type:String, required: true},
    email : {type:String, required: true},
    Locality : {type:String, required: true},
    address : {type:String, required: true},
    State : {type:String, required: true},
    Zip : {type:String, required: true},
    dob : {type:String, required: true},
    Gender : {type:String, required: true},
    phone : {type:String, required: true},
    dob : {type:String, required: true},
    // Image : {type:String, required: true},
},{strict:false})

const data = mongoose.model('taskData',dataModel);


const postDataTable = async(req)=>{
    try{
        
        const dt = await data.create(req);
        return{ dt:dt,status:200,message:'success'}

    }catch(error){
        return{ status:400,message:error.message}

    }
}

module.exports={postDataTable}
