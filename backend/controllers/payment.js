// //const {instance} = require("../config/razorpay");
// const Package = require("../models/packageModel");
// const Subscriber = require("../models/subscriberModel");
// const mailSender = require("../util/mailSender");
// const Razorpay = require("razorpay")


// const razorpay = new Razorpay({
//     key_id: "rzp_test_j3uMC3pJNVXJpR",
//     key_secret: "iVdd7vf9Qopo1TKflmLWF8Ue",
//   });
  
// exports.capturePayment = async(req,res) => {
//     //get packageId and userId 
//     const {package_id,userId} = req.body;
//     //const userId = req.user.id;
//     //validation
//     //valid package id
//     if(!package_id){
//         return res.json({
//             success: false,
//             message: "please provide valid package Id",
//         })
//     }
//     //valid package detail
//     let package;
//     try{
//         package = await Package.findById(package_id);
//         if(!package){
//             return res.json({
//                 success: false,
//                 message: "Package not found",
//             })
//         }

//         //user already pay for package
//         const uid = new mongoose.Types.ObjectId(userId);
//         if(package.buyerId.includes(uid)){
//             return res.status(200).json({
//                 success: false,
//                 message: "user is already buy this package",
//             });
//         }
//     }
//     catch(err){
//         console.log(err);
//         return res.status(500).json({
//             success: false,
//             message: err.massage,
//         });
//     }

//     //order create
//     const amount = 50000;
//     const currency = "INR";

//     const options = {
//         amount : amount * 100,
//         currency,
//         reciept: Math.random(Date.now()).toString(),
//         notes: {
//             packageId: package_id,
//             userId,
//         }
//     };

//     try{
       
//         const paymantResponse = await razorpay.orders.create(options);
//         console.log(paymentResponse);
//         return res.status(200).json({
//              success: true,
//              packageName: package.packageName,
//              packageDescription: package.description,
//              orderId: paymentResponse.id,
//              currency: paymentResponse.currency,
//              amount: paymentResponse.amount, 
//         });
//     }
//     catch(err){
//         console.log(err);
//         return res.status(500).json({
//             success: false,
//             message: "Could not initiate order",
//         });
//     }
// };


// //verify Signature of Razorpay and server

// exports.verifySignature = async (req,res) => {
//     const webhookSecret = "12345678";

//     const signature = req.headers("x-razorpay-signature");

//     crypto.createHmac("sha256",webhookSecret);
//     shasum.update(JSON.stringify(req.body));
//     const digest = shasum.digest("hex");

//     if(signature === digest){
//         console.log("Payment is Authorised");

//         const {packageId,userId} = req.body.payload.payment.entity.notes;

//         try{
//             //find the package & give the access of user
//             const buyedPackage = await Package.findOneAndUpdate(
//                                         {_id: packageId},
//                                         {$push: {buyerId: userId}},
//                                         {new: true},
//             );

//             if(!buyedPackage){
//                 return res.status(500).json({
//                     success:false,
//                     message: "Package not found",
//                 });
//             }
//             console.log(buyedPackage);

//             //find the user & add the package
//             const buyerUser = await Subscriber.findOneAndUpdate(
//                                     {_id: userId},
//                                     {$push: {packages: packageId}},
//                                     {new: true},
// );

//             if(!buyerUser){
//             return res.status(500).json({
//             success:false,
//             message: "Package not found",
//             });
//             }
//             console.log(buyerUser);

//             //mail send krna h  
//             const emailResponse = await mailSender(
//                         buyerUser.email,
//                         "Congratulations from PlusCare",
//                         "Congratulations,you are now member of plusCare",
//             );

//             console.log(emailResponse);
//             return res.status(200).json({
//             success: true,
//             message: "Signature Verified and Package Added",
//             });
                
//         }
//         catch(err){
//             return res.status(500).json({
//                 success:false,
//                 message: err.message,
//             });
//         }
//     }
//     else{
//         return res.status(400).json({
//             success:false,
//             message: "Invalid request",
//         });
//     }

// };


// const expressAsyncHandler = require("express-async-handler");
const shortid = require("shortid");
const Razorpay = require("razorpay");
const crypto = require("crypto");
// const PaymentModel = require("../models/paymentSchema");
// const Payment = require("../models/")

const razorpay = new Razorpay({
  key_id: "rzp_test_j3uMC3pJNVXJpR",
  key_secret: "iVdd7vf9Qopo1TKflmLWF8Ue",
});
// @desc : register new user
// @route: POST /users/register
// @access: public
const verifySignature = async (req, res) => {
  // do a validation
  const secret = "12345678";
  console.log(req.body);
  const shasum = crypto.createHmac("sha256", secret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest("hex");
  console.log(digest, req.headers["x-razorpay-signature"]);
  if (digest === req.headers["x-razorpay-signature"]) {
    console.log("request is legit");
    // process it
    require("fs").writeFileSync(
      "payment1.json",
      JSON.stringify(req.body, null, 4)
    );
    // try {
    //   const payment = await PaymentModel.create({
    //     tutor_id: tid,
    //     payment_id: razorpay_id,
    //     student_id: sid,
    //     service_used: service,
    //     amount: amount,
    //   });
    //   res
    //     .status(201)
    //     .json({ message: "Payment created successfully", payment });
    // } catch (error) {
    //   res.status(500).json({ error: error.message });
    // }
  } 
  else {
    // res.status(500).json({ error: error.message });
  }
  res.json({ status: "ok" });
};

const capturePayment = async (req, res) => {
  const payment_capture = 1;
  const amount = 499;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };
  try {
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
    capturePayment,
    verifySignature,
};


