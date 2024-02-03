const express = require("express");
const router = express.Router();

const {auth} = require("../middleWare/auth");
const {newSubscriber,getSubscriberById,getAllSubscriber} = require("../controllers/subscriberController");
const {userLogIn,doctorLogIn} = require("../controllers/loginController")
const {vaccination} = require("../controllers/vaccineController");
const {newDoctor,getDoctorById,getAllDoctor,delDocById,doctorVerifiedMail} = require("../controllers/doctorController");
const {newPackage,getPackageById,getAllPackage} = require("../controllers/packageController");
const {capturePayment,verifySignature} = require("../controllers/payment");


router.post("/newSubscriber",newSubscriber);
router.post("/userLogin",userLogIn);
router.post("/doctorLogin",doctorLogIn);
router.post("/updateDose",auth,vaccination);
router.post("/newDoctor",newDoctor);
router.post("/newPackage",auth,newPackage);
router.get("/allSubscriber",getAllSubscriber);
router.get("/allDoctors",getAllDoctor);
router.get("/allPackages",getAllPackage);
router.post("/initializePayment",capturePayment);
router.post("/verifyPayment",verifySignature);
router.get("/doctorById/:id",getDoctorById);
router.get("/subscriberById/:id",getSubscriberById);
router.get("/packageById/:id",getPackageById);
router.delete("/delDocById/:id",delDocById);
router.post("/doctorVerified/:id",doctorVerifiedMail);



module.exports = router;