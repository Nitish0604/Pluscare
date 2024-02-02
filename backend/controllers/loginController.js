const Subscriber = require("../models/subscriberModel");
const Doctor = require("../models/doctorModel");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

const userLogIn = async(req,res) => {
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"plz fill all the blockes",
            });
        }

        let user = await Subscriber.findOne({email});
        if(!user){
            return res.status(401).json({
                success:false,
                message:"user is not registered",
            });
        }

        const payload = {
            email:user.email,
            id:user._id,
        };

        if(await bcrypt.compare(password,user.password)){
            let token = jwt.sign(payload,process.env.JWT_SECRET,{
                                    expiresIn:"30d",
                                }); 
        
        user = user.toObject();
        user.token = token;
        user.password = undefined;

        res.status(200).json({
            success:true,
            user,
            token,
            message:"login succesfull",
        });

        }
        else{
            res.status(403).json({
                success:false,
                messaage:"password Incorrect",
            });
        }

    } catch(err) {
        console.error(err);
        res.status(500).json({
            success:false,
            message:"login failed",
        });
    }
}


const doctorLogIn = async(req,res) => {
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"plz fill all the blockes",
            });
        }

        let doctor = await Doctor.findOne({email});
        if(!doctor){
            return res.status(401).json({
                success:false,
                message:"doctor is not registered",
            });
        }

        const payload = {
            email:doctor.email,
            id:doctor._id,
        };

        if(await bcrypt.compare(password,doctor.password)){
            let token = jwt.sign(payload,process.env.JWT_SECRET,{
                                    expiresIn:"30d",
                                }); 
        
        doctor = doctor.toObject();
        doctor.token = token;
        doctor.password = undefined;
        
        res.status(200).json({
            success:true,
            doctor,
            token,
            message:"login succesfull",
        });

        }
        else{
            res.status(403).json({
                success:false,
                messaage:"password Incorrect",
            });
        }

    } catch(err) {
        console.error(err);
        res.status(500).json({
            success:false,
            message:"login failed",
        });
    }
}


module.exports={userLogIn , doctorLogIn };