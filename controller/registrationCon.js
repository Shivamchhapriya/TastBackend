const { postDataTable } = require("../model/registration");

const postDatacontroller = async(req,res)=>{
    const dts = req.body;
    const data =await postDataTable(dts);

    res.send(data)
}
module.exports={postDatacontroller};