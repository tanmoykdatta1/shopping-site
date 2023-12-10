const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name:{type:String, required:true},
    address:{type:String, required:true},
    phoneNumber:{type:Number, required:true},
    emailId:{type:String},
    paymentMethod:{type:String, required:true},

});
const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;


