const express = require("express");
const cors=require("cors");
const env = require("dotenv").config();
const mongooseModel=require("./src/Module/Schema.js");
const DataBase = require("./src/DataBase/DataBaseConn.js");
const app=express();
DataBase();
app.use(cors({
    "origin":"*"
}))
const port=process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/vendorReceived",async(req,res)=>{
try{
    const data = await mongooseModel.find();
    res.json(data);
}catch(err){
    res.json(err);
}
});
app.post("/vendorsend",async(req,res)=>{
    var vendorData=req.body;
    try{
        await mongooseModel.create(vendorData);
        res.status(201).json({"message":"Successfully Create"});
    }catch(err){
        res.json(err);
    }
    });
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })