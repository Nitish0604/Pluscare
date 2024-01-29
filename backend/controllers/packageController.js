const Package = require("../models/packageModel");

exports.newPackage = async(req,res) => {
    try{
        const {packageName,packageDuration,packageAmount,description} = req.body;

        
        const package = new Package({
            packageName,packageDuration,packageAmount,description
        });

        const newPackage = await package.save();

        res.status(200).json({
            success:true,
            message:"Package Created succesfully"
        });
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            error: "Error while creating package",
            
        });
    }
}


exports.getAllPackage = async(req,res) => {
    try{

        const Packages = await Package.find();

        res.json({
            Packages,
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            error: "Error while fecthing packages",
            
        });
    }
}