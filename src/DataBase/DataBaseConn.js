const mongoose = require("mongoose");
const DataBase = async ()=>{
    try {
        const DBConnection = await mongoose.connect(process.env.DATABASE);
        console.log("BT connected successfully",DBConnection.connection.host);
    } catch (error) {
        console.log("failed");
    }
}
module.exports=DataBase;