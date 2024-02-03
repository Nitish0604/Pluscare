const Doctor = require("../models/doctorModel");
const bcrypt = require("bcrypt");
const otpGenerator = require('otp-generator');
const mailSender = require('../util/mailSender');
const {doctorSignUpEmail} = require("../mailTemplate/doctorSignUpEmail");
const {doctorVerifiedEmail} = require("../mailTemplate/doctorVerifiedEmail");

exports.newDoctor = async(req,res) => {
    try{
        const {name,email,phoneNo,yearsOfExperience,qualification,gender,address,description} = req.body;

        const existingDoctor = await Doctor.findOne({ email });
        if (existingDoctor) {
            return res.status(400).json({
                success: false,
                message: "Docotor Already Exists",
            });
        }

        
        const doctor = new Doctor({
            name,email,phoneNo,qualification,gender,yearsOfExperience,address,description

        });

        const newDoctor = await doctor.save();
        const mail = await mailSender(email, "Greetings from PlusCare", doctorSignUpEmail());

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


exports.getDoctorById = async(req,res) => {
    try{
        const {id} = req.params;
        const val = await Doctor.findById({_id : id})
        
        if(!val){
            res.status(404)
            .json({
                seccess:false,
                message:"Doctor not found"
            });
        }
        else{
            res.status(200)
            .json({
                success:true,
                data:val,
                message:"Doctor data fetched by id"
            });
        }
    }
    catch(err){
        console.error(err),
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
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


exports.delDocById = async(req,res) => {
    try{
        const {id} = req.params;
        await Doctor.findByIdAndDelete(id);
        res.json({
            success:true,
            message:"Doctor data remove successfully"
        });
    }
    catch(err){
        console.error(err),
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}


exports.doctorVerifiedMail = async (req,res) => {
    try{
        const id = req.params.id;
        const doctorDetails = await Doctor.findById(id);
        if(!doctorDetails){
            res.status(404)
            .json({
                seccess:false,
                message:"Doctor not found"
            });
        }
        console.log(doctorDetails);

        const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
        console.log(otp)

        let hashPassword = otp; // Default to OTP
        try {
            hashPassword = await bcrypt.hash(otp, 10);
        } catch (err) {
            console.error(err);
            return res.status(500).json({
                success: false,
                message: "Hashing password encountered an issue",
            });
        }

        const UpdateDoctor = await Doctor.findByIdAndUpdate(id,{password:hashPassword},{new:true});

        const mail = await mailSender(doctorDetails.email, 
                                    "Greetings from PlusCare", 
                                    doctorVerifiedEmail(doctorDetails.email,otp));
        
        res.json({
            success:true,
            message:"Doctor verified successfully"
        });
    }
    catch(err){
        console.error(err),
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        });
    }
}
