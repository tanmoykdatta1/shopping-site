const UserModel = require("../models/user");
const { updateProduct } = require("./productController");
exports.create_user = async(req,res)=>{
try{
    const {name, address, phoneNumber, emailId, paymentMethod} = req.body;
let newUser = new UserModel({
    name,
    address,
    phoneNumber,
    emailId,
    paymentMethod,
});
newUser = await newUser.save();
res.status(200).json(newUser);
}catch(e){
    res.status(500).json({error:e.message});
}

};

exports.users = async(req,res)=>{
    try{
        const users = await UserModel.find({});
        res.status(200).json(users);
        }catch(error){
        res.status(500).json({error:error.message});
    }
    };

exports.singleUser= async(req,res)=>{
    try{
        const userId=req.params.id;
        const singleUser = await UserModel.findById(userId);
        if(!singleUser)
        {
        return res.status(404).json({message:`no such user found`});
        }
        res.status(200).json(singleUser);

    }catch(error){
        res.status(500).json({error:error.message});
}
};
exports.deleteUser = async(req,res)=>{
    try{
        const userId =req.params.id;
        await UserModel.findByIdAndRemove(userId);
        res.status(200).json({message:`user with id${userId} deleted successfully`});
    }catch(e){
        res.status(500).json({error:e.message});
    }
};

exports.updateUser =async(req,res)=>{
    try{
        const {name, address, phoneNumber, emailId, paymentMethod} = req.body;
        const userId =req.params.id;
        let updatedUser =  new UserModel({
            name,
            address,
            phoneNumber,
            emailId,
            paymentMethod,
            _id:userId,
        });
        await UserModel.findByIdAndUpdate(userId,updatedUser);
        res.status(200).json({message:`user with id${userId} updated successfully`});

    }catch(error){
        res.status(500).json({message:error.message});
            
    }
};



