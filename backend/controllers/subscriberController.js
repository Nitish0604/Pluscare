const Subscriber = require("../models/subscriberModel");
const bcrypt = require("bcrypt");
const otpGenerator = require('otp-generator');
const mailSender = require('../util/mailSender');
const { subscriptionEmail } = require("../mailTemplate/subscriptionEmail");
const Vaccine = require("../models/vaccineModel")
const newSubscriber = async (req, res) => {
    try {
        const { guardianName, childName, dob, gender, email, contact, address, dist, state, pin } = req.body;
        const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
        console.log(otp)

        let hashPassword = otp; // Default to OTP
        hashPassword = await bcrypt.hash(otp, 10);

        const user = await Subscriber.create({
            guardianName: guardianName, childName, dob, gender, email, contact, address, dist, state, pin, password: hashPassword
        });

        const mail = await mailSender(email, "Greetings from PlusCare", subscriptionEmail(email, otp));

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


const getSubscriberById = async(req,res) => {
    try{
        const {id} = req.params;
        const val = await Subscriber.findById({_id : id})
        .populate(
            {
                path: "vaccines",
                populate: {
                    path: "doctor",
                    select: '_id name',
                },
            }
        ).exec();

        if(!val){
            res.status(404)
            .json({
                seccess:false,
                message:"Subscriber not found"
            });
        }
        else{
            res.status(200)
            .json({
                success:true,
                data:val,
                message:"Subscriber data fetched by id"
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

const getAllSubscriber = async (req, res) => {
    try {

        const Subscribers = await Subscriber.find()
            .populate(
                {
                    path: "vaccines",
                    populate: {
                        path: "doctor",
                        select: '_id name',
                    },
                }
            ).exec();

        res.json({
            Subscribers,
        })
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({
            error: "Error while fecthing post",

        });
    }
}

module.exports = { getAllSubscriber,getSubscriberById,newSubscriber };