const { postDataTable } = require("../model/registration");

const postDatacontroller = async(req,res)=>{
    const images=req.file.filename;
    const {name,lastname,email,Locality,address,State,Zip,phone,Gender,dob}= req.body;
    const temp = {name,lastname,email,Locality,address,State,Zip,phone,Gender,dob,images}
    console.log(temp)
    const data =await postDataTable(temp);

    res.send(data)
}
module.exports={postDatacontroller};