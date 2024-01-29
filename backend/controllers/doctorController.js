const Doctor = require("../models/doctorModel");

exports.newDoctor = async(req,res) => {
    try{
        const {name,email,contact,qualification,gender,address,description} = req.body;

        
        const doctor = new Doctor({
            name,email,contact,qualification,gender,address,description,password:hashPassword
        });

        const newDoctor = await doctor.save();

        res.status(200).json({
            success:true,
            message:"doctor info send succesfully"
        });
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            error: "Error while sending doctor info",
            
        });
    }
}


exports.getAllDoctor = async(req,res) => {
    try{

        const Doctors = await Doctor.find();

        res.json({
            Doctors,
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            error: "Error while fecthing post",
            
        });
    }
}