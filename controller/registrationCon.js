const { postDataTable, ImgData } = require("../model/registration");

const postDatacontroller = async(req,res)=>{
    // const images=req.file.filename;
    const {name,lastname,email,Locality,address,State,Zip,phone,Gender,dob}= req.body;
    const temp = {name,lastname,email,Locality,address,State,Zip,phone,Gender,dob}
    console.log(temp)
    const data =await postDataTable(temp);

    res.send(data)
}
const postImage = async(req,res)=>{
    const images = req.file.filename;
    const tempImg = {images}
    const data =await ImgData(tempImg);
    res.send(data)

}
module.exports={postDatacontroller,postImage};