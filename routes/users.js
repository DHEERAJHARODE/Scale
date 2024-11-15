const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Dheeraj:Dheeraj2003@firstcluster.ykspvhd.mongodb.net/?retryWrites=true&w=majority&appName=Firstcluster");

const userschema=mongoose.Schema({
  name:String,
  company:String,
  email:String,
  description:String
})

module.exports=mongoose.model("ScaleTribe",userschema);