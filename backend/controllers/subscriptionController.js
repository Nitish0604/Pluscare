const Subscriber = require("../models/subscriptionModel");
const bcrypt = require("bcrypt");
const otpGenerator = require('otp-generator');
const jwt = require('jsonwebtoken');
const mailSender = require('../util/mailSender');
const {subscriptionEmail} = require("../mailTemplate/subscriptionEmail");

const subscription = async (req, res) => {
    try {
        const { guardianName, childName, dob, gender, email, contact, address, dist, state, pin } = req.body;

        const existingUser = await Subscriber.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User Already Exists",
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

        const user = await Subscriber.create({
            guardianName, childName, dob, gender, email, contact, address, dist, state, pin, password: hashPassword
        });

        const mail = await mailSender(email, "Greetings from PlusCare", subscriptionEmail(email,otp));

        return res.status(200).json({
            user: user,
            success: true,
            message: "User created successfully"
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "User registration failed, please try again",
        });
    }
}




const logIn = async(req,res) => {
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
            let token = jwt.sign(payload,process.env.JWT_SECRET); 
        
        user = user.toObject();
        user.token = token;
        user.password = undefined;

        const option = {
            expires: new Date(Date.now() + 3*24*60*60*1000),
            httpOnly:true,
        };
        
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


const getAllSubscriber = async(req,res) => {
    try{

        const Subscribers = await Subscriber.find()
        .populate("vaccines").exec();

        res.json({
            Subscribers,
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            error: "Error while fecthing post",
            
        });
    }
}

module.exports={ getAllSubscriber ,logIn , subscription}