const ProductModel = require("../models/product");
exports.createProduct = async (req, res)=> {
try{
    const {title, description, price, imgUrl} = req.body;
let newProduct = new ProductModel({
    // title:title;
    // description:description;
    // price:price;
    // imgUrl:imgUrl;

    title,
    description,
    price,
    imgUrl,
});
newProduct = await newProduct.save();
res.status(200).json(newProduct);

}catch(error){
    res.status(500).json({error:error.message});
}
};
exports.products = async(req,res)=>{
    try{
    const products = await ProductModel.find({});
    res.status(200).json(products);
    }catch(error){
    res.status(500).json({error:error.message});
}
};
exports.singleProduct = async (req, res)=>{
    
        try{
    const productId =req.params.id;
    const singleProduct =await ProductModel.findById(productId);
    if(!singleProduct){
        return res.status(404).json({ message:"no such product found"});
    }
    res.status(200).json(singleProduct);
        }catch(error){
    res.status(500).json({error:error.message});
    }
};
exports.deleteProduct = async (req,res)=>{
    try{
        const productId =req.params.id;
        await ProductModel.findByIdAndRemove(productId);
        res.status(200).json({message:`product with id ${productId} deleted successfully!`});
    }catch(error){
        res.status(500).json({error:error.message});
}
};
exports.updateProduct =async (req,res)=>{
    try{
        const {title, description, price, imgUrl} = req.body;
        const productId =req.params.id;
        let updatedProduct = new ProductModel({
            // title:title;
            // description:description;
            // price:price;
            // imgUrl:imgUrl;
        
            title,
            description,
            price,
            imgUrl,
            _id:productId,
        });
         await ProductModel.findByIdAndUpdate(productId,updatedProduct);
        res.status(200).json({message: `product with id ${productId}updated successfully`});
    }catch(error){
        res.status(500).json({error:error.message});
}
};

