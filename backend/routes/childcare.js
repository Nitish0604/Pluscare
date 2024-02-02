const express = require("express");
const router = express.Router();

const {auth} = require("../middleWare/auth");
const {newSubscriber,getAllSubscriber} = require("../controllers/subscriberController");
const {userLogIn,doctorLogIn} = require("../controllers/loginController")
const {vaccination} = require("../controllers/vaccineController");
const {newDoctor,getAllDoctor} = require("../controllers/doctorController");
const {newPackage,getAllPackage} = require("../controllers/packageController");


router.post("/newSubscriber",newSubscriber);
router.post("/userLogin",userLogIn);
router.post("/doctorLogin",doctorLogIn);
router.post("/updateDose",auth,vaccination);
router.post("/newDoctor",newDoctor);
router.post("/newPackage",auth,newPackage);
router.get("/allSubscriber",getAllSubscriber);
router.get("/allDoctors",getAllDoctor);
router.get("/allPackages",getAllPackage);


module.exports = router;