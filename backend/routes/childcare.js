const express = require("express");
const router = express.Router();

const {newSubscriber,getAllSubscriber} = require("../controllers/subscriberController");
const {userLogIn,doctorLogIn} = require("../controllers/loginController")
const {vaccination} = require("../controllers/vaccineController");
const {newDoctor,getAllDoctor} = require("../controllers/doctorController");
const {newPackage,getAllPackage} = require("../controllers/packageController");


router.post("/PlusCare/Home/newSubscriber",newSubscriber);
router.post("/PlusCare/Home/userLogin",userLogIn);
router.post("/PlusCare/Home/doctorLogin",doctorLogIn);
router.post("/PlusCare/Home/updateDose",vaccination);
router.post("/PlusCare/Home/newDoctor",newDoctor);
router.post("/PlusCare/Home/newPackage",newPackage);
router.get("/PlusCare/Home/allSubscriber",getAllSubscriber);
router.get("/PlusCare/Home/allDoctors",getAllDoctor);
router.get("/PlusCare/Home/allPackages",getAllPackage);


module.exports = router;