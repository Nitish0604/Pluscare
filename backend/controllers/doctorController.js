const Doctor = require("../models/doctorModel");
const bcrypt = require("bcrypt");
const otpGenerator = require('otp-generator');
const mailSender = require('../util/mailSender');
const {doctorSignUpEmail} = require("../mailTemplate/doctorSignUpEmail");

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

        
        const doctor = new Doctor({
            name,email,phoneNo,qualification,gender,yearsOfExperience,address,description,password:hashPassword
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
