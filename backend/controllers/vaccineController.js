const Vaccine = require("../models/vaccineModel");
const Subscriber = require("../models/subscriberModel");
const Doctor = require("../models/doctorModel");

exports.vaccination = async(req,res) => {
    try{
        const doctorId = req.user.id;
        const doctorDetails = await Doctor.findById(doctorId);

        const {patient,vaccineName} = req.body;
        const vaccine = new Vaccine({
            patient,doctor:doctorDetails._id,vaccineName
        });

        const savedvaccine = await vaccine.save();

        const updatedPatient = await Subscriber.findByIdAndUpdate(patient,{$push: {vaccines: savedvaccine._id}}, {new: true})
                            .populate("vaccines")
                            .exec();

        res.json({
            patient: updatedPatient,
        });
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            error: "Error while updating vaccine dose",
            
        })
    }
}