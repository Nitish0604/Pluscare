const Doctor = require("../models/doctorModel");
const bcrypt = require("bcrypt");
const otpGenerator = require('otp-generator');
const mailSender = require('../util/mailSender');
const {doctorSignUpEmail} = require("../mailTemplate/doctorSignUpEmail");

exports.newDoctor = async(req,res) => {
    try{
        const {name,email,contact,qualification,gender,address,description} = req.body;

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
            name,email,contact,qualification,gender,address,description,password:hashPassword
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