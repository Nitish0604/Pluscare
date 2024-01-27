const express = require("express");
const router = express.Router();

const {subscription,logIn,getAllSubscriber} = require("../controllers/subscriptionController");
const {vaccination} = require("../controllers/vaccineController");
const {postDoctor,getAllDoctor} = require("../controllers/doctorController");


router.post("/ChildCare/Home/subscription",subscription);
router.post("/ChildCare/Home/login",logIn);
router.get("/ChildCare/Home/allSubscriber",getAllSubscriber);
router.post("/ChildCare/Home/updateDose",vaccination);
router.post("/ChildCare/Home/newDoctor",postDoctor);
router.get("/ChildCare/Home/allDoctors",getAllDoctor);


module.exports = router;